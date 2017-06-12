import {Component, OnInit, setTestabilityGetter} from '@angular/core';
import {Task, TimeRange} from '../../../model/task';
import {TaskService} from '../../../service/task/task.service';
import {Router} from '@angular/router';
import {TaskUri} from '../../../uri/TaskUri';
import {Utils} from '../../../util/Utils';
import {Person} from '../../../model/person';
import {PersonService} from '../../../service/person/person.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  styleUrls: ['./task-edit.component.css'],
  templateUrl: './task-edit.component.html'
})
export class TaskEditComponent implements OnInit {
  task: Task;
  updatedTask: Task;
  types: string[];
  statuses: string[];
  reportingPerson: Person;
  responsiblePerson: Person;
  editableTaskForm: FormGroup;

  constructor(private taskService: TaskService,
              private personService: PersonService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.task = this.taskService.getTasks()[0];
    this.updatedTask = this.task;
    this.initDropDowns();
    this.getPersons();
    this.editableTaskForm = this.formBuilder.group(this.buildValidatorConfig());
    this.subscribeForFromChanges();
  }

  private initDropDowns() {
    this.types = Utils.setFirstInArray(this.taskService.getAvailableTaskTypes(), this.task.type);
    this.statuses = Utils.setFirstInArray(this.taskService.getAvailableStatuses(), this.task.status);
  }

  private getPersons() {
    this.reportingPerson = this.personService.reportingPerson;
    this.responsiblePerson = this.personService.responsiblePerson;
  }

  private subscribeForFromChanges() {
    this.editableTaskForm.valueChanges.subscribe(value => {
      this.updatedTask = new Task(
        this.task.taskName,
        value['statusFormControl'],
        value['taskTypeFormControl'],
        value['taskEstimateFormControl'],
        new TimeRange(value['startDateFormControl'], value['endDateFormControl']),
        value['taskDescriptionFormControl']
      );
      this.taskService.update(this.updatedTask);
      this.personService.reportingPerson = new Person(value['responsiblePersonFormControl'], value['taskDescriptionFormControl']);
    });
  }

  private buildValidatorConfig() {
    return {
      statusFormControl: [this.task.status, Validators.required],
      taskTypeFormControl: [this.task.type, Validators.required],
      taskEstimateFormControl: [this.task.estimate, Validators.required],
      taskDescriptionFormControl: [this.task.description, Validators.required],
      startDateFormControl: [this.task.range.start, Validators.required],
      endDateFormControl: [this.task.range.end, Validators.required],
      responsiblePersonFormControl: [this.responsiblePerson, Validators.required],
      reportingPersonFormControl: [this.reportingPerson, Validators.required]
    };
  }

  update() {
    console.log(this.updatedTask.type);
  }

  cancel() {
    this.router.navigate([TaskUri.VIEW_TASK]);
  }

  saveEditableTask(editableTaskFormValue) {
    console.log(editableTaskFormValue);
  }
}
