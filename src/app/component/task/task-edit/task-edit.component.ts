import {Component, OnInit} from '@angular/core';
import {Task, Type} from '../../../model/task';
import {TaskService} from '../../../service/task/task.service';
import {Router} from '@angular/router';
import {TaskUri} from '../../../uri/TaskUri';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html'
})
export class TaskEditComponent implements OnInit {
  task: Task;
  types: Type[];

  constructor(private taskService: TaskService, private router: Router) {
  }

  ngOnInit() {
    this.task = this.taskService.getTasks()[0];
    this.types = this.taskService.getTaskTypes();
    const first = this.types[0];
    this.types[0] = this.types[this.types.indexOf(this.task.type)];
    this.types[this.types.indexOf(this.task.type)] = first;
    console.log(this.task)
  }

  update(task: Task) {
    this.taskService.update(task);
  }

  cancel() {
    this.router.navigate([TaskUri.VIEW_TASK]);
  }
}
