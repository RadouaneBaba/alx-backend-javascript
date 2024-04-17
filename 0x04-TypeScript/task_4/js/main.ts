interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface PrintTeacherFunction {
  (firstName:string, lastName:string): string;
}

const printTeacher: PrintTeacherFunction =  (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}

interface StudentInterface {
  _firstName: string;
  _lastName: string;
  workOnHomework: () => string;
  displayName: () => string;
}

class StudentClass implements StudentInterface {
  _firstName;
  _lastName;
  constructor(firstName:string, lastName:string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework():string {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }
}

