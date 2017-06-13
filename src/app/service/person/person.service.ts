import {Injectable} from '@angular/core';
import {Person} from '../../model/person';

@Injectable()
export class PersonService {
  private reportingPerson: Person;
  private responsiblePerson: Person;

  constructor() {
  }

  getReportingPerson(): Person {
    return new Person('Roger', 'Federer');
  }

  getResponsiblePerson(): Person {
    return new Person('David', 'Beckham');
  }

  setResponsiblePerson(responsiblePerson: Person) {
    this.responsiblePerson = responsiblePerson;
  }

  setReportingPerson(assignablePerson: Person) {
    this.reportingPerson = assignablePerson;
  }
}
