<script>
	import IconButton from '../icon-button.svelte';
	import { afterNavigate } from '$app/navigation';
	import { burger, toggleBurgerOpen, closeBurger } from '../../utils/state.svelte';

	let { links } = $props();

	afterNavigate(() => {
		closeBurger();
	});
</script>

<div id="burger-wrapper">
	<IconButton
		buttonClass="burger-button"
		buttonFunc={toggleBurgerOpen}
		iconName="burger"
		iconClass="burger-icon"
	/>

	<nav id="burger" class:open={burger.open}>
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
		margin: 15px;

		z-index: 99;
		overflow-y: auto;
	}

	.burger-sections {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 25px 0 0 15px;
		transition: margin 0.2s;

		@media (max-width: 450px) {
			margin: 50px 0 0 15px;
		}

		h2 {
			margin: 0 0 35px 0;
			font-size: 70px;
			transition: font-size 0.2s;

			@media (max-width: 450px) {
				font-size: 46px;
			}
		}

		a {
			text-decoration: none;
			font-size: 34px;
			margin: 0 0 20px 20px;
			transition: font-size 0.2s;

			@media (max-width: 450px) {
				font-size: 30px;
			}

			&:hover {
				font-style: italic;
			}
		}
	}
</style>
