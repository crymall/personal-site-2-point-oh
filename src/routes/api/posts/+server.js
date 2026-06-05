import { json } from '@sveltejs/kit';
import { render } from 'svelte/server';

async function getPosts() {
	let posts = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const post = { ...file.metadata, slug };
			const { html } = render(file.default);
			const snippet = html.replace(/<[^>]*>?/gm, '').trim();
			post.snippet = snippet.slice(0, 300);
			post.published && posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
