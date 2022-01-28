import resolve from 'rollup-plugin-node-resolve'
import common from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'

const config = {
  input: 'index.ts',
  external: ['ali-oss', 'gulp-util', 'through2', 'ora'],
  output: {
    format: 'cjs',
    exports: 'auto',
    name: 'OssManager',
  },
  plugins: [
    resolve(),
    common(),
    json(),
    typescript(),
  ],
}

export default config