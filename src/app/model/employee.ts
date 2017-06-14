/**
 * Models the employee.
 * @author Taras Murzenkov
 */
import {Location} from './location';
import {Position} from './position';
import {Project} from './project';
import {Role} from './role';

export interface Employee {
  First: string,
  Last: string,
  BirthDay: Date,
  Email: string,
  Address: string,
  Skype: string,
  Phone: string,
  ImageUrl: string,
  PositionId: number,
  Position: Position,
  LocationId: number,
  Location: Location,
  Projects: Project[],
  Roles: Role[],
  FullName: string,
  Id: number
}
