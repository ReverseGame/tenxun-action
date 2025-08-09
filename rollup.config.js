import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const config = {
  input: 'src/index.js',
  output: {
    esModule: true,
    file: 'dist/index.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    commonjs({
      ignoreDynamicRequires: true,
      exclude: ['node_modules/@reverse_game/tencent_cloud/**']
    }),
    nodeResolve({
      preferBuiltins: true,
      resolveOnly: ['@actions/core']
    })
  ],
}

export default config
