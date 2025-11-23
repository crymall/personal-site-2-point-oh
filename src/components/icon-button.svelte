<script>
	import Icon from './helpers/icon.svelte';
	import { theme } from '../utils/state.svelte';

	let { focusable = false, buttonClass = '', buttonFunc, iconName } = $props();
</script>

<button type="button" onclick={buttonFunc} class="icon-button {buttonClass}">
	<Icon name={iconName} className={theme.darkMode ? 'light-fill' : 'dark-fill'} />
</button>

<style>
	.icon-button {
		background-color: transparent;
		cursor: pointer;
	}

	.lamp-button {
		position: fixed;
		height: 38px;
		width: 38px;
		top: 10px;
		right: 15px;

		@media (max-width: 600px) {
			height: 30px;
			width: 30px;
		}
	}

	.burger-button {
		position: fixed;
		bottom: 10px;
		right: 15px;
		height: 30px;
		width: 30px;
	}
</style>
