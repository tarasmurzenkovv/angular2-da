import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TaskService} from '../service/task/task.service';
import {Task} from '../model/task';
import {PersonService} from '../service/person/person.service';
import {Person} from '../model/person';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit, OnChanges {
  task: Task;
  reportingPerson: Person;
  responsiblePerson: Person;
  selectedType: string;
  types: string[];
  editMode = false;
  @Input()
  newDescription: string;

  constructor(private taskService: TaskService, private personService: PersonService) {
  }

  ngOnInit() {
    this.task = this.taskService.getTasks()[0];
    this.reportingPerson = this.personService.getReportingPerson();
    this.responsiblePerson = this.personService.getResponsiblePerson();
    this.types = this.taskService.getTaskTypes();
    this.selectedType = this.types[4];
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['newDescription'].currentValue);
  }

  edit(taskDescription: string) {
    this.editMode = true;
    const first = this.types[0];
    const toSwapWith = this.types[this.types.indexOf(this.selectedType)];
    this.types[0] = toSwapWith;
    this.types[this.types.indexOf(this.selectedType)] = first;
    console.log(this.newDescription);
  }


  add() {

  }

  delete() {

  }

  save(taskDescription: string) {
    this.editMode = false;
    console.log(this.newDescription);
    this.task.description = this.newDescription;
  }

  onEdit(event: any) {
    console.log(event.target.value);
    this.newDescription = event.target.value;
  }
}
