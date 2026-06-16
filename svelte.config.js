import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { codeToHtml } from 'shiki';
import { enhancedImages } from 'mdsvex-enhanced-images';

const mdsvexOptions = {
	extensions: ['.md'],
	remarkPlugins: [enhancedImages],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			let html;
			try {
				html = await codeToHtml(code, {
					lang,
					themes: {
						light: 'github-light',
						dark: 'github-dark'
					}
				});
			} catch {
				html = await codeToHtml(code, {
					lang: 'text',
					themes: {
						light: 'github-light',
						dark: 'github-dark'
					}
				});
			}
			return `{@html \`${escapeSvelte(html)}\` }`;
		}
	}
};

const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: ''
		},
		version: {
			name: Date.now().toString()
		}
	},
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)]
};

export default config;
