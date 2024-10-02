import nesting from 'tailwindcss/nesting/index.js';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/**
 * @type import('vite').UserConfig['css']
 */
export const css = {
  postcss: {
    plugins: [
      tailwindcss({
        content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html'],
        theme: {
          extend: {
            container: {
              center: true,
              padding: '1rem',
            },
            colors: {
              primary: {
                50: '#f3faeb',
                100: '#e5f3d4',
                200: '#cde8ae',
                300: '#acd87e',
                400: '#8ec655',
                500: '#6ca635',
                600: '#558828',
                700: '#426823',
                800: '#375420',
                900: '#30481f',
                950: '#17270c',
              },
            },
          },
        },
        plugins: [],
      }),
      nesting,
      autoprefixer,
    ],
  },
};
