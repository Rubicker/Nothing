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
    nav: [
      { text: "Home", link: "/" },
      { text: "leetcode", link: "/leetcode/" }
    ],
    sidebar: {
      "/leetcode/": [["双指针", "双指针"]],
      "/": [""]
    },
    lastUpdated: "Last Updated"
  }
};
