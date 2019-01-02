const path = require('path');
const dev = require('af-webpack/dev').default;
const getConfig = require('af-webpack/getConfig').default;

const cwd = process.cwd();
const babel = path.join(cwd, '.babelrc.js');
const entry = path.join(cwd, 'site/index.js');

const webpackConfig = getConfig({
  cwd,
  entry,
  babel,
});

dev({ webpackConfig });
