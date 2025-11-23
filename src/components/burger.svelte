<script>
	let burgerOpen = $state(false);

	const toggleBurgerOpen = () => {
		burgerOpen = !burgerOpen;
		const burger = document.querySelector('#burger');
    burger.className = burgerOpen ? '' : 'hidden';
	};
</script>

<div class="burger-wrapper">
	<button type="button" class="burger-icon" onclick={toggleBurgerOpen}>></button>

	<nav id="burger" class="hidden">
		<h1>joseph reed gaines</h1>
		<div class="burger-sections">
			<a href="/">home</a>
			<a href="/contact">contact</a>
		</div>
	</nav>
</div>

<style>
	.burger-wrapper {
		display: none;

		@media (max-width: 600px) {
			display: block;
		}
	}

	.burger-icon {
		font-size: 30px;
		position: fixed;
		top: 8px;
		left: 15px;
	}
</style>
