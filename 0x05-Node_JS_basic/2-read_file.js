const fs = require('fs');
function countStudents(path) {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const fields = {}
    const students = data.split('\n');
    console.log('Number of students:', students.length - 1)
    for (const student of students) {
      if (student == '') continue;
      const data = student.split(',')
      if (!fields[data[3]]) fields[data[3]] = [data[0]]
      else fields[data[3]].push(data[0])
    }
    for (const [key, value] of Object.entries(fields)) {
      if (key == 'field') continue;
      let listStr = '';
      for (let i = 0; i < fields[key].length; i++) {
        listStr += fields[key][i];
        if (i < fields[key].length - 1) listStr += ', ';
      }
      console.log(`Number of students in ${key}: ${value.length}. List: ${listStr}`);
    }
  })
}

module.exports = countStudents;