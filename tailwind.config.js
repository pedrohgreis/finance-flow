const { required } = require("@angular/forms/signals");

/** Tailwind config mapeando as cores para CSS custom properties (runtime) */
module.exports = {
  content: [
    './src/**/*.{html,ts,css}'
  ],
  theme: {
    extend: {
      colors: {
        'surface-primary': 'var(--surface-primary)',
        'surface-glass': 'var(--surface-glass)',
        'surface-overlay': 'var(--surface-overlay)',
        'brand-violet': 'var(--brand-violet)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-disabled': 'var(--text-disabled)'
      }
    }
  },
  plugins: []
}
