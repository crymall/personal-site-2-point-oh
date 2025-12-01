<script>
	import IconButton from '../icon-button.svelte';
	import { afterNavigate } from '$app/navigation';

	let { links } = $props();
	let burgerOpen = $state(false);

	const toggleBurgerOpen = () => {
		burgerOpen = !burgerOpen;
	};

	afterNavigate(() => {
		burgerOpen = false;
	});
</script>

<div id="burger-wrapper">
	<IconButton buttonClass="burger-button" buttonFunc={toggleBurgerOpen} iconName="burger" />

	<nav id="burger" class:open={burgerOpen}>
		<div class="burger-sections">
			{#each links as link}
				<a href={link.href}>{link.title}</a>
			{/each}
		</div>
	</nav>
</div>

<style>
	#burger-wrapper {
		display: none;

		@media (max-width: 800px) {
			display: block;
		}
	}

	#burger {
		display: none;
	}

	#burger.open {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;

		z-index: 99;
		overflow-y: auto;
	}

	.burger-sections {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 80%;

		a {
			text-decoration: none;
			font-size: 34px;
			margin-bottom: 20px;

			&:hover {
				font-style: italic;
			}
		}
	}
</style>
