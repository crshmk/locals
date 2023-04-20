import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: './src/index.js',
  output: {
    file: './dist/locals.min.js',
    format: 'cjs',
    name: 'bundle',
    globals: {
      'ramda': 'r',
    }
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    uglify()
  ],
  // todo find wildcard syntax e.g. 'node:**'
  external: ['node:fs/promises', 'node:os', 'node:path', 'ramda', 'react']
}
