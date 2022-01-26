import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import builtins from 'rollup-plugin-node-builtins';
const packageJson = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    { dir: 'dist', format: 'cjs' },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  external: [],
  plugins: [typescript(), json(), commonjs(), builtins()]
}