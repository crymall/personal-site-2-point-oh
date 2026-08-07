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
			{#each links as link (link.href)}
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- hrefs arrive already resolved from the caller -->
				<a href={link.href} target={link.target || ''}>{link.title}</a>
			{/each}
		</div>
	</nav>
</div>

<style>
	#burger-wrapper {
		display: contents;
	}

	#burger {
		display: none;
	}

	#burger.open {
		@media (max-width: 1013px) {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			position: fixed;
			inset: 0;

			margin: 19px;

			z-index: 99;
			overflow-y: auto;
		}
	}

	.burger-sections {
		display: flex;
		flex-direction: column;

		a {
			text-decoration: underline;
			text-underline-offset: 9px;
			text-decoration-thickness: 6px;
			text-decoration-color: var(--highlight);
			font-size: 88px;
			margin: 0 0 25px 0;
			transition:
				font-size 0.2s,
				var(--theme-transition);
			font-style: italic;

			@media (max-width: 563px) {
				font-size: 56px;
			}

			@media (hover: hover) {
				&:hover {
					font-style: normal;
				}
			}
		}
	}
</style>
