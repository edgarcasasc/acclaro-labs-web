import defaultTheme from 'tailwindcss/defaultTheme'

// CORRECCIÓN: Quitamos ": Config" para evitar que TypeScript bloquee el build
// por la propiedad safelist. Tailwind lo leerá bien de todos modos.
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // Ahora esto no dará error
  safelist: [
    'bg-rojo-lacre',
    'border-rojo-lacre/30',
    'shadow-glow-red',
    'bg-azul-zafiro',
    'border-azul-zafiro/30',
    'shadow-glow-blue',
    'bg-tech-grid',
  ],

  theme: {
    extend: {
      colors: {
        'gris-piedra': 'var(--color-gris-piedra)',
        'blanco-pergamino': 'var(--color-blanco-pergamino)',
        'rojo-lacre': 'var(--color-rojo-lacre)',
        'oro-antiguo': 'var(--color-oro-antiguo)',
        'azul-zafiro': 'var(--color-azul-zafiro)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-serif)', ...defaultTheme.fontFamily.sans], // Changed fallback to sans as Outfit is sans-serif
      },
      backgroundImage: {
        'tech-grid': "radial-gradient(circle, rgba(248, 246, 240, 0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        'glow-red': '0 0 15px 5px rgba(154, 42, 42, 0.4)',
        'glow-blue': '0 0 15px 5px rgba(13, 58, 97, 0.5)',
      }
    },
  },

  // 👇 AQUÍ ESTÁ EL CAMBIO CLAVE:
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config