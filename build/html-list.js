'use strict'

const path = require('path')
const fs = require('fs')

const htmlDir = path.resolve('html')
const listJson = 'docs/list.json'
const stream = fs.createWriteStream(listJson)

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
  return new Promise(resolve => {
    fs.readFile(file, 'utf-8', (err, data) => {
      console.log(file)
      // eslint-disable-next-line curly
      if (err) throw err
      const obj = {}
      obj.path = file
      const tempMatch = data.match(/-\w+:\s.*/g)
      if (tempMatch) {
        tempMatch.forEach(str => {
          const tempStr = str.split(':')
          obj[tempStr[0].replace('-', '')] = tempStr[1].trim()
        })
      }

      resolve(obj)
    })
  })
}

async function loop(files) {
  const fileInfo = []
  for (const file of files) {
    // eslint-disable-next-line no-await-in-loop
    fileInfo.push(await readFile(file))
  }

  return fileInfo
  // console.log(makeList(fileInfo))
}

loop(getAllFiles(htmlDir)).then(val => {
  stream.on('finish', () => {
    console.log('쓰기완료', val)
  })
  stream.write(`${JSON.stringify(val)}`)
  stream.end()
})

// const data = getAllFiles('html')
// console.log('data', data)
