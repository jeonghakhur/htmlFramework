'use strict'

const pkg = require('../package.json')
const date = new Date()

function getBanner(pluginFilename) {
  return `/*!
  * WooribankMyData${pluginFilename ? ` ${pluginFilename}` : ''} v${pkg.version} (${date})
  */`
}

module.exports = getBanner
