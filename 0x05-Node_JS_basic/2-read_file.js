const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const fields = {};
    const students = data.split('\r\n');
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
        let listStr = '';
        for (let i = 0; i < fields[key].length; i += 1) {
          listStr += fields[key][i];
          if (i < fields[key].length - 1) listStr += ', ';
        }
        console.log(`Number of students in ${key}: ${value.length}. List: ${listStr}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
