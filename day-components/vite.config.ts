import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dts: path.resolve(pathSrc, 'types/components.d.ts'),
    }),
    Components({
      dts: path.resolve(pathSrc, 'types/components.d.ts'),
    }),
    Unocss(),
  ],
})
