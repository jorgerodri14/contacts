const fs = require('fs')
const https = require('https')
const chalk = require('chalk')

https.get('https://raw.githubusercontent.com/wellingtoncosta/fake-contacts-api/master/db.json', (res) => {
  let rawData = ''
  res.on('data', (chunk) => {
    rawData += chunk
  });
  res.on('end', () => {
    const { contacts } = JSON.parse(rawData)
    fs.writeFile('./data/contacts.json', JSON.stringify(contacts), (error) => {
      if (error) console.log(chalk.red(err))
      console.log(chalk.inverse.green.bold('Download Success!!'))
    })
  }).on('error', (err) => console.log(chalk.inverse.red.bold('Error:\n', err)))
})

