# moderate-admin-react-antd5

## 正在做

**大方向：对接若依后端主要功能，打造成为一个实用快捷的管理后台搬砖利器**

-   [x] 对接若依后端的登录。 ✅
-   [x] 对接若依后端的菜单权限控制。 ✅
-   [x] 前端完全可以脱离后端的权限控制，自行创建路由，如需后端控制，仅需简单配置即可，同时支持钱后端权限管理完美融合。✅
-   [x] 根据若依的权限数据，动态创建路由，无需再费劲鉴权（没权限就404）。✅
-   [x] 路由和菜单拆分干净不耦合，菜单仅仅存路由id实现关联，路由跳转仅仅根据id就可以做到。 ✅
-   [x] 业务流转模式采用“真响应式”，即一处某特定事件发生，相关联位置自行响应做处理。✅
-   [x] 业务分层清晰 `UI 层` + `状态管理层`（`状态store`+`业务助手helper`）,UI触发行为，状态流转事件，UI响应刷新。 ✅
-   [ ] 国际化，无脑使用i18n。
-   [ ] 继续整合antd的表单功能，能够随心所欲的配置生成。
-   [ ] 继续对接若依比较好的后端功能，诸如代码生成，角色管理等等。

## 日志

-   24.3.20
    -   [x] 解决s级问题：vite或respack的热更新对reudx的影响。 ✅
    -   [x] 添加404页面，包括了针对全局和针对homePage的两种情况

### 效果展示

-   基础curd
    ![](https://qiniu.moderate.run/img/QQ20240319-200618%402x.png)

-   开发助手：代码生成，路由配置一条龙，实现快速创建和管理，无需手动实现
    ![](https://qiniu.moderate.run/img/QQ20240319-201338%402x.png)

-   和若依菜单配置联动，只需在若依菜单管理配置路由名即可
    ![](https://qiniu.moderate.run/img/3667960414.png)

-   真”前后端分离“，前端完全可以脱离后端权限控制，自行运转路由系统，同时又可与后端权限巧妙融合。
    ![](https://qiniu.moderate.run/img/QQ20240319-205403%402x.png)

-   若依启动只需启动redis和若依后端项目即可（精简的ruoyi-pro的后端项目，预计24年4月底开源）
    ![](https://qiniu.moderate.run/img/QQ20240319-202525%402x.png)

### 核心功能点

## 技术选型

-   React18
-   Antd5
-   Redux或natur
-   react-router 6.4.3
-   vite或rspack
-   ts

## 功能点

-   约定式路由
-   路由，api，store提供开发管理，可通过操作生成代码

# 启动

```
第一步
pnpm i

第二步
pnpm run start
```

这样，一个全栈项目就跑起来了。

## 规范

-   页面组件文件必须以Page结尾，才能使用devPage中的路由自动化添加功能

有问题，欢迎来闲D岛🏝️咨询
![闲D岛](https://qiniu.moderate.run/IMG_4020.JPG)
