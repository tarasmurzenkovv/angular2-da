import {Injectable} from '@angular/core';
import {Status, Task, TimeRange, Type} from '../../model/task';

@Injectable()
export class TaskService {

  constructor() {
  }

  public getTasks(): Task[] {
    const timeRange = new TimeRange(new Date('01/02/2014'), new Date('01/02/2015'));
    const taskDescription = 'fix bug on front end';
    const taskName = 'Task AP-0004';
    const task = new Task(taskName, Status.GATHERING_REQUIREMENTS, Type.TECHNICAL_TASK, 3, timeRange, taskDescription);

    return [task];
  }

  public getTaskTypes(): string[] {
    return [Type.TECHNICAL_TASK, Type.BUG, Type.FEATURE, Type.IMPROVEMENT, Type.TASK];
  }
}
