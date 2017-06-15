import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Task} from '../../../model/task';
import {Router} from '@angular/router';
import {TaskUri} from '../../../uri/Uri';

@Component({
  selector: 'app-task-display',
  templateUrl: './task-display.component.html'
})
export class TaskDisplayComponent implements OnInit, OnChanges {

  editMode = false;
  @Input()
  newDescription: string;

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['newDescription'].currentValue);
  }

  edit(task: Task) {
    this.router.navigate([TaskUri.EDIT_TASK]);
  }


  create(task: Task) {

  }

  delete(task: Task) {

  }

  save(task: Task) {

  }

  onEdit(event: any) {
    console.log(event.target.value);
    this.newDescription = event.target.value;
  }
}
