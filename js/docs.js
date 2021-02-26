/* eslint-disable no-undef */
const prism = () => {
  document.querySelectorAll('pre code').forEach(block => {
  // const html = Prism.highlight(block.innerHTML, Prism.languages.html, 'html')
    let html = block.innerHTML
    const myArray = html.match(/^\s+/)
    const partten = new RegExp(`^${myArray[0].slice(1)}`, 'mg')
    const className = block.parentNode.getAttribute('class').split('language-')[1]
    html = html.trim()
    html = html.replace(partten, '')
    html = Prism.highlight(html, Prism.languages[className], className)
    block.innerHTML = html
  })
}

const clipBoard = () => {
  // 코드 하이라이터 클립보드 기능 추가.
  const btnHtml =
    '<div class="bd-clipboard"><button type="button" class="btn-clipboard" title="Copy to clipboard">Copy</button></div>'
  document
    .querySelectorAll('figure.highlight, div.highlight')
    .forEach(element => {
      element.insertAdjacentHTML('beforebegin', btnHtml)
    })

  document.querySelectorAll('.btn-clipboard').forEach(btn => {
    const tooltipBtn = new WBM.Tooltip(btn)

    btn.addEventListener('mouseleave', () => {
      tooltipBtn.hide()
    })
  })

  const clipboard = new ClipboardJS('.btn-clipboard', {
    target(trigger) {
      return trigger.parentNode.nextElementSibling
    }
  })

  // console.log(clipboard)

  clipboard.on('success', e => {
    const tooltipBtn = WBM.Tooltip.getInstance(e.trigger)

    e.trigger.setAttribute('data-original-title', 'Copied')
    tooltipBtn.show()

    e.trigger.setAttribute('data-original-title', 'Copy to clipboard')
    e.clearSelection()
  })
}

const getPage = target => {
  const body = document.querySelector('#content')

  if (target.indexOf('#') !== -1) {
    target = target.split('#')[1]
  }

  $.ajax({
    url: `${target}.html`
  }).done(data => {
    $(body).html(data)
    // body.style.height = `${body.getBoundingClientRect().height}px`
    prism()
    clipBoard()
  })
}

const navi = () => {
  const naviEl = document.querySelector('.ly-nav')

  naviEl.addEventListener('click', e => {
    if (e.target.nodeName === 'A' && e.target.dataset.toggle) return
    e.preventDefault()

    const el = e.target
    const target = el.getAttribute('href')
    window.location.hash = target

    getPage(target)
  })
}

const loadPage = () => {
  const { hash } = window.location
  if (!hash) return

  getPage(hash)
}

const hashChange = () => {
  window.addEventListener('hashchange', e => {
    console.log(e)
    getPage(window.location.hash)
  }, false)
}


document.addEventListener('DOMContentLoaded', () => {

  loadPage()
  hashChange()

  // Pre 코드 치환 및 공백 처리
  document.querySelectorAll('pre code').forEach(block => {
    let html = block.innerHTML
    const myArray = html.match(/^\s+/)
    const partten = new RegExp(`^${myArray[0].slice(1)}`, 'mg')
    console.log(myArray)
    html = html.trim()
    html = html.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    html = html.replace(partten, '')
    block.innerHTML = html
  })

  const toggleGroup = Array.from(
    document.querySelectorAll('[data-toggle="collapse"]')
  )
  const collapseFunc = () => {
    const showMenu = target => {
      target.dataset.expanded = 'true'
      const collapse = target.nextElementSibling
      collapse.className = 'collapsing'
      setTimeout(() => {
        collapse.style.height = `${collapse.children[0].clientHeight + 10}px`
      }, 100)

      collapse.addEventListener('transitionend', e => {
        e.target.className = 'collapse show'
      })
    }

    const hideMenu = target => {
      target.dataset.expanded = 'false'
      const collapse = target.nextElementSibling
      collapse.className = 'collapsing'
      setTimeout(() => {
        collapse.style.height = '0px'
      }, 100)

      collapse.addEventListener('transitionend', e => {
        e.target.className = 'collapse'
      })
    }

    const toggleMenu = target => {
      if (target.getAttribute('data-expanded') === 'true') {
        hideMenu(target)
      } else {
        showMenu(target)
      }
    }

    const start = () => {
      toggleGroup.forEach(el => {
        if (el.getAttribute('data-expanded') === 'true') {
          showMenu(el)
        }
      })
    }

    toggleGroup.forEach(el => {
      el.addEventListener('click', e => {
        toggleMenu(e.currentTarget)
      })
    })
    start()
  }

  collapseFunc()
  navi()
})

