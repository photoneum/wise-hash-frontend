interface Plugins {
  tailwindcss: object;
  autoprefixer: object;
}

const config: { plugins: Plugins } = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
