<script>
	import { base } from '$app/paths';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import favicon from '$lib/assets/favicon.png';
	import { toggleDarkMode, burger } from '../utils/state.svelte';
	import '../styles/global.css';

	import NavMenu from '../components/nav-menu.svelte';
	import IconButton from '../components/icon-button.svelte';

	let { children } = $props();

	const navLinks = [
		{ title: 'Home', href: `${base}/` },
		{ title: 'Contact', href: `${base}/contact` },
		{ title: 'Resume', target: '_blank', href: `${base}/resume.pdf` },
		{ title: 'Portfolio', target: '_blank', href: `https://midden.reedgaines.com` },
		{ title: 'Blog', href: `${base}/blog` }
	];

	afterNavigate(() => {
		const images = document.querySelectorAll('img');
		images.forEach((img) => {
			if (img.complete) {
				img.classList.add('loaded');
			} else {
				img.addEventListener('load', () => img.classList.add('loaded'));
			}
		});
	});

	let pageTitle = $derived($page.data.meta?.title || 'Joseph Reed Gaines');
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{pageTitle}</title>
	<meta
		name="description"
		content="Joseph Reed Gaines is a web developer, teacher, writer, and friend. This is his personal and professional website."
	/>
</svelte:head>

<div class="global-layout">
	<NavMenu header="Reed Gaines" links={navLinks} />
	<IconButton
		buttonLabel="Toggle Dark Mode"
		buttonClass="lamp-button"
		buttonFunc={toggleDarkMode}
		iconName="lamp"
	/>

	<div class="content">
		<div class="body-container" class:burgerized={burger.open}>
			{@render children()}
		</div>
		<footer>
			<p>© 2026 Joseph Reed Gaines</p>
		</footer>
	</div>
</div>

<style>
	.global-layout {
		position: relative;
		display: flex;
		min-height: calc(100dvh - 30px);
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 10px 65px 0 40px;
		max-width: 810px;
		flex: 1;
		transition:
			margin 0.2s,
			var(--theme-transition);

		@media (max-width: 810px) {
			margin: 25px 25px 0 15px;
		}

		@media (max-width: 450px) {
			margin: 50px 15px 0 15px;
		}

		@media (max-width: 400px) {
			margin: 50px 5px 0 5px;
		}
	}

	.burgerized {
		height: 0;
		overflow: hidden;
	}

	footer {
		margin: 30px 0 0 0;
		font-style: italic;
		transition:
			margin 0.2s,
			padding-bottom 0.2s,
			var(--theme-transition);

		@media (max-width: 810px) {
			padding-bottom: 15px;
		}

		@media (max-width: 450px) {
			margin: 20px 0 0 0;
		}

		p {
			margin: 15px 0px 10px 0px;
			font-size: 14px;
			transition:
				margin 0.2s,
				font-size 0.2s,
				var(--theme-transition);

			@media (max-width: 450px) {
				margin: 10px 0 5px 0;
				font-size: 12px;
			}
		}
	}
</style>
