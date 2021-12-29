module.exports = {
  presets: [
    [
      '@babel/preset-env',
      // {
      //   loose: true,
      //   modules: false,
      //   exclude: ['transform-typeof-symbol']
      // }
      {
        loose: true,
        useBuiltIns: "usage",
        modules: false,
        targets: {
          browsers: "> 0.25%, not op_mini all, not dead, IE 9-11",
          node: 6
        },
        exclude: ['transform-typeof-symbol']
      }
    ]
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    // '@babel/plugin-transform-runtime'
  ]
};
