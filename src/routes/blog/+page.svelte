<script>
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
		{#each paginatedPosts as post}
			<li class="post">
				<div class="postHeader">
					<a href={post.slug} class="postTitle">{post.title}</a>
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
		padding-bottom: 80px;
	}

	.pageTitle {
		margin: 10px 0 10px 0;
		transition:
			margin-bottom 0.2s,
			var(--theme-transition);

		@media (max-width: 450px) {
			margin-bottom: 5px;
		}
	}

	.subtitle {
		font-style: italic;
		font-size: 16px;
		transition:
			font-size 0.2s,
			var(--theme-transition);

		@media (max-width: 450px) {
			font-size: 14px;
		}
	}

	.posts {
		list-style: none;
		padding: 0;
		margin: 40px 0 0 0;
		transition:
			margin 0.2s,
			var(--theme-transition);

		@media (max-width: 450px) {
			margin: 30px 0 0 0;
		}
	}

	.post {
		padding-top: 35px;
		margin-bottom: 35px;
		border-top: 2px dashed var(--dark-gray);
		transition:
			padding-top 0.2s,
			margin-bottom 0.2s,
			border-color 0.2s,
			background-color 0.2s;

		@media (max-width: 450px) {
			padding-top: 25px;
			margin-bottom: 25px;
		}
	}

	:global(body.dark-mode) .post {
		border-top: 2px dashed var(--light-gray);
	}

	.postHeader {
		display: flex;
		justify-content: space-between;
		align-items: center;
		transition: var(--theme-transition);
	}

	.postTitle {
		font-size: 30px;
		transition:
			font-size 0.2s,
			var(--theme-transition);
		text-decoration: underline;
		text-underline-offset: 3px;
		text-decoration-color: var(--highlight);
		text-decoration-thickness: 2px;

		@media (max-width: 450px) {
			font-size: 25px;
		}

		&:hover {
			font-style: italic;
		}
	}

	.postDate {
		font-size: 12px;
		margin: 0;
		transition:
			font-size 0.2s,
			var(--theme-transition);
		font-style: italic;

		@media (max-width: 450px) {
			font-size: 10px;
		}
	}

	.postDescription {
		font-size: 16px;
		margin: 0;
		font-style: italic;
		transition:
			font-size 0.2s,
			var(--theme-transition);

		@media (max-width: 450px) {
			font-size: 14px;
		}
	}

	.postSnippet {
		font-size: 18px;
		margin: 10px 0 0 0;
		transition:
			font-size 0.2s,
			margin 0.2s,
			var(--theme-transition);
		width: 95%;

		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;

		@media (max-width: 450px) {
			font-size: 16px;
			margin: 5px 0 0 0;
		}
	}

	.pagination {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: absolute;
		bottom: 0;
		left: 5px;
		right: 0;
		transition: var(--theme-transition);
	}

	.pagination button {
		background-color: transparent;
		border: none;
		padding: 5px 12px;
		cursor: pointer;
		font-size: 16px;
		border-radius: 3px;
		transition:
			padding 0.2s,
			font-size 0.2s,
			var(--theme-transition);

		@media (max-width: 450px) {
			font-size: 14px;
			padding: 4px 10px;
		}
	}

	:global(body.dark-mode) .pagination button {
		background-color: transparent;
		border-color: var(--light-gray);
	}

	.pagination button:hover:not(:disabled) {
		background-color: var(--dark-gray);
		color: var(--light-gray);
	}

	:global(body.dark-mode) .pagination button:hover:not(:disabled) {
		background-color: var(--light-gray);
		color: var(--dark-gray);
	}

	.pagination button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.page-info {
		font-style: italic;
		font-size: 16px;
		transition:
			font-size 0.2s,
			var(--theme-transition);

		@media (max-width: 450px) {
			font-size: 14px;
		}
	}
</style>
