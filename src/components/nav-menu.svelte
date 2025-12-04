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
		font-size: 27px;
		margin: 0;
	}

	.sidenav {
		display: flex;
		flex-direction: column;
		margin: 25px 15px 0 25px;
		min-width: 275px;

		@media (max-width: 810px) {
			display: none;
		}
	}

	.nav-sections {
		display: flex;
		flex-direction: column;
		margin: 25px 0 0 30px;

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
