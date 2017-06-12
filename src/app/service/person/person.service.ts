import {Injectable} from '@angular/core';
import {Person} from '../../model/person';

@Injectable()
export class PersonService {

  constructor() {
  }

  get reportingPerson(): Person {
    return new Person('Roger', 'Federer');
  }
  get responsiblePerson(): Person {
    return new Person('David', 'Beckham');
  }

  set responsiblePerson(responsiblePerson: Person) {
    this.responsiblePerson = responsiblePerson;
  }

  set reportingPerson(assignablePerson: Person) {
    this.reportingPerson = assignablePerson;
  }
}
