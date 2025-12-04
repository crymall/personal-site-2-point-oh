<script>
	import { MediaQuery } from 'svelte/reactivity';
	import favicon from '$lib/assets/favicon.svg';
	import { toggleDarkMode } from '../utils/state.svelte';

	import Icon from '../components/helpers/icon.svelte';
	import NavMenu from '../components/nav-menu.svelte';
	import IconButton from '../components/icon-button.svelte';

	let { children } = $props();

	const siteName = 'joseph reed gaines';
	const navLinks = [
		{ title: 'home', href: '/' },
		{ title: 'contact', href: '/contact' }
	];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="global-layout">
	<NavMenu header="joseph reed gaines" links={navLinks} />
	<IconButton buttonClass="lamp-button" buttonFunc={toggleDarkMode} iconName={'lamp'} />

	<div class="content">
		{@render children()}

		<footer>
			<p>© 2025 joseph reed gaines. all rights reserved.</p>
		</footer>
	</div>
</div>

<style>
	@import '../styles/global.css';

	.global-layout {
		position: relative;
		display: flex;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 25px 65px 0 40px;
		max-width: 810px;
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

	footer {
		margin-top: 30px;
		font-style: italic;
		z-index: 100;

		p {
			margin: 10px 10px 0 10px;
			font-size: 14px;
		}
	}
</style>
