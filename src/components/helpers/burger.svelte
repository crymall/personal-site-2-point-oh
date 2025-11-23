<script>
	import IconButton from "../icon-button.svelte";

	let { header, links } = $props();
	let burgerOpen = $state(false);

	const toggleBurgerOpen = () => {
		burgerOpen = !burgerOpen;
		const burger = document.querySelector('#burger');
		burger.className = burgerOpen ? '' : 'hidden';
	};
</script>

<div class="burger-wrapper">
	<IconButton buttonClass="burger-button" buttonFunc={toggleBurgerOpen} iconName="burger" />
	<!-- <button type="button" class="burger-icon" onclick={toggleBurgerOpen}>></button> -->

	<nav id="burger" class="hidden">
		<h1>{header}</h1>
		<div class="burger-sections">
			{#each links as link}
				<a href={link.href}>{link.title}</a>
			{/each}
		</div>
	</nav>
</div>

<style>
	.burger-wrapper {
		display: none;

		@media (max-width: 600px) {
			display: block;
		}
	}
</style>
