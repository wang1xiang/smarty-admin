import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Layouts from "vite-plugin-vue-layouts";
import Components from "unplugin-vue-components/vite";
import Pages from "vite-plugin-pages";
import Unocss from "unocss/vite";
import presetIcons from "@unocss/preset-icons";
import path from "path";
import VueI18n from "@intlify/vite-plugin-vue-i18n";

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/],
    }),

    Pages({
      extensions: ["vue", "md"],
      exclude: ['**/components/*.vue'], // 排除页面中的子组件
    }),

    Layouts({
      layoutsDirs: "src/layouts",
    }),

    AutoImport({
      imports: ["vue", "vue-i18n", 'vue-router',],
      dts: "src/auto-imports.d.ts",
    }),

    Components({
      // 增加 src/**/components 支持页面中的子组件自动加载
      dirs: ['src/components','src/**/components'],
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts",
    }),

    Unocss({
      presets: [presetIcons()],
    }),

    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, "locales/**")],
    }),
  ],
});
