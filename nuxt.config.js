export default {
  components: true,
  head: {
    titleTemplate: "Muatering Nuxt: %s",
    htmlAttrs: {
      lang: "ja",
    },
    bodyAttrs: {
      class: ["my-style"],
    },
    meta: [
      {
        charset: "utf-8",
      },
    ],
  },
  router: {
    prefetchLinks: false,
  },
  plugins: ["~/plugins/maps.client.js", "~/plugins/dataApi.js"],
};
