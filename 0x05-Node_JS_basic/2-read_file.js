const fs = require('fs');

function countStudents(path) {
  try {
    const students = fs.readFileSync(path, 'utf8').split('\n');
    const fields = {};
    console.log(`Number of students: ${students.length - 1}`);
    for (const student of students) {
      if (student !== '') {
        const line = student.split(',');
        if (!fields[line[3]]) fields[line[3]] = [line[0]];
        else fields[line[3]].push(line[0]);
      }
    }
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value.length}. List : ${fields[key].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
