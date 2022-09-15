import { defineConfig } from 'vite';
import path from 'path';
import envCompatible from 'vite-plugin-env-compatible';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  resolve: {
    alias: {
        'components': path.resolve(__dirname, 'src/components'),
        'hooks': path.resolve(__dirname, 'src/hooks')
    },
    extensions: [
      '.mjs',
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
      '.vue'
    ]
  },
  plugins: [
    viteCommonjs(),
    envCompatible(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'type-racer'
        }
      }
    })
  ],
  server: {
    host: true
  },
  build: {
    target: 'esnext'
  }
})
