export const content = [
  "./src/**/*.{html,ts}"
];
export const theme = {
  extend: {},
  screens: {
    xs: { max: "639px" },
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },

};
export const variants = {
  extend: {
    whitespace: ['responsive', 'landscape'],
  },
};
export const plugins = [];
