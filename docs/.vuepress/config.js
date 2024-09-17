module.exports = {
  base: '/',  // 修改为 '/'，因为您的仓库名是 lvxuan149.github.io
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
    logo: '/assets/img/Profile.jpg', // 确保这个文件存在
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
    category: {
      location: 2,     // 在导航栏菜单中所占的位置，默认2
      text: '分类'     // 默认 "分类"
    },
    tag: {
      location: 3,     // 在导航栏菜单中所占的位置，默认3
      text: '标签'     // 默认 "标签"
    },
    categoryText: '随笔', // 碎片化文章（Post文件夹的文章）预设生成的分类值
    blogConfig: {
      category: {
        location: 2,
        text: '分类'
      },
      tag: {
        location: 3,
        text: '标签'
      }
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
  ],
}