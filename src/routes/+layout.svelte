<script>
	import { MediaQuery } from 'svelte/reactivity';
	import favicon from '$lib/assets/favicon.svg';
	import Icon from '../components/icon.svelte';
	import Burger from '../components/burger.svelte';

	let { children } = $props();
	let darkMode = $state(true);

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
	<nav class="sidenav">
		<h1>joseph reed gaines</h1>
		<div class="nav-sections">
			<a href="/">home</a>
			<a href="/contact">contact</a>
		</div>
	</nav>

	<Burger />

	<div class="content">
		{@render children()}
	</div>

	<button type="button" onclick={toggleDarkMode} class="lamp-button">
		<Icon name="lamp" className={darkMode ? 'light-fill' : 'dark-fill'} />
	</button>
</div>

<style>
	@import '../styles/global.css';
	@import '../styles/layout.css';
</style>
