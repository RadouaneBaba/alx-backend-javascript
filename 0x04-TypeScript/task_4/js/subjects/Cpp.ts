namespace Subjects {
    export interface Teacher {
      experienceTeachingC?: number;
    }
  
    export class Cpp extends Subject {
      public getRequirements(): string {
        return "Here is the list of requirements for Cpp";
      }
    }
  }