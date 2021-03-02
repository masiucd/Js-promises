module.exports = {
  mount: {
    public: {
      url: "/",
      static: true,
    },
    src: "/dist",
  },

  plugins: ["@snowpack/plugin-typescript", "@snowpack/plugin-sass"],
  alias: {
    "@app": "./src",
  },
  packageOptions: {
    source: "remote",
    types: true,
  },
}
