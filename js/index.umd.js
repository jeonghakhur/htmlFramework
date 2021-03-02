import SelectorEngine from './src/dom/selector-engine'
// import Alert from './src/alert'
// import Button from './src/button'
// import Carousel from './src/carousel'
// import Collapse from './src/collapse'
// import Dropdown from './src/dropdown'
import Modal from './src/modal'
// import Popover from './src/popover'
// import ScrollSpy from './src/scrollspy'
// import Tab from './src/tab'
// import Toast from './src/toast'
import Tooltip from './src/tooltip'
import Sample from './src/sample'

const initialize = () => {
  console.log('initialzie')
  // sample
  SelectorEngine.find('body').forEach(el => {
    console.log(el)
    if (!Sample.getInstance(el)) {
      return new Sample(el)
    }
  })
}

export default {
  // Alert,
  // Button,
  // Carousel,
  // Collapse,
  // Dropdown,
  Modal,
  // Popover,
  // ScrollSpy,
  // Tab,
  // Toast,
  Tooltip,
  Sample,
  initialize
}
