import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 编辑器提示 path,__dirname 模块找不到，安装 npm i @types/node -D
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias:
      // 设置 `@` 指向 `src` 目录
      [{ find: '@', replacement: resolve(__dirname, 'src') }]
  },
  base: './', // 设置打包路径
  // 打包配置
  build: {
    target: 'modules',
    outDir: 'dist', // 指定输出路径
    assetsDir: 'static', // 指定生成静态资源的存放路径
    minify: 'terser' // 混淆器，terser构建后文件体积更小
  },
  server: {
    // 设置服务启动端口号
    port: 8080,
    // 设置服务启动时是否自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,
    proxy: {
      // '/api': {
      //     target: 'http://xxx.xxx.xxx.xxx:8000',
      //     changeOrigin: true,
      //     secure: false,
      //     rewrite: (path) => path.replace('/api/', '/')
    }
  }
})
