/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'text': '#030307',
				'background': '#ddddee',
				'primary': '#3133a0',
				'secondary': '#d2d3ea',
				'accent': '#4d4ea3',
			   },
		},
		
	},
	plugins: [],
}
