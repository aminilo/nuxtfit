import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
    './nuxt.config.{ts,js}'
  ],
  theme: {
    extend: {
      colors: {
        light: {
          one: '#222',
          two: '#444',
          bg:  '#f8f9fa',
          accent: '#2c3e50',
          soft: '#f3f4f6'
        },
        dark: {
          one: '#f1f5f9',
          two: '#cbd5e1',
          bg:  '#0f172a',
          accent: '#2c3e50',
          soft: '#1e293b'
        }
      }
    }
  },
  plugins: []
}

export default config
