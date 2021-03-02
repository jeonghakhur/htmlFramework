/**
 * --------------------------------------------------------------------------
 * Wooribank Mydata (v0.1.1): sample.js
 * --------------------------------------------------------------------------
 */

import {
  getjQuery,
  typeCheckConfig
} from './util/index'
import Data from './dom/data'
import SelectorEngine from './dom/selector-engine'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
const NAME = 'sample'
const VERSION = '4.3.1'
const DATA_KEY = 'wbm.modal'

const Default = {
  // backdrop: true,
  // keyboard: true,
  // focus: true,
  // show: true,
}

const DefaultType = {
  // backdrop: '(boolean|string)',
  // keyboard: 'boolean',
  // focus: 'boolean',
  // show: 'boolean',
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Sample {
  constructor(element, config) {
    // Protected
    this.element = element
    this.config = this._getConfig(config)

    this.init()
    Data.setData(element, this.constructor.DATA_KEY, this)
  }

  // Getters

  static get VERSION() {
    return VERSION
  }

  static get Default() {
    return Default
  }

  // Public
  dispose() {
    console.log('dispose')
  }

  init() {
    console.log(this, 'sample inint')
  }

  // Private
  _getConfig(config) {
    config = {
      ...Default,
      ...config,
    }
    typeCheckConfig(NAME, config, DefaultType)
    return config
  }
  // Static

  static jQueryInterface(config) {
    return this.each(function () {
      let data = Data.getData(this, DATA_KEY)
      const _config = typeof config === 'object' && config

      if (!data && /dispose|hide/.test(config)) {
        return
      }

      if (!data) {
        data = new Sample(this, _config)
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`)
        }

        data[config]()
      }
    })
  }

  static getInstance(element) {
    return Data.getData(element, DATA_KEY)
  }
}

const $ = getjQuery()

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .sample to jQuery only if jQuery is present
 */
/* istanbul ignore if */
if ($) {
  const JQUERY_NO_CONFLICT = $.fn[NAME]
  $.fn[NAME] = Sample.jQueryInterface
  $.fn[NAME].Constructor = Sample
  $.fn[NAME].noConflict = () => {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Sample.jQueryInterface
  }
}

export default Sample

SelectorEngine.find('[data-toggle="tooltip"]').forEach(el => {
  console.log(el)
  if (!Sample.getInstance(el)) {
    return new Sample(el)
  }
})
