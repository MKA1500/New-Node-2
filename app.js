console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
console.log('command: ', command);
console.log(process.argv);
// for typing "node app.js list" etc.

if (command === 'add') {
  console.log('adding new note');
} else if (command === 'list') {
  console.log('listing all notes');
} else if (command === 'read') {
  console.log('reading note');
} else {
  console.log('command not recogized');
}