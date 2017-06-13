/**
 * Models the employee.
 * @author Taras Murzenkov
 */
import {Location} from './location';

export interface Employee {
  First: string,
  Last: string,
  BirthDay: Date,
  Email: string,
  Location: Location,
  Address: string,
  Skype: string,
  Phone: string
}
