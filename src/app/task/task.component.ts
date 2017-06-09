import {Component, OnInit} from '@angular/core';
import {TaskService} from '../service/task/task.service';
import {Task} from '../model/task';
import {PersonService} from '../service/person/person.service';
import {Person} from '../model/person';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
  task: Task;
  reportingPerson: Person;
  responsiblePerson: Person;

  constructor(private taskService: TaskService, private personService: PersonService) {
  }

  ngOnInit() {
    this.task = this.taskService.getTasks()[0];
    this.reportingPerson = this.personService.getReportingPerson();
    this.responsiblePerson= this.personService.getResponsiblePerson();
  }
}
