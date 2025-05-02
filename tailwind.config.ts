import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: '#D2002E',
				input: '#FFFFFF',
				ring: '#D2002E',
				background: '#FFFFFF',
				foreground: '#1A1A1A',
				primary: {
					DEFAULT: '#D2002E',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#F8E8EA',
					foreground: '#D2002E'
				},
				destructive: {
					DEFAULT: '#B30026',
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: '#F5F5F5',
					foreground: '#666666'
				},
				accent: {
					DEFAULT: '#E6002C',
					foreground: '#FFFFFF'
				},
				popover: {
					DEFAULT: '#FFFFFF',
					foreground: '#1A1A1A'
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#1A1A1A'
				},
				sidebar: {
					DEFAULT: '#FFFFFF',
					foreground: '#1A1A1A',
					primary: '#D2002E',
					'primary-foreground': '#FFFFFF',
					accent: '#E6002C',
					'accent-foreground': '#FFFFFF',
					border: '#D2002E',
					ring: '#D2002E'
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Merriweather', 'serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
