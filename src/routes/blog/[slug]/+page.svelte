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
		margin: 0 0 10px -2px;
		transition:
			font-size 0.2s,
			margin 0.2s,
			var(--theme-transition);

		@media (max-width: 450px) {
			font-size: 35px;
			margin: 0 0 5px -2px;
		}
	}

	.prose :global(p:has(img) + p:has(> em:only-child)),
	.prose :global(img + em) {
		display: block;
		font-size: 12px;
		text-align: right;
		transition:
			font-size 0.2s,
			var(--theme-transition);

		@media (max-width: 450px) {
			font-size: 10px;
		}
	}

	.prose :global(h1) {
		font-size: 40px;
		font-weight: normal;
		margin: 30px 0;
		transition:
			font-size 0.2s,
			margin 0.2s,
			var(--theme-transition);

		@media (max-width: 450px) {
			font-size: 22px;
			margin: 20px 0;
		}
	}

	.prose :global(h2) {
		font-size: 30px;
		font-weight: normal;
		margin: 25px 0;
		transition:
			font-size 0.2s,
			margin 0.2s,
			var(--theme-transition);

		@media (max-width: 450px) {
			font-size: 20px;
			margin: 15px 0;
		}
	}

	.prose :global(h3) {
		font-size: 20px;
		font-weight: normal;
		margin: 25px 0;
		transition:
			font-size 0.2s,
			margin 0.2s,
			var(--theme-transition);

		@media (max-width: 450px) {
			font-size: 18px;
			margin: 15px 0;
		}
	}

	.prose :global(h4) {
		font-size: 18px;
		font-weight: normal;
		margin: 20px 0;
		transition:
			font-size 0.2s,
			margin 0.2s,
			var(--theme-transition);

		@media (max-width: 450px) {
			font-size: 16px;
			margin: 15px 0;
		}
	}

	.prose :global(blockquote) {
		margin: 25px 40px;
		transition:
			margin 0.2s,
			var(--theme-transition);

		@media (max-width: 450px) {
			margin: 20px 30px;
		}
	}

	.prose :global(blockquote p) {
		font-size: 20px;
		transition:
			font-size 0.2s,
			var(--theme-transition);

		@media (max-width: 450px) {
			font-size: 16px;
		}
	}

	.prose :global(pre) {
		margin: 30px 0;
		padding: 15px 15px;
		transition: margin 0.2s padding 0.2s;

		@media (max-width: 450px) {
			padding: 10px 10px;
			margin: 20px 0;
		}
	}

	.prose :global(ul) {
		list-style: circle;
		margin: 15px 0 0 0;
		font-size: 16px;
		transition:
			margin 0.2s,
			font-size 0.2s,
			var(--theme-transition);

		@media (max-width: 450px) {
			margin: 10px 0 0 0;
			font-size: 14px;
		}
	}

	.prose :global(ol) {
		margin: 15px 0 0 0;
		font-size: 16px;
		transition:
			margin 0.2s,
			font-size 0.2s,
			var(--theme-transition);

		@media (max-width: 450px) {
			margin: 10px 0 0 0;
			font-size: 14px;
		}
	}

	.prose :global(li ul),
	.prose :global(li ol) {
		margin-top: 0;

		@media (max-width: 450px) {
			margin-top: 0;
		}
	}

	.prose :global(a) {
		text-decoration: underline;
		text-underline-offset: 3px;
		text-decoration-thickness: 2px;
		text-decoration-color: var(--highlight);
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

	.prose {
		margin-top: 20px;
		transition:
			margin-top 0.2s,
			var(--theme-transition);

		@media (max-width: 450px) {
			margin-top: 10px;
		}
	}
</style>
