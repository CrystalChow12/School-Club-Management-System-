const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				Roboto: ['Roboto'],
				Kalam: ['Kalam'],
				inknut: ['Inknut Antiqua'],
				cinzel: ['Cinzel Decorative'], 
				inter: ['Inter Variable']
			}
		}
	},
	plugins: []
};
