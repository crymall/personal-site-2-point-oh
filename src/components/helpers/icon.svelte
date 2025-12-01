<script>
	import { icons } from "../../utils/icons";
	let { name, focusable = false, className } = $props();

	const displayIcon = icons.find((e) => e.name === name);
</script>

<svg class={className} {focusable} viewBox="0 0 {displayIcon.box} {displayIcon.box}">
	{@html displayIcon.svg}
</svg>

<style>
	@import '../../styles/variables.css';

	svg {
		border-radius: 3px;
		border: none;
		padding: 4px;
		backface-visibility: hidden;
		height: 30px;
		width: 30px;

		transition:
			background-color 0.15s,
			fill 0.15s,
			height 0.2s,
			width 0.2s;

		@media (max-width: 800px) {
			height: 22px;
			width: 22px;
		}
	}

	.dark-fill {
		fill: var(--dark-gray);

		&:hover {
			background-color: var(--dark-gray);
			fill: var(--light-gray);
		}
	}

	.light-fill {
		fill: var(--light-gray);

		&:hover {
			background-color: var(--light-gray);
			fill: var(--dark-gray);
		}
	}
</style>
