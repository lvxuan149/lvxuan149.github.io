const { resolve } = require('path')

module.exports = {
  base: '/lvxuan149.github.io/', // 替换为您的仓库名称
  title: "0xDragon888's blog",
  description: '积跬步，记当下，好奇心，定瞬间。',
  theme: 'vdoing', // 确保使用 vdoing 主题
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Crypto', link: '/crypto/' },
      { text: 'AI', link: '/ai/' },
      { text: '归档', link: '/archives/' },
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '关于', link: '/about/' },
    ],
    sidebarDepth: 2,
    logo: '/img/Back.jpg', // 修正路径
    repo: 'lvxuan149/your-repo-name', // 更新为您的 GitHub 仓库
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此页',
    lastUpdated: '上次更新',
    author: {
      name: '0xDragon888',
      link: 'https://github.com/lvxuan149'
    },
    blogger: {
      avatar: '/img/Profile.jpg', // 修正路径
      name: '0xDragon888',
      slogan: '积跬步，记当下，好奇心，定瞬间。'
    },
    social: {
      icons: [
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/lvxuan149'
        },
        {
          iconClass: 'icon-twitter',
          title: 'Twitter',
          link: 'https://twitter.com/lvxuan147'
        }
      ]
    },
    footer: {
      createYear: 2024,
      copyrightInfo: '0xDragon888 | MIT License'
    },
    // 以下为主题的默认配置，您可以根据需要进行修改
    category: true,
    tag: true,
    archive: true,
    categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值
    // 移除或注释掉以下背景相关的配置
    // bodyBgImg: [],
    // bodyBgImgOpacity: 1,
    // contentBgStyle: 1,
  },
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/medium-zoom'],
    ['vuepress-plugin-baidu-tongji', {
      hm: 'your-baidu-tongji-code' // 替换为您的百度统计代码，如果没有可以注释掉这个插件
    }],
    ['vuepress-plugin-comment', {
      choosen: 'valine', 
      options: {
        el: '#valine-vuepress-comment',
        appId: 'your-leancloud-app-id', // 替换为您的 LeanCloud AppID，如果没有可以注释掉这个插件
        appKey: 'your-leancloud-app-key' // 替换为您的 LeanCloud AppKey，如果没有可以注释掉这个插件
      }
    }]
  ],
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6']
  }
}