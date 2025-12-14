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
	<Icon name={iconName} className={`${theme.darkMode ? 'light-fill' : 'dark-fill'} ${iconClass}`} />
</button>

<style>
	.icon-button {
		background-color: transparent;
		cursor: pointer;
	}

	.lamp-button {
		position: absolute;
		height: 38px;
		width: 38px;
		top: 10px;
		right: 25px;
		z-index: 100;
		transition:
			height 0.2s,
			width 0.2s,
			top 0.2s,
			right 0.2s;

		@media (max-width: 810px) {
			top: 0;
			right: 0;
			height: 35px;
			width: 35px;
		}
	}

	.burger-button {
		position: absolute;
		top: 0;
		right: 50px;
		height: 35px;
		width: 35px;
		z-index: 100;
	}
</style>
