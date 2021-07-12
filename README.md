# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

### 技术栈
1. 编程语言：[TypeScript 4.x](https://www.typescriptlang.org/zh/) + JavaScript
2. 构建工具：[Vite 2.x](https://cn.vitejs.dev/)
3. 前端框架：[Vue 3.x](https://v3.cn.vuejs.org/)
4. 路由工具：[Vue Router 4.x](https://next.router.vuejs.org/zh/index.html)
5. 状态管理：[Vuex 4.x](https://next.vuex.vuejs.org/)
6. UI 框架：[Element Plus](https://element-plus.gitee.io/#/zh-CN)
7. CSS 预编译：[Sass](https://sass.bootcss.com/documentation)
8. HTTP 工具：[Axios](https://axios-http.com/)
9. Git Hook 工具：husky + lint-staged
10. 代码规范：EditorConfig + Prettier + ESLint + Airbnb JavaScript Style Guide
11. 提交规范：Commitizen + Commitlint

### 资料
1. [掘金](https://juejin.cn/post/6951649464637636622#heading-12)

### 问题：

1. run error `esbuild\esbuild.exe ENOENT` 。
报错原因： 找不到，esbuild/esbuild.exe 这个文件。
解决办法：在当前目录下面，执行： node ./node_modules/esbuild/install.js
