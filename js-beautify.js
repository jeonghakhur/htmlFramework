'use strict'

const beautify = require('js-beautify').html
const posthtml = require('posthtml');
const attrsSorter = require('posthtml-attrs-sorter');

const fs = require('fs')
const path = require('path')

const htmlDir = path.resolve('html')
const sortOpt = [
  'class', 'id', 'name',
  'data-.+', 'ng-.+', 'src',
  'for', 'type', 'href',
  'values', 'title', 'alt',
  'role', 'aria-.+',
  '$unknown$'
]

const getAllFiles = (dirPath, arrayOfFiles) => {
  const files = fs.readdirSync(dirPath)
  const arr = arrayOfFiles || []
  files.forEach(file => {
    if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
      getAllFiles(`${dirPath}/${file}`, arr)
    } else {
      arr.push(path.join(dirPath, '/', file))
    }
  })

  return arr
}

const readFile = file => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) throw err

    posthtml()
      .use(attrsSorter(sortOpt))
      .process(data)
      .then(result => {
        writeFile(file,beautify(result.html, {
          'indent_size': 2
        }))
      })
  })
}

const writeFile = (file, data) => {
  fs.writeFile(file, data, err => {
    if (err) return console.log(err)
  })
}

getAllFiles(htmlDir).forEach(file => {
  readFile(file)
})
