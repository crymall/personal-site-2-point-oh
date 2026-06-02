<script module>
	let imageAlreadyLoaded = false;
</script>

<script>
	import { base } from '$app/paths';
	import meImage from '../assets/me.jpg';

	let loaded = $state(imageAlreadyLoaded);

	function handleLoad() {
		loaded = true;
		imageAlreadyLoaded = true;
	}
</script>

<h2>Hi there.</h2>

<div class="profile-pic-wrapper">
	<img
		src={meImage}
		alt="Joseph Reed Gaines"
		class="profile-pic"
		class:loaded
		width="2000"
		height="3000"
		onload={handleLoad}
	/>
</div>
<p>My full name is Joseph Reed Gaines, but you can call me <span class="bold">Reed.</span></p>

<p>
	I'm a <span class="bold">developer</span>, a <span class="bold">writer</span>
	and a <span class="bold">teacher</span>, with experience in the for-profit, nonprofit, academic,
	enterprise, and small-business arenas.
</p>

<p>
	What motivates me? Care and purpose. Craft, curiosity, and lifelong learning. Consensus over the
	need to be correct. Collaborating on interesting projects with capable, kind people. I'm
	particularly moved to make a positive social impact, and to share and acquire knowledge across
	disciplines.
</p>

<p>
	I'm currently based in <span class="bold">Athens, Vermont</span>, but I'm moving to
	<span class="bold">Los Angeles, California</span> within the year. I'm looking for remote and local
	opportunities in Southern California. I'm available for full-time and freelance work.
</p>

<p>
	In a world where you can't be sure who is real and who isn't (literally), I built this website to
	demonstrate that I'm real. This is my deliberate digital footprint. Feel free to take a look
	around, and if you think we have something to talk about, don't be shy—<a href="{base}/contact"
		>say hi</a
	>.
</p>

<style>
	.profile-pic-wrapper {
		float: right;
		width: 40%;
		max-width: 240px;
		height: auto;
		margin: 10px 0 20px 20px;
		border: 3px solid var(--dark-gray);
		background-color: var(--light-gray);
		transition: margin 0.2s;
		display: flex;
	}

	:global(body.dark-mode) .profile-pic-wrapper {
		border-color: var(--light-gray);
		background-color: var(--dark-gray);
	}

	.profile-pic {
		width: 100%;
		height: auto;
		opacity: 0;
		filter: brightness(1.15);
		transition: opacity 0.4s ease-in, filter 0.2s;
	}

	:global(body.dark-mode) .profile-pic {
		filter: brightness(1);
	}

	.profile-pic.loaded {
		opacity: 1;
	}

	@media (max-width: 650px) {
		.profile-pic-wrapper {
			float: right;
			width: 40%;
			margin: 15px 0 15px 20px;
		}

		.profile-pic {
			aspect-ratio: 16 / 9;
			object-fit: cover;
			object-position: center 20%;
		}
	}

	@media (max-width: 450px) {
		.profile-pic-wrapper {
			display: none;
		}
	}
</style>
