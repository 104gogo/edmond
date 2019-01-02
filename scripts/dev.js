const path = require('path');
const dev = require('af-webpack/dev').default;
const getConfig = require('af-webpack/getConfig').default;

const cwd = process.cwd();
const babel = path.resolve(__dirname, './babelrc.js');

const webpackConfig = getConfig({
  cwd,
  entry: '../site/index.js',
  babel,
});

dev({ webpackConfig });