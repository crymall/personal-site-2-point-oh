<script>
	import Burger from '../components/helpers/burger.svelte';
</script>

<div class="body-container">
	<h2>hi there.</h2>

	<p>you can call me <span class="bold">Reed.</span></p>

	<p>i'm a <span class="bold">writer</span>, a <span class="bold">programmer</span>, a <span class="bold">teacher</span>, a <span class="bold">photographer</span>, and most importantly, someone trying to make his own little place in the world, just like you.</p>

	<p>in my work, i'm looking to collaborate on interesting projects with capable, kind people. i'm particularly moved to make a positive social impact, and to share and acquire knowledge across disciplines.</p>

	<p>currently, i'm based in new england, and i'm open to remote and local opportunities, including:</p>
</div>

<style>
	@import '../styles/variables.css';

	.body-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 25px 65px 0 35px;
		max-width: 800px;
	}

	h2 {
		margin: 0 0 10px 0;
		font-size: 70px;
	}

	p {
		font-size: 20px;
		line-height: 26px;
		margin: 15px 0 0 20px;

		transition: font-size 0.2s;

		@media (max-width: 600px) {
			font-size: 16px;
			line-height: 20px;
		}
	}

	.bold {
		font-weight: bold;
	}
</style>
