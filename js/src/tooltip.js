import Popper from 'popper.js'

class Tooltip {
  constructor() {
    // this.name = 'jeonghak'
    this._element = null

    if (this._element) {
      this._popper = new Popper(
        document.querySelector('body'),
        document.querySelector('button'),
        { placement: 'top' }
      )
      console.log(this._poper)
    }
  }
}

// const tooltip = new Tooltip()
// console.log(tooltip)
export default Tooltip
