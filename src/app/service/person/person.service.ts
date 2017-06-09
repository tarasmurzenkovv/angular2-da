import {Injectable} from '@angular/core';
import {Person} from '../../model/person';

@Injectable()
export class PersonService {

  constructor() {
  }

  getReportingPerson(): Person {
    return new Person('Roger', 'Federer');
  }
  getResponsiblePerson(): Person {
    return new Person('David', 'Beckham');
  }
}
