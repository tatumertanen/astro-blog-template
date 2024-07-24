/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Noto Sans JP Variable', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
			},
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem',
			},
			colors: {
				// base: { // Overall page background
				// 	light: '#ffffff',
				// 	dark: '#ffffff',
				// },
				base: "var(--base)"
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
