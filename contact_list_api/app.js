const yargs = require('yargs')
const downladContacts = require('./data/downloadContacts')

yargs.command({
  command: 'download',
  decribe: 'Download contacts list',
  handler:downladContacts 
})