<script>
	import Burger from './helpers/burger.svelte';
	let { header, links } = $props();
</script>

<nav class="sidenav">
	<h1>{header}</h1>
	<div class="nav-sections">
		{#each links as link}
			<a href={link.href} target={link.target || ''}>{link.title}</a>
		{/each}
	</div>
</nav>

<Burger {links} />

<style>
	h1 {
		font-size: 27px;
		margin: 20px 0 0 0;
	}

	.sidenav {
		display: flex;
		flex-direction: column;
		margin: 0 15px 0 25px;
		min-width: 220px;

		@media (max-width: 810px) {
			display: none;
		}
	}

	.nav-sections {
		display: flex;
		flex-direction: column;
		margin: 25px 0 0 0;

		a {
			text-decoration: underline;
			text-underline-offset: 3px;
			font-size: 20px;
			margin-bottom: 14px;
			font-style: italic;

			&:hover {
				font-style: normal;
			}
		}
	}
</style>
