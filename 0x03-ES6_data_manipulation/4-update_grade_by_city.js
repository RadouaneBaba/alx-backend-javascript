export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => ({
    ...student,
    grade: newGrades.filter((grade) => grade.studentId === student.id)[0]
      ? newGrades.filter((grade) => grade.studentId === student.id)[0].grade : 'N/A',
  })).filter((student) => student.location === city);
}
