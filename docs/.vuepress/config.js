module.exports = {
  base: '/lvxuan149@github.io',  // 如果您的仓库名是 lvxuan149.github.io，应该设置为 '/'
  title: "0xDragon888's blog",
  description: '积跬步，记当下，好奇心，定瞬间。',
  theme: 'vdoing',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '归档', link: '/archives/' },
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '关于', link: '/about/' },
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
    logo: '/img/logo.png', // 确保这个文件存在
    author: {
      name: '0xDragon888',
      link: 'https://github.com/lvxuan149'
    },
    social: {
      icons: [
        { iconClass: 'icon-github', title: 'GitHub', link: 'https://github.com/lvxuan149' },
        { iconClass: 'icon-twitter', title: 'Twitter', link: 'https://twitter.com/lvxuan147' },
      ]
    },
    footer: {
      createYear: 2024,
      copyrightInfo: '0xDragon888 | MIT License'
    },
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
  ],
}