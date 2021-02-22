import Popper from 'popper.js'

class Tooltip {
  constructor() {
    this._popper = new Popper(
      document.querySelector('body'),
      document.querySelector('button'),
      { placement: 'top' }
    )
    console.log(this._poper)
  }
}

const tooltip = new Tooltip()
console.log(tooltip)
export default Tooltip
