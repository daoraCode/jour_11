// Exercice 1 - File System
var fs = require('fs');
console.log(fs);

fs.readFile('jour07.txt', function (err, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Lecture en différé : ' + data.toString());
});

fs.unlink('jour07.txt', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('jour07.txt à bien été supprimé');
});


