import {Ticket} from './ticket';

export interface Project {
  Id: number,
  Name: string,
  Description: string,
  CustomerName: string,
  StartDate: Date,
  EndDate: Date,
  ImageUrl: string,
  Tickets: Ticket[]
}
