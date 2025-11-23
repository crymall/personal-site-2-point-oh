<script>
	import Burger from '../components/burger.svelte';
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

<Burger {header} {links} />

<style>
	h1 {
		margin: 5px 0 0 10px;
		font-size: 27px;
	}

	.sidenav {
		display: flex;
		flex-direction: column;
		padding: 10px 15px 0 10px;
		min-width: 275px;

		@media (max-width: 600px) {
			display: none;
		}
	}

	.nav-sections {
		display: flex;
		flex-direction: column;
		margin: 25px 0 0 25px;

		a {
			text-decoration: none;
			margin-bottom: 13px;

			&:hover {
				font-style: italic;
			}
		}
	}
</style>
