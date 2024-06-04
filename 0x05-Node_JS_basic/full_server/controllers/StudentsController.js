import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((fields) => {
        let resultText = 'This is the list of our students\n';
        const orderedKeys = Object.keys(fields).sort();
        for (const key of orderedKeys) {
          if (key !== 'field') {
            resultText += `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}\n`;
          }
        }
        response.send(resultText);
      }).catch((err) => {
        response.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2])
      .then((fields) => {
        response.send(`List: ${fields[major].join(', ')}`);
      }).catch((err) => {
        response.status(500).send(err.message);
      });
  }
}
