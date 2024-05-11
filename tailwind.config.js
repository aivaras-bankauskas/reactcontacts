/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				'body-light': '#e4e4e7',
				'body-dark': '#000000',
				'light': '#ffffff',
				'dark': '#18181b',
				'color-light': '#000000',
				'color-dark': '#ffffff',
				'color-link': '#3b82f6',
				'divider-light': '#e5e7eb',
				'divider-dark': '#27272a'
			}
		}
	},
	darkMode: 'media',
	plugins: []
};
