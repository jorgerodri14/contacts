const fs = require('fs')
const https = require('https')
const chalk = require('chalk')

https.get('https://exercise.goldenspear.com/contacts.json', (res) => {
  let rawData = ''
  res.on('data', (chunk) => {
    rawData += chunk
    console.log(chalk.green('Chunk capture'))
  });
  res.on('end', () => {
    const parsedData = rawData.toString()
    fs.writeFile('./data/contacts.json', parsedData, (error) => {
      if (error) console.log(chalk.red(err))
      console.log(chalk.inverse.green.bold('Download Success!!'))
    })
  }).on('error', (err) => console.log(chalk.inverse.red.bold('Error:\n', err)))
})

