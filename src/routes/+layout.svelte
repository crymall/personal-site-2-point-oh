<script>
	import favicon from '$lib/assets/favicon.svg';
	import Icon from '../components/icon.svelte';

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

<nav class="topnav">
	<div class="leftside">
		<a href="/">Home</a>
		<a href="/contact">Contact</a>
	</div>
	<button onclick={toggleDarkMode}>
		<Icon name="lamp" className={darkMode ? 'light-fill' : 'dark-fill'} />
	</button>
</nav>

{@render children()}

<style lang="scss">
	@import '../styles/layout.scss';
</style>

