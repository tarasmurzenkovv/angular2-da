import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TaskService} from '../../../service/task/task.service';
import {Project, Task} from '../../../model/task';
import {PersonService} from '../../../service/person/person.service';
import {Person} from '../../../model/person';
import {ProjectService} from '../../../service/project/project.service';
import {Router} from '@angular/router';
import {TaskUri} from '../../../uri/TaskUri';

@Component({
  selector: 'app-task-display',
  templateUrl: './task-display.component.html'
})
export class TaskDisplayComponent implements OnInit, OnChanges {
  task: Task;
  reportingPerson: Person;
  responsiblePerson: Person;
  project: Project;
  selectedType: string;
  types: string[];
  editMode = false;
  @Input()
  newDescription: string;

  constructor(private taskService: TaskService,
              private personService: PersonService,
              private projectService: ProjectService,
              private router: Router) {
  }

  ngOnInit() {
    this.task = this.taskService.getTasks()[0];
    this.reportingPerson = this.personService.getReportingPerson();
    this.responsiblePerson = this.personService.getResponsiblePerson();
    this.types = this.taskService.getAvailableTaskTypes();
    this.selectedType = this.types[4];
    this.project = this.projectService.getProject();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['newDescription'].currentValue);
  }

  edit(task: Task) {
    this.taskService.setEditableTask(this.task);
    this.personService.setReportingPerson(this.reportingPerson);
    this.router.navigate([TaskUri.EDIT_TASK]);
  }


  create(task: Task) {

  }

  delete(task: Task) {

  }

  save(task: Task) {
    this.editMode = false;
    console.log(this.newDescription);
    this.task.description = this.newDescription;
  }

  onEdit(event: any) {
    console.log(event.target.value);
    this.newDescription = event.target.value;
  }
}
