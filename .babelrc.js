const isProd = String(process.env.NODE_ENV) === 'production'
const isTest = String(process.env.NODE_ENV) === 'test'
const presets = [
  ['@babel/preset-env', {modules: isTest ? 'commonjs' : false}],
  '@babel/preset-react',
]
const plugins = [
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-object-rest-spread',
  [
    'babel-plugin-emotion',
    {
      hoist: isProd,
      sourceMap: !isProd,
      autoLabel: !isProd,
      labelFormat: '[filename]--[local]',
    },
  ],
  'react-loadable/babel',
].filter(Boolean)
module.exports = {
  presets,
  plugins,
}
