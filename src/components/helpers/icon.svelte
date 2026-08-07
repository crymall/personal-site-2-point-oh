<script>
	import { icons } from '../../utils/icons';
	let { name, focusable = false, className } = $props();

	const displayIcon = icons.find((e) => e.name === name);
</script>

<svg class={className} {focusable} viewBox="0 0 {displayIcon.box} {displayIcon.box}">
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- svg markup is a hardcoded local constant, never user input -->
	{@html displayIcon.svg}
</svg>

<style>
	@import '../../styles/variables.css';

	svg {
		border-radius: 4px;
		border: none;
		padding: 5px;
		backface-visibility: hidden;
		height: 38px;
		width: 38px;

		transition:
			background-color 0.15s,
			fill 0.15s,
			height 0.2s,
			width 0.2s,
			border-color 0.2s;

		@media (max-width: 1013px) {
			height: 34px;
			width: 34px;
		}
	}

	.dark-fill {
		fill: var(--dark-gray);

		@media (hover: hover) {
			&:hover {
				background-color: var(--dark-gray);
				fill: var(--light-gray);
			}
		}
	}

	.light-fill {
		fill: var(--light-gray);

		@media (hover: hover) {
			&:hover {
				background-color: var(--light-gray);
				fill: var(--dark-gray);
			}
		}
	}

	:global(.icon-button:active) .dark-fill {
		background-color: var(--dark-gray);
		fill: var(--light-gray);
	}

	:global(.icon-button:active) .light-fill {
		background-color: var(--light-gray);
		fill: var(--dark-gray);
	}

	.burger-icon {
		height: 29px;
		width: 29px;
		padding: 8px;
	}
</style>
