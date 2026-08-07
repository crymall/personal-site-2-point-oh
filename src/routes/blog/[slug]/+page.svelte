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
		font-size: 63px;
		margin: 13px 0 0 0;
		transition:
			font-size 0.2s,
			margin 0.2s,
			var(--theme-transition);

		@media (max-width: 563px) {
			margin: 0;
			font-size: 44px;
		}
	}

	.meta {
		font-size: 15px;
		font-style: italic;
		transition:
			font-size 0.2s,
			margin-bottom 0.2s,
			var(--theme-transition);
		margin: 0;

		@media (max-width: 563px) {
			font-size: 13px;
		}
	}
</style>
