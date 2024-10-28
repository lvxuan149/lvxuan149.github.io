module.exports = {
  base: '/',  // 修改为 '/'，因为您的仓库名是 lvxuan149.github.io
  title: "0xDragon888's blog",
  description: '',
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
    logo: '/img/logo.jpg',  // 确保使用正确的路径
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
    },
  },
  plugins: [
    ['@vuepress/blog', {
      directories: [
        {
          id: 'post',
          dirname: '_posts',
          path: '/post/',
          itemPermalink: '/post/:slug',
        },
      ],
      frontmatters: [
        {
          id: 'tag',
          keys: ['tag', 'tags'],
          path: '/tag/',
        },
        {
          id: 'category',
          keys: ['category', 'categories'],
          path: '/category/',
        },
      ],
    }],
  ],
  // 确保引入样式文件
  styles: [
    // 引入自定义样式
    '/styles/index.styl'
  ],
  // 其他配置...
}