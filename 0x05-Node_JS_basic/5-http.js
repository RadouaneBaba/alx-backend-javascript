const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.write('Hello Holberton School!');
      res.end();
    } else if (req.url === '/students') {
      res.write('This is the list of our students\n');
      fs.promises.readFile(process.argv[2], 'utf8')
        .then((data) => {
          const students = data.split('\r\n');
          const fields = {};
          const studentsCount = students.filter((student) => student !== '').length - 1;
          res.write(`Number of students: ${studentsCount}\n`);
          for (const student of students) {
            if (student !== '') {
              const line = student.split(',');
              if (!fields[line[3]]) fields[line[3]] = [line[0]];
              else fields[line[3]].push(line[0]);
            }
          }
          for (const [key, value] of Object.entries(fields)) {
            if (key !== 'field') {
              res.write(`Number of students in ${key}: ${value.length}. List: ${fields[key].join(', ')}\n`);
            }
          }
          res.end();
        }).catch(() => {
          res.end();
          throw new Error('Cannot load the database');
        });
    }
  }
}).listen(1245);

module.exports = app;
