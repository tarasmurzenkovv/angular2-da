import {Routes} from '@angular/router';
import {TaskEditComponent} from './component/task/task-edit/task-edit.component';
import {TaskDisplayComponent} from './component/task/task-display/task-display.component';
import {TaskUri} from './uri/TaskUri';

export const appRoutes: Routes = [
  {path: TaskUri.VIEW_TASK, component: TaskDisplayComponent},
  {path: TaskUri.EDIT_TASK, component: TaskEditComponent}
];
