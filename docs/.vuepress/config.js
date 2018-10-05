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
      { text: "Leetcode", link: "/leetcode/" },
      { text: "Common", link: "/common/" }
    ],
    sidebar: {
      "/leetcode/": [["双指针", "双指针"]],
      "/common/": [["Bash", "Bash"]],
      "/": [""]
    },
    lastUpdated: "Last Updated"
  }
};
