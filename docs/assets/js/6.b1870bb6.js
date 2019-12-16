(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{196:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"指南"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#指南"}},[t._v("#")]),t._v(" 指南")]),t._v(" "),e("blockquote",[e("p",[t._v("声明!")]),t._v(" "),e("p",[t._v("本项目仅供技术研究及个人学习使用，请勿用于任何商业用途，请勿用于非法用途，如有任何人凭此做任何非法事情，均于作者无关，特此声明。")])]),t._v(" "),e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("p",[t._v("微采助手是一个以NodeJs驱动的公众号文章采集工具，为了支持更方便地采集和本地浏览而创建并开源的。\n当你浏览微信公众号发现一个有趣的文章时，你就可以使用它下载该资源以用于本地浏览存储等。")]),t._v(" "),e("h2",{attrs:{id:"支持平台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持平台"}},[t._v("#")]),t._v(" 支持平台")]),t._v(" "),e("p",[t._v("目前仅支持window10 x64")]),t._v(" "),e("h2",{attrs:{id:"功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[t._v("#")]),t._v(" 功能")]),t._v(" "),e("ol",[e("li",[t._v("公众号历史文章采集")]),t._v(" "),e("li",[t._v("文章列表查看及搜索，包含标题，发布时间，链接等")]),t._v(" "),e("li",[t._v("支持手动生成文章图片，也支持后台批量生成图片任务模式")]),t._v(" "),e("li",[t._v("文章阅读数，点赞数，赞赏量，评论数采集")]),t._v(" "),e("li",[t._v("文章评论数据采集")]),t._v(" "),e("li",[t._v("公众号列表查看及搜索，包含名称等")]),t._v(" "),e("li",[t._v("简化的采集代理设置操作")])]),t._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("h3",{attrs:{id:"安装包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装包"}},[t._v("#")]),t._v(" 安装包")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("操作系统")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("二进制包")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("winx64")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://github.com/lunnlew/weicai-scraper/releases/download/v0.1.3/Setup-x86-0.1.3.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("微采助手-Setup-x86-0.1.3.exe"),e("OutboundLink")],1)])])])]),t._v(" "),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),e("h3",{attrs:{id:"使用前设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用前设置"}},[t._v("#")]),t._v(" 使用前设置")]),t._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 在powershell(管理员模式)设置执行策略")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 设置采集代理模式时的脚本动作需要")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ExecutionPolicy "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ExecutionPolicy Unrestricted "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Scope CurrentUser\n")])])]),e("h3",{attrs:{id:"使用前注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用前注意"}},[t._v("#")]),t._v(" 使用前注意")]),t._v(" "),e("p",[t._v("公众号历史文章列表页不要频繁进行访问刷新，否则会导致提示"),e("code",[t._v("操作频繁")]),t._v("并封禁该接口访问24小时。")]),t._v(" "),e("h3",{attrs:{id:"代理模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代理模式"}},[t._v("#")]),t._v(" 代理模式")]),t._v(" "),e("p",[t._v("代理模式是在开启系统代理设置时，通过操作微信客户端访问并拦截内容来达成对"),e("code",[t._v("历史文章列表")]),t._v("，"),e("code",[t._v("文章页")]),t._v("，"),e("code",[t._v("文章评论数据")]),t._v("，"),e("code",[t._v("公众号信息")]),t._v("等采集。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("如何使用")]),t._v(" "),e("p",[t._v("打开"),e("code",[t._v("微采助手")]),t._v("，进入点击"),e("code",[t._v("开始管理")]),t._v("进入主界面，然后启用"),e("code",[t._v("采集代理")]),t._v("开关即可。")])]),t._v(" "),e("li",[e("p",[t._v("如何采集历史文章页")]),t._v(" "),e("p",[t._v("在处于"),e("code",[t._v("采集代理模式")]),t._v("时，打开你想要采集的公众号的"),e("code",[t._v("历史文章列表")]),t._v("页面即可，注意：首次打开"),e("code",[t._v("历史文章列表")]),t._v("页面的时候，建议等待其完全采集，第二次及以后再次采集时将判断30分钟内采集重复文章次数是否达到3次来决定继续采集。")])]),t._v(" "),e("li",[e("p",[t._v("如何自动采集下一个公众号的历史列表页")]),t._v(" "),e("p",[t._v("在处于"),e("code",[t._v("采集代理模式")]),t._v("时，打开你想要采集的任意一个公众号的"),e("code",[t._v("历史文章列表")]),t._v("页面，会出现操作界面，目前你需要手动选择相应的选项并提交才会进行下一步的采集动作。")])]),t._v(" "),e("li",[e("p",[t._v("如何采集文章评论数据")]),t._v(" "),e("p",[t._v("在处于"),e("code",[t._v("采集代理模式")]),t._v("时，在微信内部浏览器中打开相应的文章即可，目前需要手动从微信中打开链接，如果在其他外部浏览器中打开仅会采集文章的基本信息，不会采集到评论信息")])]),t._v(" "),e("li",[e("p",[t._v("如何采集文章阅读量数据")]),t._v(" "),e("p",[t._v("在处于"),e("code",[t._v("采集代理模式")]),t._v("时，在微信内部浏览器中打开相应的文章即可，目前需要手动从微信中打开链接，如果在其他外部浏览器中打开仅会采集文章的基本信息，不会采集到阅读量信息")])]),t._v(" "),e("li",[e("p",[t._v("如何生成文章的图片以便本地存储和预览")]),t._v(" "),e("p",[t._v("先关闭"),e("code",[t._v("采集代理")]),t._v("开关，然后在软件文章列表页右侧操作"),e("code",[t._v("生成")]),t._v("按钮即可，生成成功后，可以点击"),e("code",[t._v("查看")]),t._v("按钮，浏览生成的文章图片内容。")])]),t._v(" "),e("li",[e("p",[t._v("如何批量生成文章图片")]),t._v(" "),e("p",[t._v("先关闭"),e("code",[t._v("采集代理")]),t._v("开关，然后在软件文章列表页上方启用"),e("code",[t._v("后台文章图片生成任务")]),t._v("开关即可，将会从"),e("code",[t._v("最早发布的未生成图片的文章")]),t._v("开始生成文章图片并存放在个人的主目录下。")])]),t._v(" "),e("li",[e("p",[t._v("无法采集列表页数据")]),t._v(" "),e("p",[t._v("请确认页面是否有操作界面提示信息，如没有可能是代理设置失败问题。可尝试手动将"),e("code",[t._v("127.0.0.1:6879")]),t._v("设置到系统代理并启用。然后刷新页面再次尝试采集。\n多次失败的情况下，建议先关闭软件再重启，然后再启用"),e("code",[t._v("采集代理")]),t._v("开关，及手动设置代理。")])])]),t._v(" "),e("h3",{attrs:{id:"监控模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#监控模式"}},[t._v("#")]),t._v(" 监控模式")]),t._v(" "),e("p",[t._v("目前软件支持对微信(版本为"),e("code",[t._v("2.7.1.88")]),t._v(")进行公众号文章推送数据的监控及采集，打开软件就自动启动该功能，注意：需要先运行微信客户端并登录，再运行本软件该机制才会生效。\n当公众号有推送文章数据过来的时候，软件将会采集处理并展示到软件的文章列表界面。")]),t._v(" "),e("h2",{attrs:{id:"开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发"}},[t._v("#")]),t._v(" 开发")]),t._v(" "),e("h3",{attrs:{id:"技术栈及语言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技术栈及语言"}},[t._v("#")]),t._v(" 技术栈及语言")]),t._v(" "),e("ol",[e("li",[t._v("nodejs")]),t._v(" "),e("li",[t._v("electron")]),t._v(" "),e("li",[t._v("vue")]),t._v(" "),e("li",[t._v("nodejs native addons")]),t._v(" "),e("li",[t._v("c++ dll")]),t._v(" "),e("li",[t._v("powershell")])]),t._v(" "),e("h3",{attrs:{id:"系统开发环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统开发环境"}},[t._v("#")]),t._v(" 系统开发环境")]),t._v(" "),e("pre",[e("code",[t._v("window10 x64\nnode v12.8.1 32位\npython v2.7\nVisual Studio 2017\n")])]),t._v(" "),e("h3",{attrs:{id:"安装nvm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装nvm"}},[t._v("#")]),t._v(" 安装nvm")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("操作系统")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("二进制包")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("win10")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://github.com/coreybutler/nvm/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("nvm-windows"),e("OutboundLink")],1)])])])]),t._v(" "),e("h3",{attrs:{id:"安装nodejs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装nodejs"}},[t._v("#")]),t._v(" 安装Nodejs")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 安装nodejs版本")]),t._v("\nnvm "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.8")]),t._v(".1 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 指定nodejs版本")]),t._v("\nnvm use "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.8")]),t._v(".1 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 查看生效nodejs版本")]),t._v("\nnvm list\nnode -v\n")])])]),e("h3",{attrs:{id:"安装yarn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装yarn"}},[t._v("#")]),t._v(" 安装yarn")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v("\n")])])]),e("h3",{attrs:{id:"更新依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新依赖"}},[t._v("#")]),t._v(" 更新依赖")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 主项目依赖")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## worker依赖")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" src/worker "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v("\n")])])]),e("h3",{attrs:{id:"安装visual-studio-2017"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装visual-studio-2017"}},[t._v("#")]),t._v(" 安装Visual Studio 2017")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("下载地址")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://visualstudio.microsoft.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio 2017"),e("OutboundLink")],1)])])])]),t._v(" "),e("h2",{attrs:{id:"下载源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载源码"}},[t._v("#")]),t._v(" 下载源码")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/Desktop\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/lunnlew/weicai-scraper.git\n")])])]),e("h2",{attrs:{id:"编译打包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译打包"}},[t._v("#")]),t._v(" 编译打包")]),t._v(" "),e("p",[t._v("以"),e("code",[t._v("Visual Studio 2017")]),t._v("为例，原生模块"),e("code",[t._v("WeChatCtl")]),t._v("及"),e("code",[t._v("WeChatHelper")]),t._v("支持通过ide运行构建及命令行方式运行构建，ide方式运行相应的"),e("code",[t._v("sln")]),t._v("文件即可")]),t._v(" "),e("h3",{attrs:{id:"编译weicaibinding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译weicaibinding"}},[t._v("#")]),t._v(" 编译WeicaiBinding")]),t._v(" "),e("div",{staticClass:"language-cmd extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 原始命令\ncd src/native/WeicaiBinding && cross-env HOME=~/.electron-gyp node-gyp configure && cross-env HOME=~/.electron-gyp node-gyp rebuild --target=7.1.3 --runtime=electron --arch=ia32  --dist-url=https://electronjs.org/headers\n\n# 或者项目目录运行\nyarn run native:build-WeicaiBinding-ia32\n\n")])])]),e("h3",{attrs:{id:"编译wechatctl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译wechatctl"}},[t._v("#")]),t._v(" 编译WeChatCtl")]),t._v(" "),e("div",{staticClass:"language-cmd extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('#命令方式\n##调试版本\n"C:/Program Files (x86)/Microsoft Visual Studio/2017/Professional/Common7/IDE/devenv" src/native/WeChatCtl/WeChatCtl.sln /Build "Debug|x86"\n##发布版本版本\n"C:/Program Files (x86)/Microsoft Visual Studio/2017/Professional/Common7/IDE/devenv" src/native/WeChatCtl/WeChatCtl.sln /Build "Release|x86"\n\n# 或者项目目录运行构建Release\nyarn run native:build-WeChatCtl\n')])])]),e("h3",{attrs:{id:"编译wechathelper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译wechathelper"}},[t._v("#")]),t._v(" 编译WeChatHelper")]),t._v(" "),e("div",{staticClass:"language-cmd extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('#命令方式\n##调试版本\n"C:/Program Files (x86)/Microsoft Visual Studio/2017/Professional/Common7/IDE/devenv" src/native/WeChatHelper/WeChatHelper.sln /Build "Debug|x86"\n##发布版本版本\n"C:/Program Files (x86)/Microsoft Visual Studio/2017/Professional/Common7/IDE/devenv" src/native/WeChatHelper/WeChatHelper.sln /Build "Release|x86"\n\n# 或者项目目录运行构建Release\nyarn run native:build-WeChatHelper\n')])])]),e("h3",{attrs:{id:"运行开发模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行开发模式"}},[t._v("#")]),t._v(" 运行开发模式")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run electron:serve\n")])])]),e("h3",{attrs:{id:"打包主程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打包主程序"}},[t._v("#")]),t._v(" 打包主程序")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run electron:build\n")])])]),e("h2",{attrs:{id:"调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调试"}},[t._v("#")]),t._v(" 调试")]),t._v(" "),e("h3",{attrs:{id:"调试远程注入dll"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调试远程注入dll"}},[t._v("#")]),t._v(" 调试远程注入DLL")]),t._v(" "),e("p",[t._v("以"),e("code",[t._v("WeChatHelper")]),t._v("为例")]),t._v(" "),e("h4",{attrs:{id:"编译wechathelper-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译wechathelper-2"}},[t._v("#")]),t._v(" 编译WeChatHelper")]),t._v(" "),e("p",[t._v("参考前文使用"),e("code",[t._v("vs2017")]),t._v("运行项目编译")]),t._v(" "),e("h4",{attrs:{id:"编译detours"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译detours"}},[t._v("#")]),t._v(" 编译Detours")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/Desktop\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/microsoft/Detours.git\n")])])]),e("p",[t._v("运行"),e("code",[t._v("vs2017工具x86 Native Tools Command Prompt for VS 2017")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/Desktop/Detours\nnmake /f Makefile\n")])])]),e("h4",{attrs:{id:"修改原始程序iat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改原始程序iat"}},[t._v("#")]),t._v(" 修改原始程序IAT")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 进入要调试的应用主程序\ncd D:/Applications/WeChat\n# 将要调试的dll复制到程序目录\ncp ~/Desktop/weicai-scraper/src/native/WeChatHelper/Debug/WeChatHelper.dll .\ncp ~/Desktop/weicai-scraper/src/native/WeChatHelper/Debug/WeChatHelper.pdb .\n# 修改IAT\n~/Desktop/Detours/bin.X86/setdll.exe /d:WeChatHelper.dll WeChat.exe\n# 恢复IAT\n~/Desktop/Detours/bin.X86/setdll.exe /r WeChat.exe\n\n")])])]),e("h4",{attrs:{id:"配置vs2017的本地调试设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置vs2017的本地调试设置"}},[t._v("#")]),t._v(" 配置vs2017的本地调试设置")]),t._v(" "),e("p",[t._v("将"),e("code",[t._v("配置属性")]),t._v("-"),e("code",[t._v("调试")]),t._v("-"),e("code",[t._v("本地windows调试")]),t._v(":\n"),e("code",[t._v("命令参数")]),t._v("改为主程序地址如"),e("code",[t._v("D:/Applications/WeChat/WeChat.exe")]),t._v(";\n"),e("code",[t._v("工作目录")]),t._v("改为主程序目录址如"),e("code",[t._v("D:/Applications/WeChat")])]),t._v(" "),e("h4",{attrs:{id:"运行调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行调试"}},[t._v("#")]),t._v(" 运行调试")]),t._v(" "),e("p",[t._v("在DLL入口下个断点， 启动调试即可。")]),t._v(" "),e("h2",{attrs:{id:"文档生成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文档生成"}},[t._v("#")]),t._v(" 文档生成")]),t._v(" "),e("h3",{attrs:{id:"安装vuepress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装vuepress"}},[t._v("#")]),t._v(" 安装vuepress")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress --dev\n")])])]),e("h3",{attrs:{id:"构建文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建文档"}},[t._v("#")]),t._v(" 构建文档")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run docs:build\n")])])]),e("h2",{attrs:{id:"开源许可"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开源许可"}},[t._v("#")]),t._v(" 开源许可")]),t._v(" "),e("p",[t._v("基于 "),e("a",{attrs:{href:"https://opensource.org/licenses/MIT",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIT license"),e("OutboundLink")],1),t._v(" 许可进行开源。")])])}),[],!1,null,null,null);a.default=r.exports}}]);