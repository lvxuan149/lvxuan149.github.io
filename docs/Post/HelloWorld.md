---
title: 配置0xDragon888博客
date: 2024-09-18 03:09:22
permalink: /pages/261394/
categories:
  - VuePress
tags:
  - 知识管理
   -  VuePress
---
# 配置0xDragon888博客


## 0.背景

这个博客的初衷是打造一个好用`知识管理工具`。

对于我来说，繁杂的知识体系难免会有遗忘的地方，如果有一个方便好用的知识管理工具，可以帮助我们很好的构建知识，并能够快速地把遗忘的知识点找回来，那就太棒了！

## 1.工具

### VuePress

[VuePress (opens new window)](https://vuepress.vuejs.org/zh/)是一个 Vue 驱动的静态网站生成器，正是以`Markdown`为中心的项目结构，它简洁至上的理念正合我心。对于我这个对Vue还算有一些了解的前端，迫不及待的想去使用它来搭建一个我的云笔记网站。


### GitHub Actions 工作流

-  GitHub Actions 工作流（.github/workflows/deploy.yml）已正确配置，使用最新的 GitHub Pages 部署 action。
- docs/.vuepress/config.js 文件配置正确，特别是 base: '/' 的设置适合您的 lvxuan149.github.io 仓库。
- package.json 文件包含了所有必要的依赖和正确的脚本。
docs/index.md 和 docs/about/README.md 文件内容看起来很好。
docs/.vuepress/styles/index.styl 文件包含了一些自定义样式，这很好。

## 2.使用

### 我-记录

- Update Md
- git add .
- git commit -m "XXX"
- git push origin main

### 网站-组织、记忆

- 分类（categories）：作为知识管理的主分类，我们日常生活中的分类也都是这种树状分类。
- 标签（tags）：则是辅助，弥补树状分类的缺陷。
- 归档（archives）：按照时间顺序排列和归纳博客文章的列表：


## Changelog
-  Add 240918 03:15












