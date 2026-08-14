<script>
	import Icon from './helpers/icon.svelte';
	import { theme } from '../utils/state.svelte';

	let {
		focusable = false,
		buttonLabel,
		buttonClass = '',
		buttonFunc,
		iconName,
		iconClass = ''
	} = $props();
</script>

<button
	type="button"
	aria-label={buttonLabel}
	onclick={buttonFunc}
	class="icon-button {buttonClass}"
>
	<Icon
		name={iconName}
		{focusable}
		className={`${theme.darkMode ? 'light-fill' : 'dark-fill'} ${iconClass}`}
	/>
</button>

<style>
	.icon-button {
		background-color: transparent;
		cursor: pointer;
	}

	.lamp-button {
		position: absolute;
		height: 48px;
		width: 48px;
		top: 13px;
		right: 31px;
		z-index: 100;
		transition:
			height 0.2s,
			width 0.2s,
			top 0.2s,
			right 0.2s,
			var(--theme-transition);

		@media (max-width: 1013px) {
			top: 0;
			right: 0;
			height: 44px;
			width: 44px;
		}
	}

	.burger-button {
		position: absolute;
		top: 0;
		right: 63px;
		height: 44px;
		width: 44px;
		z-index: 100;
		opacity: 0;
		visibility: hidden;
		transition:
			opacity 0.2s,
			visibility 0s 0.2s,
			var(--theme-transition);

		@media (max-width: 1013px) {
			opacity: 1;
			visibility: visible;
			transition:
				opacity 0.2s,
				visibility 0s,
				var(--theme-transition);
		}
	}
</style>
