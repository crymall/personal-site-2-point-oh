<script>
	import Burger from './helpers/burger.svelte';
	let { header, links } = $props();
</script>

<nav class="sidenav">
	<h1>{header}</h1>
	<div class="nav-sections">
		{#each links as link}
			<a href={link.href}>{link.title}</a>
		{/each}
	</div>
</nav>

<Burger {links} />

<style>
	h1 {
		margin: 15px 0 0 15px;
		font-size: 27px;
	}

	.sidenav {
		display: flex;
		flex-direction: column;
		padding: 10px 15px 0 10px;
		min-width: 275px;

		@media (max-width: 800px) {
			display: none;
		}
	}

	.nav-sections {
		display: flex;
		flex-direction: column;
		margin: 30px 0 0 35px;

		a {
			text-decoration: none;
			font-size: 20px;
			margin-bottom: 14px;

			&:hover {
				font-style: italic;
			}
		}
	}
</style>
