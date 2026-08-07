<script>
	import { asset, resolve } from '$app/paths';
	import { page } from '$app/stores';
	import favicon from '$lib/assets/favicon.png';
	import { toggleDarkMode, burger } from '../utils/state.svelte';
	import '../styles/global.css';

	import NavMenu from '../components/nav-menu.svelte';
	import IconButton from '../components/icon-button.svelte';

	let { children } = $props();

	const navLinks = [
		{ title: 'Home', href: resolve('/') },
		{ title: 'Contact', href: resolve('/contact') },
		{ title: 'Resume', target: '_blank', href: asset('/resume.pdf') },
		{ title: 'Portfolio', target: '_blank', href: `https://midden.reedgaines.com` }
		// { title: 'Blog', href: resolve('/blog') }
	];

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
		min-height: calc(100dvh - 38px);
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 13px 81px 0 50px;
		max-width: 1013px;
		flex: 1;
		transition:
			margin 0.2s,
			var(--theme-transition);

		@media (max-width: 1013px) {
			margin: 31px 31px 0 19px;
		}

		@media (max-width: 563px) {
			margin: 63px 19px 0 19px;
		}

		@media (max-width: 500px) {
			margin: 63px 6px 0 6px;
		}
	}

	.burgerized {
		@media (max-width: 1013px) {
			height: 0;
			overflow: hidden;
		}
	}

	footer {
		margin: 38px 0 0 0;
		font-style: italic;
		transition:
			margin 0.2s,
			padding-bottom 0.2s,
			var(--theme-transition);

		@media (max-width: 1013px) {
			padding-bottom: 19px;
		}

		@media (max-width: 563px) {
			margin: 25px 0 0 0;
		}

		p {
			margin: 19px 0px 13px 0px;
			font-size: 18px;
			transition:
				margin 0.2s,
				font-size 0.2s,
				var(--theme-transition);

			@media (max-width: 563px) {
				margin: 13px 0 6px 0;
				font-size: 15px;
			}
		}
	}
</style>
