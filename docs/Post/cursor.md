---
title: Cusor许愿式开发指南
date: 2024-09-19 05:13:22
permalink: /post/cursor
categories:
  - AI
tags:
  - Tools
  -  AI Coding
  -  Cursor
  
---

## 0.前言

![](https://github.com/lvxuan149/picx-images-hosting/raw/master/_m-3xosV.1vym156a24.webp)

2024年AI编程把看似“难学”的编程事在“平易近人”了，由12 名工程师和研究人员创造的Curosr引爆C端市场。

> AI 大神 Andre Karpathy也说：编程领域变化太快了，未来是不是只需要狂按 tab 就够了？

> Cursor 的首席执行官Michael Truell将 Cursor 形容为「程序员的 Google Docs」
> 
> 
> [Shooter](https://x.com/liushooter)老师说：Cursor出来应该没有人在想转码，程序员都要失业了。

我在[Booming3]()提倡理念：从用户端思考，协作工具统一，更有利于创造出全新的用户体验，所以本文尝试谈谈Cusor入门、实战、资源、使用。

## 1.认识Cursor

### 一句话Cursor

Cursor是一个新兴的、AI 驱动的集成开发环境（IDE），专为现代软件开发而设计。它结合了传统 IDE 的功能与先进的 AI 技术，旨在提高开发者的生产力和代码质量。

### Cursor Team

联合创始人分别是 Michael Truell、Aman Sanger、Sualeh Asif 和 Arvid Lunnemark。其中 Truell 和 Sanger 参加过 MIT 的「尼欧学者」（Neo Scholars）计划，这是一个针对主修技术领域的本科生的导师计划。值得一提的是，Neo 还运营着一个加速器和一个风险基金，还主导了 Anysphere 的种子轮投资。

Anysphere自诩为应用研究实验室，致力于提高软件开发过程的效率，其使命是彻底改变编程的定义，助力全球开发者专注于更宏大的问题。

为此，Anysphere 开发了一个高效的 AI 编程工具 Cursor。

### Cursor 1.0-3.0

从发布至今Cursor 经历了 3 次重大的版本更新和近 40 次的功能迭代，不断引入新的 AI 模型、优化用户界面和体验、增强性能和安全性等。

最初，Cursor 基于 Codemirror 构建，但为了专注于开发尖端 AI 功能，并打造一个原生支持 AI 配对编程的集成开发环境（AI-native IDE），Anysphere 将 Cursor 迁移至 VSCodium 的一个分支上，即微软 Visual Studio Code（VS Code）的开源版本。

这一转变让 Cursor 不仅继承了 VS Code 的强大功能和用户界面，还深度集成了 ChatGPT 等 AI 技术，无缝融入了包括 IntelliJ IDEA、Visual Studio Code 和 GitHub 在内的主流开发环境和代码库中。

通过紧密结合 AI 特性与 IDE，Cursor 的稳健性得到了进一步增强。它可以根据给定的提示生成代码，提供相关文档，识别潜在的错误，从而提升整体的开发效率和体验。

尽管如此，Cursor2.0 在 AI 编程方面仍处于起步阶段，主要限于对单一文件的代码生成和自动完成。

为了实现以更快的速度提供最前沿的 AI 功能，Cursor 引入了性能更优的 Claude 模型，将 Copilot++（智能代码补全等功能）的速度提高了大约两倍。此外，还引入了一个名为「Composer」的试验性功能（Beta 版），它使用户能够在单一编辑环境中操作多个文件。

随着速度的提升，Cursor 整体性能也得到了增强，包括在处理大型文件或复杂代码库时的性能，因而顺利升级到了Cursor 3.0 版本。

### Cursor优势
- 自然语言编程：Cursor Composer （CMD+I）、Cursor Chat（CMD+L）
- 智能代码编辑：智能代码不全（Tab）、代码生成和编辑（CMD+k）
- 上下文引用：CMD+L添加到chat页面（完全取代代码复制粘贴到Chatgpt）
- 多模型支持：多模型支持使 Cursor 能够为各种编程需求提供最佳解决方案。

## 2.上手Cursor

### 安装 Cursor

- 访问： Cursor 官网 下载 Cursor 应用程序。
- 操作系统：（Windows、Mac 或 Linux）的标准程序安装应用程序。 
- 启动 Cursor：并使用 GitHub 账号登录。新用户可以享受 2 周的免费 Pro 计划。
-  Cursor 提供三种计划：：Free、Pro 和 Business。您可以在 定价页面 查看详细信息。



### Cursor初始化配置
- Import：Vscode、Github Copalit
- Rules for AI：两套规则（设置-全局规则、项目规则.cursorrules）
- Models配置：claude-3.5-sonnet 是最适合用来编程的，O1还不稳定。同时Cursor 支持配置自己的 LLM API。


### Cursor快捷键
- Cursor Tab
- Inline Editing
- Chat Interface
- Composer
- Symbols

具体请查看
- [Cursor Keyboard Shortcuts Cheat Sheet](https://cursor101.com/zh/cursor/cheat-sheet)

### Cursor用量注意

**Cursor使用成本含两部分费用：**

 - 一部分是软件的费用，这部分比如一个月 20$ 是付给 cursor 的
 - 另一部分是模型的使用费用，这个是你付给像OpenAI 这样的模型提供商的。

以下是我的用量，目前我选的20美金的Pro的Premium收费的高级模型包括（限制500次）

- GPT4
- GPT4o
- Claude 3.5


密集使用3天Claude 3.5，高级模型调用回答质量是真的好，但是请求我已经使用了接近一半……刚开始的热情迅速遭遇滑铁卢，各位还是多注意用量。

准备切换成免费的

- Cursor Small
- GPT 4o

 
 ![](https://github.com/lvxuan149/picx-images-hosting/raw/master/截屏2024-09-19-07.53.19.7egqhacvod.webp)
 

## 3.Cursor实战

### Curosr入门

- Cursor Tab（Tab）：尝试使用 Cursor Tab 进行代码补全。
-  Composer（CMD+I）： 许愿式开发
-  Cursor Chat（CMD+K） AI聊天Debug
-   代码生成和编辑（CMD+k）：修改Debug
-  Symbols（@）：Codebase 探索您的项目结构并定位特定的代码元素。


### Curosr进阶
 - Migrate
 - Cursor Tab
 - CMD K
 - Codebase indexing
 - Composer
 - .cursorrules
 - .cursorignore
 -  AI Review 
 -  Shadow Workspace
 - 定制 Cursor Rule
 - 定制 Models
 - 定制 API Keys 
 - Privacy Mode


## 4.Cursor更多资源

### Cursor官方更新
- [Twitter](https://x.com/cursor_ai)
- [Forum](https://forum.cursor.com/)
- [Blog](https://www.cursor.com/blog)
- [Discord](https://forum.cursor.com/)

### Cursor三方资源

- [Cursorcasts](https://cursorcasts.com/)
- [Cursorlist](https://cursorlist.com/)
- [cursor.Directory](https://cursor.directory/)
- [Cursor.document](https://cursor.document.top/)
- [Cursor101](https://cursor101.com/)

## 5.Cursor竞品


### Cursor竞品关注

国外

- [Replit](https://replit.com/~)
- [Void](https://voideditor.com/email)

国内

- 字节[marscode](https://tongyi.aliyun.com/lingma/)
- 阿里 [通义灵码](https://tongyi.aliyun.com/lingma/)

- [完整AI Coding Tools Report](https://synaptic.com/resources/ai-coding-tools-2024/?utm_campaign=AI%20Coding%20Tools%20-%20Sept%202024&utm_source=twitter&utm_medium=social)

## 小结

当Cursor把技术门槛降低，许愿式开发成为可能，以前是首席Readme工程师，现在更可能是首席Cursor Debug/Prompt工程师。

当AI编程把技术门槛降低，以后做项目的业务逻辑，团队的创造力、个人深度思考就变得非常重要，Do whatever you want。


## Changelog
- 240919 0xDragon888 创建