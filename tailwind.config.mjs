/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        'on-surface-variant': '#504538',
        'on-secondary-container': '#772f15',
        'tertiary-fixed': '#caead2',
        'on-error-container': '#93000a',
        'inverse-on-surface': '#ffeee1',
        'ivory-surface': '#FAF6EC',
        background: '#fff8f5',
        tertiary: '#46624f',
        'surface-tint': '#805611',
        'surface-bright': '#fff8f5',
        'primary-fixed': '#ffddb4',
        'on-tertiary-container': '#f6fff5',
        'adobe-base': '#EDE3C8',
        'inverse-surface': '#3b2e22',
        'secondary-container': '#ff9877',
        'surface-dim': '#ecd6c5',
        'on-primary': '#ffffff',
        'on-tertiary-fixed-variant': '#314d3b',
        'on-secondary': '#ffffff',
        surface: '#fff8f5',
        secondary: '#97472b',
        'tertiary-container': '#5e7b67',
        'on-tertiary-fixed': '#042011',
        error: '#ba1a1a',
        outline: '#827567',
        'surface-variant': '#f5decd',
        'on-error': '#ffffff',
        'surface-container-high': '#fbe4d2',
        'on-tertiary': '#ffffff',
        'surface-container': '#ffeada',
        'iron-ink': '#2C2015',
        'secondary-fixed-dim': '#ffb59d',
        'tertiary-fixed-dim': '#aeceb6',
        'on-primary-fixed-variant': '#633f00',
        'secondary-fixed': '#ffdbd0',
        'on-secondary-fixed': '#390b00',
        primary: '#7d530f',
        'on-surface': '#25190f',
        'primary-fixed-dim': '#f5bc6f',
        'surface-container-low': '#fff1e8',
        'surface-container-highest': '#f5decd',
        'surface-container-lowest': '#ffffff',
        'on-primary-fixed': '#291800',
        'on-background': '#25190f',
        'on-secondary-fixed-variant': '#793016',
        'on-primary-container': '#fffbff',
        'outline-variant': '#d4c4b3',
        'inverse-primary': '#f5bc6f',
        'primary-container': '#9a6b27',
        'error-container': '#ffdad6'
      },
      // NOTA: se quita el override de "full" que traía Stitch (0.75rem) porque
      // rompía los botones circulares (rounded-full) del footer. "full" se deja
      // en su valor nativo de Tailwind (9999px) para que los círculos sean círculos.
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem'
      },
      spacing: {
        'margin-mobile': '16px',
        'margin-desktop': '64px',
        'max-width': '1280px',
        unit: '8px',
        gutter: '24px'
      },
      fontFamily: {
        'headline-sm': ['Playfair Display', 'serif'],
        'label-sm': ['Inter', 'sans-serif'],
        'label-md': ['Inter', 'sans-serif'],
        'headline-md': ['Playfair Display', 'serif'],
        'body-lg': ['Source Serif 4', 'serif'],
        'display-lg-mobile': ['Playfair Display', 'serif'],
        'display-lg': ['Playfair Display', 'serif'],
        'body-md': ['Source Serif 4', 'serif']
      },
      fontSize: {
        'headline-sm': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'label-sm': ['12px', { lineHeight: '16px', letterSpacing: '0.03em', fontWeight: '600' }],
        'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.05em', fontWeight: '500' }],
        'headline-md': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'display-lg-mobile': ['36px', { lineHeight: '44px', fontWeight: '700' }],
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }]
      }
    }
  },
  plugins: []
};
