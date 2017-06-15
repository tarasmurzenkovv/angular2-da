import {Employee} from '../../app/model/employee';

export const fakeEmployee: Employee = {
  First: 'David',
  Last: 'Beckham',
  BirthDay: new Date(),
  Email: 'david.beckham@dataart.com',
  Password: '111111',
  Address: 'Los Angeles, CA, USA',
  Skype: 'david_beckham',
  Phone: '380667895577',
  ImageUrl: 'employee.png',
  PositionId: 2,
  Position: {
    Name: 'Developer',
    Id: 2
  },
  LocationId: 1,
  Location: {
    Name: 'New York',
    Id: 1
  },
  Projects: [
    {
      Name: 'OpenQ',
      Description: 'The complete solution for Medical Affairs organizations.',
      CustomerName: 'OpenQ',
      StartDate: null,
      EndDate: null,
      ImageUrl: 'project.png',
      Tickets: [
        {
          Name: 'AP-0001',
          Description: 'Fix bug on front end',
          Estimate: 3,
          StartDate: null,
          EndDate: null,
          StatusId: 1,
          Status: null,
          ResponsibleId: 1415,
          TypeId: 1,
          TicketType: null,
          ProjectId: 944,
          Project: null,
          ReporterId: 1415,
          TimeSheets: [
            {
              LoggedTime: 4,
              Date: null,
              TicketId: 4426,
              Comment: 'Comment to the ticket',
              Id: 10283
            },
            {
              LoggedTime: 6,
              Date: null,
              TicketId: 4426,
              Comment: 'Comment to the ticket',
              Id: 10284
            }
          ],
          Id: 4426
        },
        {
          Name: 'AP-0002',
          Description: 'Fix bug on back end',
          Estimate: 4,
          StartDate: null,
          EndDate: null,
          StatusId: 1,
          Status: null,
          ResponsibleId: 1415,
          TypeId: 1,
          TicketType: null,
          ProjectId: 944,
          Project: null,
          ReporterId: 1415,
          TimeSheets: [
            {
              LoggedTime: 4,
              Date: null,
              TicketId: 4427,
              Comment: 'Comment to the ticket',
              Id: 10285
            },
            {
              LoggedTime: 6,
              Date: null,
              TicketId: 4427,
              Comment: 'Comment to the ticket',
              Id: 10286
            }
          ],
          Id: 4427
        },
        {
          Name: 'AP-0003',
          Description: 'Fix css styling',
          Estimate: 4,
          StartDate: null,
          EndDate: null,
          StatusId: 1,
          Status: null,
          ResponsibleId: 1415,
          TypeId: 1,
          TicketType: null,
          ProjectId: 944,
          Project: null,
          ReporterId: 1415,
          TimeSheets: [
            {
              LoggedTime: 4,
              Date: null,
              TicketId: 4434,
              Comment: 'Comment to the ticket',
              Id: 10299
            },
            {
              LoggedTime: 6,
              Date: null,
              TicketId: 4434,
              Comment: 'Comment to the ticket',
              Id: 10300
            }
          ],
          Id: 4434
        }
      ],
      Id: 944
    },
    {
      Name: 'Artnet',
      Description: 'Artnet is the leading resource for the international art market.',
      CustomerName: 'Artnet',
      StartDate: null,
      EndDate: null,
      ImageUrl: 'project.png',
      Tickets: [
        {
          Name: 'AP-0003',
          Description: 'Fix css styling',
          Estimate: 4,
          StartDate: null,
          EndDate: null,
          StatusId: 1,
          Status: null,
          ResponsibleId: 1415,
          TypeId: 1,
          TicketType: null,
          ProjectId: 945,
          Project: null,
          ReporterId: 1415,
          TimeSheets: [
            {
              LoggedTime: 4,
              Date: null,
              TicketId: 4428,
              Comment: null,
              Id: 10287
            },
            {
              LoggedTime: 6,
              Date: null,
              TicketId: 4428,
              Comment: 'Comment to the ticket',
              Id: 10288
            }
          ],
          Id: 4428
        },
        {
          Name: 'AP-0001',
          Description: 'Fix bug on front end',
          Estimate: 3,
          StartDate: null,
          EndDate: null,
          StatusId: 1,
          Status: null,
          ResponsibleId: 1415,
          TypeId: 1,
          TicketType: null,
          ProjectId: 945,
          Project: null,
          ReporterId: 1415,
          TimeSheets: [
            {
              LoggedTime: 4,
              Date: null,
              TicketId: 4432,
              Comment: 'Comment to the ticket',
              Id: 10295
            },
            {
              LoggedTime: 6,
              Date: null,
              TicketId: 4432,
              Comment: 'Comment to the ticket',
              Id: 10296
            }
          ],
          Id: 4432
        },
        {
          Name: 'AP-0002',
          Description: 'Fix bug on back end',
          Estimate: 4,
          StartDate: null,
          EndDate: null,
          StatusId: 1,
          Status: null,
          ResponsibleId: 1415,
          TypeId: 1,
          TicketType: null,
          ProjectId: 945,
          Project: null,
          ReporterId: 1415,
          TimeSheets: [
            {
              LoggedTime: 4,
              Date: null,
              TicketId: 4433,
              Comment: 'Comment to the ticket',
              Id: 10297
            },
            {
              LoggedTime: 6,
              Date: null,
              TicketId: 4433,
              Comment: 'Comment to the ticket',
              Id: 10298
            }
          ],
          Id: 4433
        }
      ],
      Id: 945
    }
  ],
  Roles: [],
  FullName: 'David Beckham',
  Id: 1415
}




