console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding note', title, body);
  // node app.js add --title="notes title" --body "this is a notes body"
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  // addNote: addNote
  addNote,
  getAll,
  getNote,
  removeNote
};
