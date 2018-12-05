module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            '>1%',
            'last 1 versions',
            'Firefox ESR',
            'not ie < 9',
          ]
        },
        // targets: {
        //   "chrome": "58",
        // },
        useBuiltIns: 'usage',
        debug: true
      }
    ]
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
    ]
  ]
}