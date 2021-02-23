document.addEventListener('DOMContentLoaded', () => {
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

  // 코드 하이라이터 클립보드 기능 추가
  const btnHtml =
    '<div class="bd-clipboard"><button type="button" class="btn-clipboard" title="Copy to clipboard">Copy</button></div>'
  document
    .querySelectorAll('figure.highlight, div.highlight')
    .forEach(element => {
      element.insertAdjacentHTML('beforebegin', btnHtml)
    })

  // eslint-disable-next-line no-undef
  const clipboard = new ClipboardJS('.btn-clipboard', {
    target: trigger => trigger.parentNode.nextElementSibling
  })

  clipboard.on('success', e => {
    e.clearSelection()
  })

  console.log(axios)
})
