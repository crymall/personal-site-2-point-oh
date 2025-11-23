<script>
	import { MediaQuery } from 'svelte/reactivity';
	import favicon from '$lib/assets/favicon.svg';
	import Icon from '../components/icon.svelte';
	import Navmenu from '../components/navmenu.svelte';

	let { children } = $props();
	let darkMode = $state(true);

	const siteName = 'joseph reed gaines';
	const navLinks = [
		{ title: 'home', href: '/' },
		{ title: 'contact', href: '/contact' }
	];

	const toggleDarkMode = () => {
		darkMode = !darkMode;
		const body = document.querySelector('body');
		body.className = darkMode ? 'dark-mode' : '';
	};
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="global-layout">
	<Navmenu header="joseph reed gaines" links={navLinks} />

	<div class="content">
		{@render children()}
	</div>

	<button type="button" onclick={toggleDarkMode} class="lamp-button">
		<Icon name="lamp" className={darkMode ? 'light-fill' : 'dark-fill'} />
	</button>
</div>

<style>
	@import '../styles/global.css';

	p {
		font-size: 20px;
		line-height: 26px;
		margin: 15px 0px;

		transition: font-size 0.2s;

		@media (max-width: 600px) {
			font-size: 16px;
			line-height: 20px;
		}
	}

	.lamp-button {
		position: fixed;
		height: 38px;
		width: 38px;
		top: 10px;
		right: 15px;
		background-color: transparent;
		cursor: pointer;

		@media (max-width: 600px) {
			height: 30px;
			width: 30px;
		}
	}
</style>
