# moderate-admin-react-antd5

## 新文档搭建中
文档地址：<a url={https://dland-team.github.io/moderate-react-admin/}/>

## 进军路线

**大方向：对接若依后端主要功能，打造成为一个实用快捷的管理后台搬砖利器**

-   [x] 对接若依后端的登录。 ✅
-   [x] 对接若依后端的菜单权限控制。 ✅
-   [x] 前端完全可以脱离后端的权限控制，自行创建路由，如需后端控制，仅需简单配置即可，同时支持钱后端权限管理完美融合。✅
-   [x] 根据若依的权限数据，动态创建路由，无需再费劲鉴权（没权限就 404）。✅
-   [x] 路由和菜单拆分干净不耦合，菜单仅仅存路由 id 实现关联，路由跳转仅仅根据 id 就可以做到。 ✅
-   [x] 业务流转模式采用“真响应式”，即一处某特定事件发生，相关联位置自行响应做处理。✅
-   [x] 业务分层清晰 `UI 层` + `状态管理层`（`状态store`+`业务助手helper`）,UI 触发行为，状态流转事件，UI 响应刷新。 ✅
-   [x] 国际化，无脑使用 i18n。✅
-   [x] 继续整合 antd 的表单功能，能够随心所欲的配置生成。✅
-   [ ] 继续对接若依比较好的后端功能，诸如代码生成，角色管理等等。

## 战役日志

-   24.3.20

    -   [x] 解决 S 级难度问题：vite 或 respack 的热更新对 reudx 的影响。 ✅
    -   [x] 添加 404 页面，包括了针对全局和针对 homePage 的两种情况。 ✅
    -   [x] 附属路由（不关联菜单的）选中，要有正确的菜单选中效果，即显示他所附属的菜单路由选中效果。✅

-   24.3.22

    -   [x] 窗口 tab，菜单，路由联动规则全完成。✅
        -   窗口 tab 关闭存在父路由就跳转父路由，没父路由就跳转第一个。 ✅
        -   菜单的展开和关闭信息，在强制刷新网页之后依旧保持不变。 ✅
    -   [x] 封装表单：使用配置的方式，轻轻松松根据 antd 文档，写一个对象就行，无需重复不必要的标签 formItem 地狱。✅
    -   [x] 实现了表单项之间的监听：配置了 watch 选项，每个表单项目可以独立监听其他表单项的改变，运用的 antd 的 api 的 useWatch，居然有这个我才知道，我当时用 react hook form 就非常喜爱 watch，antd 也有，yyds。✅

-   24.3.23

    -   [x] 实现了 i18n 国际化，通过把文件放在 public 并进行拆分，这样可以按需的通过网络请求获得。✅
    -   [x] 整合了一个完整的 curd 功能模版，路由为“posPage”，该 curd 区别一般模版地方是，添加条目不是通过 modal 弹窗，而是嵌套路由实现。✅

-   24.3.24

    -   [x] 路由代码生成得到了进一步的完善，新添了几个关键的快捷配置项：✅
        -   是否是嵌套路由，如果是，代码中就会实现 Outlet，进行嵌套路由功能实现。✅
        -   是否是 index 路由，即所在嵌套路由中是默认首页。✅
        -   权限是否是强制客户决定显示，或是根据父路由权限来决定，不配置，默认走若依的权限控制。✅
    -   [x] ts 类型警告全修复，数量清零。✅
    -   [x] 将 vite 和 rspack 集成在一个项目里，爱用啥用啥，意义就在于如果出现了意想不到的热更新问题，那么进行切换比对，来判断到底谁靠谱，目前看应该是平分秋色，我内心还是觉得 vite 更稳的，但目前首选是 respack，不为别的，就是单纯想多试试 respack。✅

-   24.3.25
    -   [x] 整合芋道 ruoyi 后端，数据库默认链接我的服务器，直接运行即可或者自行使用内部的 mysql 脚本生成数据库，登录账号和密码是，admin 和 admin123，环境需要启动 redis。✅
    -   [x] 整合一套全自动 table 或列表的分页查询机制，即通过设置页码即可实现重新查询更新的流程，省去了每次传递搜索内容和页码数据的工作。✅

### 师出有名

工作，外包，基本少不了管理后台的开发，当下我便遇到了一些实际问题：
- 工作中迎来了“老旧翻新”时期：大部分老项目是React技术栈的，组件库antd3（现在都5了）改vue相对来说，成本较高（主要是React用习惯了，改起来顺手），为了能够提升摸鱼时间，还是使用最新，最主流的React系改起来更合理。
- 外包基本离不开管理后台：无论你是做小程序，单页面应用还是服务端渲染网站，你基本都得有一个管理后台在后方打底，虽然对功能要求上大同小异，页面细节上要求也不高，但是定制化一定是有的，虽然大同，但小异着实不少。
- 若依大局已定：当下大部分的管理后台业务都会使用现成的如若依项目，相当完备的基础功能，惊人的能打，大部分管理后台业务一网打尽，但相对来说是亲Vue的，一个React开发体系加入一个Vue的管理后台，就失掉了技术栈统一（之前的封装，都不能用了，还怎么摸鱼啊）。

那么：“一个（不得不）用React开发管理后台，同时想整合若依现有的功能和规范，该怎么办”就成为了当下比较要紧的事情（这关乎2024一年的摸鱼质量）。

必须办ta，也顺便通过若依，学学java，抛开其他不谈，java搬砖还是比较靠谱的。

### 效果展示

-   基础 curd
    ![](https://qiniu.moderate.run/img/QQ20240319-200618%402x.png)

-   开发助手：代码生成，路由配置一条龙，实现快速创建和管理，无需手动实现
    ![](https://qiniu.moderate.run/img/QQ20240319-201338%402x.png)

-   和若依菜单配置联动，只需在若依菜单管理配置路由名即可
    ![](https://qiniu.moderate.run/img/3667960414.png)

-   真”前后端分离“，前端完全可以脱离后端权限控制，自行运转路由系统，同时又可与后端权限巧妙融合。
    ![](https://qiniu.moderate.run/img/QQ20240319-205403%402x.png)

-   若依启动只需启动 redis 和若依后端项目即可（精简的 ruoyi-pro 的后端项目，预计 24 年 4 月底开源）
    ![](https://qiniu.moderate.run/img/QQ20240319-202525%402x.png)

### 核心功能点

## 技术选型

-   React18
-   Antd5
-   Redux 或 natur
-   react-router 6.4.3
-   vite 或 rspack
-   ts

## 功能点

-   约定式路由
-   路由，api，store 提供开发管理，可通过操作生成代码

# 启动

```shell
第一步
pnpm i

第二步
pnpm run start
```

这样，一个全栈项目就跑起来了。

当然，登录和获取权限都是根据若依后端提供的接口

## 规范

-   页面组件文件必须以 Page 结尾，才能使用 devPage 中的路由自动化添加功能

有问题，欢迎来闲 D 岛 🏝️ 咨询
![闲D岛](https://qiniu.moderate.run/IMG_4020.JPG)
