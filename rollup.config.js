import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'node_modules/rx/dist/rx.all.js',
  output: {
    file: 'dist/rx.rollup.js',
    format: 'system',
  },
  context: 'window',
  plugins: [
    commonjs({
      include: 'node_modules/**',
    }),
  ]
}
