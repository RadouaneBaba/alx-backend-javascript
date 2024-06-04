const fs = require('fs');

function readDatabase(path) {
  return fs.promises.readFile(path, 'utf8')
    .then((data) => {
      const students = data.split('\n');
      const fields = {};

      for (const student of students) {
        if (student !== '') {
          const line = student.split(',');
          if (!fields[line[3]]) fields[line[3]] = [line[0]];
          else fields[line[3]].push(line[0]);
        }
      }
      return fields;
    }).catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = readDatabase;
