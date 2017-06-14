import {Ticket} from './ticket';

export interface Project {
  Name: string,
  Description: string,
  CustomerName: string,
  StartDate: Date,
  EndDate: Date,
  ImageUrl: string,
  Tickets: Ticket[]
}
