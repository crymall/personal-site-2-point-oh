<script>
	import { MediaQuery } from 'svelte/reactivity';
	import { base } from '$app/paths';
	import favicon from '$lib/assets/favicon.png';
	import { toggleDarkMode, burger } from '../utils/state.svelte';
	import '../styles/global.css';

	import Icon from '../components/helpers/icon.svelte';
	import NavMenu from '../components/nav-menu.svelte';
	import IconButton from '../components/icon-button.svelte';

	let { children } = $props();

	const siteName = 'joseph reed gaines';
	const navLinks = [
		{ title: 'Home', href: `${base}/` },
		{ title: 'Contact', href: `${base}/contact` },
		{ title: 'Resume', target: '_blank', href: `${base}/resume.pdf` },
		{ title: 'Portfolio', target: '_blank', href: `https://midden.reedgaines.com` }
	];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="global-layout">
	<NavMenu header="Reed Gaines" links={navLinks} />
	<IconButton
		buttonLabel="Toggle Dark Mode"
		buttonClass="lamp-button"
		buttonFunc={toggleDarkMode}
		iconName={'lamp'}
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
		max-height: calc(100dvh - 30px);
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 10px 65px 0 40px;
		max-width: 810px;
		max-height: 100dvh;
		transition: margin 0.2s;

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

		@media (max-width: 810px) {
			padding-bottom: 15px;
		}

		p {
			margin: 10px 0px 10px 0px;
			font-size: 14px;

			@media (max-width: 450px) {
				margin: 10px 0 0 0;
				font-size: 12px;
			}
		}
	}
</style>
