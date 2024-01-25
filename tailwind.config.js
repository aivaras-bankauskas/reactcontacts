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
				'body-dark': '#000000'
			}
		}
	},
	darkMode: 'media',
	plugins: []
};
