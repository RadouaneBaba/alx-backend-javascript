interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
    firstName: 'Samir',
    lastName: 'Doe',
    age: 20,
    location: 'New York',
  };
  
  const student2: Student = {
    firstName: 'Ahmed',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles',
  };

const studentsList: Student[] = [student1, student2];

console.log(studentsList);
