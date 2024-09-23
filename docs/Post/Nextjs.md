---
title: Next.js项目采坑复盘
date: 2024-09-23 09:34:22
permalink: /post/nextjs
categories:
  -Code
tags:
  - Recat
  - Next.js
  - Front-end
  - LandingPage
---

## 0.说在前面

为了充分利用Next.js，建议对 HTML、CSS 和 React 有基本的了解。如果需要提升 React ，请查看[React 基础课程](https://nextjs.org/learn/react-foundations)入门基础知识，同时如果希望一步学习[ Next.js](https://nextjs.org/learn/dashboard-app)。建议从构建一个Landing Pages开始。

Next.js知识点丨Overview of features

- Styling: 
- Optimizations: 
- Routing: 
- Search and Pagination: 
- Mutating Data: 
- Error Handling: 
- Form Validation and Accessibility:
- Authentication: 
- Metadata: 

## 1.检查代码



### 检查Next依赖项

```

# 检查当前版本
npm list next

# 检查最新版本
npm show next version

# 更新依赖项
npm install next@latest

```

### 检查目录结构
1. project/
    这是项目的根目录。
2. src/
    这是源代码目录，通常包含项目的所有源代码文件。
    index.js：这是项目的入口文件，通常包含主要的业务逻辑。
    utils.js：这是一个工具文件，可能包含一些通用的函数或工具类。
3. public/
    这是公共文件目录，通常包含静态文件，如 HTML、CSS、JavaScript 文件等。
    index.html：这是项目的 HTML 入口文件，通常是用户访问项目时首先加载的页面。
4. package.json
    这是 Node.js 项目的配置文件，包含项目的元数据、依赖项和脚本命令。
5. README.md
    这是项目的说明文件，通常包含项目的介绍、安装步骤、使用说明等。
6. list-directory.js
    这是一个用于列出目录结构的脚本文件。
7. check-next-version.js
    这是一个用于检查 next 依赖项版本的脚本文件。


## 2.代码优化

###  优化1

清理 npm 缓存：
npm cache clean --force

删除 node_modules 文件夹和 package-lock.json 文件，然后重新安装依赖：
rm -rf node_modules package-lock.json
npm install

确保您的 Node.js 和 npm 版本是最新的：
npm --version

检查是否有冲突的全局包：
npm list -g --depth=0

### 优化2

项目结构更加符合 Next.js 13+ 的 App Router 结构。项目似乎正在从页面路由迁移到 App Router。建议完成迁移，删除 pages 目录中的文件，并确保所有路由都在 src/app 目录下正确实现。


完成从页面路由到 App Router 的迁移。统一文件位置，将所有组件移到 src/components。更新 src/app/layout.tsx 以包含全局样式和元数据。. 删除重复和未使用的文件。将所有 JavaScript 文件转换为 TypeScript。确保所有导入路径都正确，特别是在移动文件后。

## 3.正确目录结构

```
website/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   └── HeroSection.tsx
│   ├── lib/
│   │   └── utils.ts
│   └── types/
│       ├── clsx.d.ts
│       └── tailwind-merge.d.ts
├── public/
│   └── fonts/
│       ├── Jersey10-Regular.woff
│       └── Jersey10-Regular.woff2
├── package.json
├── package-lock.json
├── next.config.js
├── postcss.config.mjs
├── tailwind.config.js
└── tsconfig.json
```



## 4.复盘代码

整个代码优化过程，以下是整个过程的复盘：

1.初始状态：

网站由多个独立的组件构成，如 HeroSection, TestimonialsSection, FeaturesSection 等。部分组件使用了不一致的结构和样式。

2.创建通用 Section 组件：

- 我们创建了一个 Section.tsx 文件，定义了一个可重用的 Section 组件。
- 这个组件封装了常见的布局结构和样式。

3.更新 TestimonialsSection：

- 我们遇到了 "找不到模块'./Section'或其相应的类型声明" 的错误。
- 解决方法：更正了导入路径为 '../components/Section'。

4.类型错误：

- 在 TestimonialsSection 中，我们遇到了 "参数隐式具有'any'类型" 的错误。
- 解决方法：为 testimonials.map() 中的参数添加了明确的类型注解。

5.优化其他组件：

- 我们更新了 FeaturesSection, CommunityShowcase, CallToAction, 和 FAQSection。
- 这些组件现在都使用了通用的 Section 组件，提高了一致性。

6.样式调整：
- 我们统一了背景颜色和渐变，使用 'bg-[#8203AF]' 或渐变色。
- 调整了间距和布局，以确保视觉上的一致性。

7.动画效果：
- 在 HeroSection 中添加了一些动画效果，如 'animate-fade-in' 和 'animate-float'。
- 这些动画需要在 tailwind.config.js 中定义。

8.响应式设计：
- 确保所有组件都有适当的响应式布局，使用 Tailwind 的响应式类。

9.可访问性：在 TestimonialsSection 中，为 Twitter 链接添加了 aria-label。

10.代码分割：

- 虽然没有直接实施，但讨论了使用 Next.js 的动态导入来优化性能的可能性。

## 5.主要错误及解决

1.模块导入路径错误：

- 问题：找不到模块 './Section' 或其相应的类型声明。
- 解决：更正导入路径为 '../components/Section'。

2.类型错误：

- 问题：参数隐式具有 'any' 类型。
- 解决：在 map 函数中为参数添加明确的类型注解。

3、样式不一致：

- 问题：各组件使用不同的背景色和布局结构。
- 解决：统一使用 Section 组件和一致的颜色方案。

4.代码重复：
- 问题：多个组件有类似的结构和样式代码。
- 解决：创建 Section 组件来封装共同的结构和样式。

5.文档结构混乱

- 问题：同时存在旧的 pages 目录和新的 app 目录，可能导致路由冲突。组件位置不正确：组件可
- 解决：确保所有组件都在 src/components 目录下确保所有页面都在 src/app 目录下，Prompt一下

## 6.总结

总体来说这次优化成功地提高网页的

- 组件复用
- 样式管理
- 响应式设计
- 性能优化
- 可访问性
- 代码分割
- 国际化
- 状态管理
- 测试
- 环境变量

通过创建可重用的组件和统一的样式方案的Landing Pages，大大减少了代码重复同时提高了整体的用户体验。

