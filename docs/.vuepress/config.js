module.exports = {
  title: "Rubicker",
  description: "Better to run than curse the road",
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "path/to/some/dir"
      }
    }
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    sidebar: [
      {
        title: "算法",
        collapsable: false,
        children: ["/", "/array/"]
      }
    ]
  }
};
