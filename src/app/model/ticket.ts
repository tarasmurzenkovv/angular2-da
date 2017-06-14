import {TimeSheet} from './timesheet';

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
  ProjectId: number,
  Project: string,
  ReporterId: number,
  TimeSheets: TimeSheet[]
}
