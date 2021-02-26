'use strict'

const path = require('path')
const babel = require('rollup-plugin-babel')
const resolve = require('@rollup/plugin-node-resolve')
const banner = require('./banner.js')

// const BUNDLE = process.env.BUNDLE === 'true'
// const ESM = process.env.ESM === 'true'

const plugins = [
  babel({
  // Only transpile our source code
    exclude: 'node_modules/**',
    // Include only required helpers
    externalHelpersWhitelist: [
      'createClass',
      'createSuper',
      'defineProperties',
      'defineProperty',
      'getPrototypeOf',
      'inheritsLoose',
      'objectSpread2'
    ]
  })
]
const globals = {
  'popper.js': 'Popper'
}

// fileDest += '.bundle'
// Remove last entry in external array to bundle Popper
plugins.push(resolve())

const rollupConfig = [{
  input: path.resolve(__dirname, '../js/index.umd.js'),
  output: {
    banner,
    file: path.resolve(__dirname, '../dist/js/index.js'),
    format: 'umd',
    name: 'WBM',
    globals
  },
  plugins
}, {
  input: path.resolve(__dirname, '../js/docs.js'),
  output: {
    file: path.resolve(__dirname, '../docs/assets/js/docs.js'),
    format: 'umd',
  },
  plugins
}]

module.exports = rollupConfig
