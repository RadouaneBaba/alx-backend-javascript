const express = require('express');

const app = express();
const port = 1245;
const fs = require('fs');

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  fs.promises.readFile(process.argv[2], 'utf8')
    .then((data) => {
      const students = data.split('\n');
      const fields = {};
      const studentsCount = students.filter((student) => student !== '').length - 1;
      let resText = `This is the list of our students\nNumber of students: ${studentsCount}\n`;
      for (const student of students) {
        if (student !== '') {
          const line = student.split(',');
          if (!fields[line[3]]) fields[line[3]] = [line[0]];
          else fields[line[3]].push(line[0]);
        }
      }
      for (const [key, value] of Object.entries(fields)) {
        if (key !== 'field') {
          resText += `Number of students in ${key}: ${value.length}. List: ${fields[key].join(', ')}`;
        }
      }
      res.send(resText);
    }).catch(() => {
      res.send('Cannot load the database');
    });
});

app.listen(port);

module.exports = app;
