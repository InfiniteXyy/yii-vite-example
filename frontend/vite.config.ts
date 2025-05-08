import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import env from "vite-plugin-environment";

// 参考： https://element-plus.org/zh-CN/guide/quickstart.html#按需引入
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    vue(),
    env("all"),
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] }),
  ],
  build: {
    outDir: resolve(__dirname, "../web/assets/vue-build"), // 输出到 yii2 可访问的 public 目录
    emptyOutDir: true,
    manifest: true, // 用于生成 manifest.json 方便 yii2 获取 chunk 路径
    lib: {
      entry: "src/main.ts",
      name: "frontend",
      formats: ["umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: { globals: { vue: "Vue" } },
    },
  },
});
