import {TimeSheet} from './timesheet';
import {TicketType} from './ticket-type';

export interface Ticket {
  Name: string,
  Description: string,
  Estimate: number,
  StartDate: Date,
  EndDate: Date,
  StatusId: number,
  Status: string,
  ResponsibleId: number,
  TypeId: number,
  TicketType: TicketType,
  ProjectId: number,
  Project: string,
  ReporterId: number,
  TimeSheets: TimeSheet[]
  Id: number
}
