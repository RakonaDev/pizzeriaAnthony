/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'rojo-claro': '#FF1222',
        'rosa-claro': '#F2133C',
        'amarillo': '#F2B705',
        'rojo-oscuro': '#400101',
        'medio-blanco': '#F2F2F2',
        'rojo-claro-oscuro': '#F21326',
        'rojo-claro-max': '#FEC8C8'
      }
    }
  },
  plugins: []
}
/* '#F21326' */
