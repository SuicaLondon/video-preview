import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				'3xl': '1920px',
				'4xl': '2560px',
				'5xl': '3840px',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'hover-odd': '#DDE4EB',
				'hover-even': '#EBEADD',
				'hover-odd-dark': '#28231d',
				'hover-even-dark': '#282006',
			},
			space: {
				'card-item-max-width': '31.25rem',
			},
		},
	},
	plugins: [],
}
export default config
