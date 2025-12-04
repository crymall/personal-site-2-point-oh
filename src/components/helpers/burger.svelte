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
	<IconButton
		buttonClass="burger-button"
		buttonFunc={toggleBurgerOpen}
		iconName="burger"
		iconClass="burger-icon"
	/>

	<nav id="burger" class:open={burgerOpen}>
		<div class="burger-sections">
			<h2>j.r. gaines</h2>
			{#each links as link}
				<a href={link.href}>{link.title}</a>
			{/each}
		</div>
	</nav>
</div>

<style>
	#burger-wrapper {
		display: none;

		@media (max-width: 810px) {
			display: block;
		}
	}

	#burger {
		display: none;
	}

	#burger.open {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;

		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		margin: 15px;

		z-index: 99;
		overflow-y: auto;
	}

	.burger-sections {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 50px 0 0 15px;

		h2 {
			margin: 0 0 25px 0;
			font-size: 70px;

			@media (max-width: 450px) {
				font-size: 46px;
			}
		}

		a {
			text-decoration: none;
			font-size: 34px;
			margin: 0 0 20px 30px;

			@media (max-width: 450px) {
				font-size: 30px;
			}

			&:hover {
				font-style: italic;
			}
		}
	}
</style>
