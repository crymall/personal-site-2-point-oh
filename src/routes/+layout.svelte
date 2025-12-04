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

	<div class="content">
		{@render children()}
	</div>

	<IconButton
		buttonClass="lamp-button"
		buttonFunc={toggleDarkMode}
		iconName={'lamp'}
	/>
</div>

<style>
	@import '../styles/global.css';

	.global-layout {
		position: relative;
	}

	.content {
		display: flex;
		flex-direction: column;
		margin: 25px 65px 0 40px;
		max-width: 810px;
		transition: padding 0.2s;

		@media (max-width: 810px) {
			margin: 50px 25px 0 15px;
		}
	}
</style>
