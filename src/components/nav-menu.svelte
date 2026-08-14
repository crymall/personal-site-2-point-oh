<script>
	import Burger from './helpers/burger.svelte';
	let { header, links } = $props();
</script>

<div class="sidenav-shell">
	<nav class="sidenav">
		<h1>{header}</h1>
		<div class="nav-sections">
			{#each links as link (link.href)}
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- hrefs arrive already resolved from the caller -->
				<a href={link.href} target={link.target || ''}>{link.title}</a>
			{/each}
		</div>
	</nav>
</div>

<Burger {links} />

<style>
	h1 {
		font-size: 34px;
		margin: 25px 0 0 0;
	}

	.sidenav-shell {
		flex: 0 0 auto;
		width: 310px;
		overflow: hidden;
		display: flex;
		transition: width 0.2s;

		@media (max-width: 1013px) {
			width: 0;
		}
	}

	.sidenav {
		display: flex;
		flex-direction: column;
		flex: 0 0 auto;
		margin: 0 19px 0 31px;
		width: 256px;
		transition:
			transform 0.2s,
			opacity 0.2s,
			visibility 0s;

		@media (max-width: 1013px) {
			transform: translateX(-100%);
			opacity: 0;
			visibility: hidden;
			transition:
				transform 0.2s,
				opacity 0.2s,
				visibility 0s 0.2s;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.sidenav-shell,
		.sidenav {
			transition-duration: 0s;
		}
	}

	.nav-sections {
		display: flex;
		flex-direction: column;
		margin: 31px 0 0 0;

		a {
			font-size: 25px;
			margin-bottom: 18px;
			font-style: italic;

			@media (hover: hover) {
				&:hover {
					font-style: normal;
				}
			}
		}
	}
</style>
