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
		buttonLabel="Site Navigation"
		buttonClass="burger-button"
		buttonFunc={toggleBurgerOpen}
		iconName="burger"
		iconClass="burger-icon"
	/>

	<nav id="burger" class:open={burger.open}>
		<div class="burger-sections">
			{#each links as link}
				<a href={link.href} target={link.target || ''}>{link.title}</a>
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
		align-items: center;
		justify-content: center;

		position: fixed;
		inset: 0;
		margin: 15px;

		z-index: 99;
		overflow-y: auto;
	}

	.burger-sections {
		display: flex;
		flex-direction: column;

		a {
			text-decoration: underline;
			text-underline-offset: 7px;
			font-size: 70px;
			margin: 0 0 20px 0;
			transition: font-size 0.2s,
			var(--theme-transition);
			font-style: italic;

			@media (max-width: 450px) {
				font-size: 45px;
			}

			&:hover {
				font-style: normal;
			}
		}
	}
</style>
