import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'yekan': ['IRANYekanX VF', 'tahoma']
      },
      colors: {
        karnameh: '#27AE60',
        main: '#199DA3'
      }

    },
  },
  plugins: [],
}
export default config
