import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: {
          base: '#000309',
          ocean: '#2a5d77',
          'ocean-dark': '#184058',
          'ocean-deep': '#0f2a43',
          slate: 'rgba(42, 93, 119, 0.9)',
          indigo: '#3b8fb5',
          'indigo-light': '#5ba8c9',
          'indigo-pale': '#7fc4dc',
        },
        light: {
          base: '#fff8f0',
          peach: '#ffb699',
          'peach-light': 'rgba(255, 182, 153, 0.3)',
          cream: '#fff4d6',
          'cream-light': 'rgba(255, 244, 214, 0.5)',
          coral: '#ff9980',
          'coral-dark': '#e67a66',
          accent: '#cc7a66',
          'accent-dark': '#b36b59',
        },
        text: {
          primary: '#e8f4f8',
          secondary: '#b8d8e8',
          tertiary: '#8bb8d0',
          muted: '#6a9ab8',
        }
      },
      backgroundImage: {
        'midnight-gradient': 'radial-gradient(70% 55% at 50% 50%, #2a5d77 0%, #184058 18%, #0f2a43 34%, #0a1b30 50%, #071226 66%, #040d1c 80%, #020814 92%, #01040d 97%, #000309 100%)',
      },
      backgroundColor: {
        card: 'rgba(24, 64, 88, 0.3)',
        'hover': 'rgba(42, 93, 119, 0.25)',
        'subtle': 'rgba(15, 42, 67, 0.15)',
      }
    },
  },
  plugins: [],
}
export default config
