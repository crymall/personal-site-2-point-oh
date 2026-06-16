export async function load({ fetch, setHeaders }) {
	setHeaders({
		'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0'
	});
	const response = await fetch('/api/posts');
	const posts = await response.json();
	return { posts };
}