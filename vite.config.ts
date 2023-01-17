import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';
const pathSrc = path.resolve(__dirname, 'src');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // include: [
      //   /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      //   /\.vue$/,
      //   /\.vue\?vue/, // .vue
      //   /\.md$/, // .md
      // ],
      // // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等 以及 vue-router的函数
      imports: ['vue', 'vue-router'],

      vueTemplate: true,
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
      // 自定义公共方法导入
      dirs: ['./src/utils', './src/stores'],

      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
      eslintrc: {
        enabled: true,
        filepath: path.resolve(pathSrc, 'eslintrc-auto-import.json'),
        globalsPropValue: true,
      },
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep'], //    重点     <el-icon :size="20"><i-ep-Document /></el-icon> 一这种格式编写
        }),
      ],
      //  dts: "src/components.d.ts", // 路径
      dts: path.resolve(pathSrc, 'components.d.ts'),
    }),
    Icons({
      autoInstall: true,
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'http://api.h5ke.top/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
