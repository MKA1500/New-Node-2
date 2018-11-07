console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding note', title, body);
  // node app.js add --title="notes title" --body "this is a notes body"
};

module.exports = {
  // addNote: addNote
  addNote
};
