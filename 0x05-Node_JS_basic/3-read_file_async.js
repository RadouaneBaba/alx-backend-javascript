const fs = require('fs');

function countStudents(path) {
  return fs.promises.readFile(path, 'utf8')
    .then((data) => {
      const students = data.split('\n');
      const fields = {};
      const studentsCount = students.filter((student) => student !== '').length - 1;
      console.log(`Number of students: ${studentsCount}`);
      for (const student of students) {
        if (student !== '') {
          const line = student.split(',');
          if (!fields[line[3]]) fields[line[3]] = [line[0]];
          else fields[line[3]].push(line[0]);
        }
      }
      for (const [key, value] of Object.entries(fields)) {
        if (key !== 'field') {
          console.log(`Number of students in ${key}: ${value.length}. List: ${fields[key].join(', ')}`);
        }
      }
    }).catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
