import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
const safeListFile = 'safelist.txt'
export const mode = 'jit';
export const content = [
  "./src/**/*.{js,jsx}",
  "./src/**/*.html",
  "./src/**/*.js",
  "./src/**/*.jsx",
  "./src/**/*.ts",
  "./src/**/*.tsx",
  './safelist.txt'
];
export const darkMode = 'class';
export const theme = {
  fontFamily: {
    sans: [
      'Inter',
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Noto Sans"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ],
    serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    mono: [
      'ui-monospace',
      'SFMono-Regular',
      'Menlo',
      'Monaco',
      'Consolas',
      '"Liberation Mono"',
      '"Courier New"',
      'monospace',
    ],
  },
  screens: {
    xs: '412px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  backgroundImage: {
    "hero-pattern": "linear-gradient(to right, rgb(0, 0, 0,60%),rgb(0,0,0,80%)), url('/public/img/others/landing8.gif')",
    default: 'linear-gradient(to right, rgb(0, 0, 0,60%),rgb(0,0,0,80%))'

  },
  background: {
    default: 'linear-gradient(#4625F0,#4625F0)'
  },
  extend: {
    colors: {
      cream: '#eeeeee',
      primary: "#050816",
      'primary-transparent': "rgb(5, 8, 22,0%)",
      secondary: "#aaa6c3",
      tertiary: "#151030",
      'tertiary-transparent': "rgb(21, 16, 48,80%)",
      'tertiary-transparent2': "rgb(21, 16, 48,50%)",
      'dark-purple': '#37296F',
      'purple-default': '#915eff',
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
    },
    boxShadow: {
      'default': 'rgba(149, 157, 165, 0.1) 0px 8px 10px',
      'dark': 'rgba(149, 157, 165, 0.2) 0px 8px 10px',
      'darker': 'rgba(0, 0, 0, 0.15) 0px 5px 15px'
    },
    gridTemplateColumns: {
      'flat-7': 'repeat(7, 1fr)'
    },
    borderBottom: {
      'b-bottom': '1px #EEEDF3 solid'
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme('colors.gray.500'),
          maxWidth: '65ch',
        },
      },
      invert: {
        css: {
          color: theme('colors.gray.400'),
        },
      },
    })
  },
};
export const plugins = [
  ({ addUtilities, e, theme, variants }) => {
    const colors = flattenColorPalette(theme('borderColor'));
    delete colors['default'];

    const colorMap = Object.keys(colors)
      .map(color => ({
        [`.border-t-${color}`]: { borderTopColor: colors[color] },
        [`.border-r-${color}`]: { borderRightColor: colors[color] },
        [`.border-b-${color}`]: { borderBottomColor: colors[color] },
        [`.border-l-${color}`]: { borderLeftColor: colors[color] },
      }));
    const utilities = Object.assign({}, ...colorMap);

    addUtilities(utilities, variants('borderColor'));
  },
  // If your application does not require multiple theme selection,
  // you can replace {color} to your theme color value
  // this can drastically reduces the size of the output css file
  // e.g 'text-{colors}' --> 'text-emerald'
  require('tailwind-safelist-generator')({
    path: safeListFile,
    patterns: [
      'text-{colors}',
      'bg-{colors}',
      'dark:bg-{colors}',
      'dark:hover:bg-{colors}',
      'dark:active:bg-{colors}',
      'hover:text-{colors}',
      'hover:bg-{colors}',
      'active:bg-{colors}',
      'ring-{colors}',
      'hover:ring-{colors}',
      'focus:ring-{colors}',
      'focus-within:ring-{colors}',
      'border-{colors}',
      'focus:border-{colors}',
      'focus-within:border-{colors}',
      'dark:text-{colors}',
      'dark:hover:text-{colors}',
      'h-{height}',
      'w-{width}',
    ],
  }),
  require('@tailwindcss/typography')
];
