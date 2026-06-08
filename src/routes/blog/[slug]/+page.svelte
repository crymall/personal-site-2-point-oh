<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<h2 class="articleTitle">{data.meta.title}</h2>
		<p class="meta">Published on {data.meta.date}</p>
	</hgroup>

	<div class="prose">
		<data.content />
	</div>
</article>

<style>
	.articleTitle {
		font-size: 50px;
		margin: 0;
		transition:
			font-size 0.2s,
			margin 0.2s,
			var(--theme-transition);

		@media (max-width: 450px) {
			font-size: 35px;
		}
	}

	.meta {
		font-size: 12px;
		font-style: italic;
		transition:
			font-size 0.2s,
			margin-bottom 0.2s,
			var(--theme-transition);
		margin: 0;

		@media (max-width: 450px) {
			font-size: 10px;
		}
	}
</style>
