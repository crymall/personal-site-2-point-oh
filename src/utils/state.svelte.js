export let theme = $state({
  darkMode: true
});

export const toggleDarkMode = () => {
	theme.darkMode = !theme.darkMode;
	const body = document.querySelector('body');
	body.className = theme.darkMode ? 'dark-mode' : '';
};
