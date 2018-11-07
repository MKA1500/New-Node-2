console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('command: ', command);
console.log(process.argv);
console.log('Yargs', argv);


// for typing "node app.js list" etc.

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  console.log('listing all notes');
} else if (command === 'read') {
  console.log('reading note');
} else {
  console.log('command not recogized');
}
