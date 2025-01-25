import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		fontFamily: {
			sans: ['Poppins', ...defaultTheme.fontFamily.sans]
		}
	},

	plugins: [daisyui, typography, forms, containerQueries],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#F46C38',
					'primary-content': '#FFFFFF',
					secondary: '#C5FF41',
					'secondary-content': '#160016',
					accent: '#00ffff',
					'accent-content': '#001616',
					neutral: '#ffffff',
					'neutral-content': '#160016',
					'base-100': '#151312',
					'base-200': '#B6B4BD',
					'base-300': '#0c0b0a',
					'base-content': '#fff',
					info: '#0000ff',
					'info-content': '#c6dbff',
					success: '#00ff00',
					'success-content': '#001600',
					warning: '#00ff00',
					'warning-content': '#001600',
					error: '#ff0000',
					'error-content': '#160000'
				}
			}
		]
	}
} satisfies Config;
