<script>
	import { resolve } from '$app/paths';

	let { data } = $props();

	let currentPage = $state(1);
	const postsPerPage = 10;

	let totalPages = $derived(Math.ceil(data.posts.length / postsPerPage) || 1);
	let paginatedPosts = $derived(
		data.posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
	);
</script>

<div class="blog-wrapper">
	<h2 class="pageTitle">Training Corpus</h2>
	<p class="subtitle">
		This is my contribution to feed the bots, A.K.A. my semiweekly blog. Hopefully, with my help,
		the machines can become one iota more wry.
	</p>
	<ul class="posts">
		{#each paginatedPosts as post (post.slug)}
			<li class="post">
				<div class="postHeader">
					<a href={resolve('/blog/[slug]', { slug: post.slug })} class="postTitle">{post.title}</a>
					<p class="postDate">{post.date}</p>
				</div>
				<p class="postSnippet">{post.snippet}</p>
			</li>
		{/each}
	</ul>
</div>

<div class="pagination">
	<button disabled={currentPage === 1} onclick={() => currentPage--}> &larr; Previous </button>
	<span class="page-info">Page {currentPage} of {totalPages}</span>
	<button disabled={currentPage === totalPages} onclick={() => currentPage++}> Next &rarr; </button>
</div>

<style>
	.blog-wrapper {
		padding-bottom: 100px;
	}

	.pageTitle {
		margin: 13px 0 13px 0;
		transition:
			margin-bottom 0.2s,
			var(--theme-transition);

		@media (max-width: 563px) {
			margin-bottom: 6px;
		}
	}

	.subtitle {
		font-style: italic;
		font-size: 20px;
		transition:
			font-size 0.2s,
			var(--theme-transition);

		@media (max-width: 563px) {
			font-size: 18px;
		}
	}

	.posts {
		list-style: none;
		padding: 0;
		margin: 50px 0 0 0;
		transition:
			margin 0.2s,
			var(--theme-transition);

		@media (max-width: 563px) {
			margin: 38px 0 0 0;
		}
	}

	.post {
		padding-top: 44px;
		margin-bottom: 44px;
		border-top: 3px dashed var(--dark-gray);
		transition:
			padding-top 0.2s,
			margin-bottom 0.2s,
			border-color 0.2s,
			background-color 0.2s;

		@media (max-width: 563px) {
			padding-top: 31px;
			margin-bottom: 31px;
		}
	}

	:global(body.dark-mode) .post {
		border-top: 3px dashed var(--light-gray);
	}

	.postHeader {
		display: flex;
		justify-content: space-between;
		align-items: center;
		transition: var(--theme-transition);
	}

	.postTitle {
		font-size: 38px;
		transition:
			font-size 0.2s,
			var(--theme-transition);
		text-decoration: underline;
		text-underline-offset: 4px;
		text-decoration-color: var(--highlight);
		text-decoration-thickness: 3px;

		@media (max-width: 563px) {
			font-size: 31px;
		}

		@media (hover: hover) {
			&:hover {
				font-style: italic;
			}
		}
	}

	.postDate {
		font-size: 15px;
		margin: 0;
		transition:
			font-size 0.2s,
			var(--theme-transition);
		font-style: italic;

		@media (max-width: 563px) {
			font-size: 13px;
		}
	}

	.postDescription {
		font-size: 20px;
		margin: 0;
		font-style: italic;
		transition:
			font-size 0.2s,
			var(--theme-transition);

		@media (max-width: 563px) {
			font-size: 18px;
		}
	}

	.postSnippet {
		font-size: 23px;
		margin: 13px 0 0 0;
		transition:
			font-size 0.2s,
			margin 0.2s,
			var(--theme-transition);
		width: 95%;

		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;

		@media (max-width: 563px) {
			font-size: 20px;
			margin: 6px 0 0 0;
		}
	}

	.pagination {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: absolute;
		bottom: 0;
		left: 6px;
		right: 0;
		transition: var(--theme-transition);
	}

	.pagination button {
		background-color: transparent;
		border: none;
		padding: 6px 15px;
		cursor: pointer;
		font-size: 20px;
		border-radius: 4px;
		transition:
			padding 0.2s,
			font-size 0.2s,
			var(--theme-transition);

		@media (max-width: 563px) {
			font-size: 18px;
			padding: 5px 13px;
		}
	}

	:global(body.dark-mode) .pagination button {
		background-color: transparent;
		border-color: var(--light-gray);
	}

	@media (hover: hover) {
		.pagination button:hover:not(:disabled) {
			background-color: var(--dark-gray);
			color: var(--light-gray);
		}

		:global(body.dark-mode) .pagination button:hover:not(:disabled) {
			background-color: var(--light-gray);
			color: var(--dark-gray);
		}
	}

	.pagination button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.page-info {
		font-style: italic;
		font-size: 20px;
		transition:
			font-size 0.2s,
			var(--theme-transition);

		@media (max-width: 563px) {
			font-size: 18px;
		}
	}
</style>
