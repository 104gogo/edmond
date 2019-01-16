module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // targets: {
        //   browsers: [
        //     '>1%',
        //     'last 1 versions',
        //     'Firefox ESR',
        //     'not ie < 9',
        //   ]
        // },
        targets: {
          "chrome": "58",
        },
        // targets: {
        //   "ie": "9",
        // },
        // targets: ['iOS >= 8', 'Android >= 4'],
        // targets: {
        //   node: '5',
        // },
        // useBuiltIns: 'usage',
        useBuiltIns: 'entry',
        // useBuiltIns: false,
        debug: true
      }
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false
      }
    ],
  ]
}