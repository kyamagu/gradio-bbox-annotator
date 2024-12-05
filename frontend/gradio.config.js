import commonjs from "vite-plugin-commonjs";

export default {
  plugins: [
    commonjs({
      filter: (id) => id.includes("node_modules/deepmerge")
    })
  ],
  svelte: {
    preprocess: [],
  },
  build: {
    target: "modules",
  },
};