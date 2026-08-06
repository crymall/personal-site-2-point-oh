<script>
	import { base } from '$app/paths';
</script>

<h2>Hi there</h2>

<div class="profile-pic-wrapper">
	<enhanced:img
		src="../assets/me.jpg"
		alt="Joseph Reed Gaines"
		class="profile-pic"
		width="2000"
		height="3000"
	/>
</div>
<p>My full name is Joseph Reed Gaines, but you can call me <span class="bold">Reed.</span></p>

<p>
	I'm a <span class="bold">developer</span>, a <span class="bold">writer</span>
	and a <span class="bold">teacher</span>, with experience in the for-profit, nonprofit, academic,
	enterprise, and small-business arenas. I think I'm pretty cool, but mostly, I just try to be kind.
</p>

<p>
	I'm based in <span class="bold">Los Angeles, California</span>. I'm looking for remote and local
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
		margin: 5px 0 10px 20px;
		transition:
			margin 0.2s,
			var(--theme-transition);
		display: flex;
	}

	.profile-pic {
		width: 100%;
		height: auto;
	}

	@media (max-width: 650px) {
		.profile-pic-wrapper {
			margin: 15px 0 15px 20px;
		}
	}

	@media (max-width: 450px) {
		.profile-pic-wrapper {
			display: none;
		}
	}
</style>
