// rollup.config.js
const commonjs = require('@rollup/plugin-commonjs')
const { nodeResolve } = require('@rollup/plugin-node-resolve')

const config = {
  input: 'src/index.js',
  output: {
    esModule: true,
    file: 'dist/index.js',
    format: 'cjs', // 改为CommonJS格式
    sourcemap: true
  },
  plugins: [commonjs(), nodeResolve({ preferBuiltins: true })]
}

module.exports = config // 使用module.exports导出
