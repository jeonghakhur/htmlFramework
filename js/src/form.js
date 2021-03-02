/**
 * --------------------------------------------------------------------------
 * Wooribank Mydata (v0.1.1): form.js
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
const NAME = 'form'
const VERSION = '4.3.1'
const DATA_KEY = 'wbm.form'

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

class Form {
  constructor(element, config) {
    // Protected
    this.element = element
    this._field = null
    this.config = this._getConfig(config)

    Data.setData(element, DATA_KEY, this)
    this.init()
    this.initEvent()
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
    console.log('init')
    this._field = SelectorEngine.parents(this.element, '.form-field')
  }

  initEvent() {
    this.element.addEventListener('focus', () => {
      console.log(this._field)
    })
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
        data = new Form(this, _config)
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
 * add .form to jQuery only if jQuery is present
 */
/* istanbul ignore if */
if ($) {
  const JQUERY_NO_CONFLICT = $.fn[NAME]
  $.fn[NAME] = Form.jQueryInterface
  $.fn[NAME].Constructor = Form
  $.fn[NAME].noConflict = () => {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Form.jQueryInterface
  }
}

export default Form
