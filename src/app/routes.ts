import {Routes} from '@angular/router';
import {TaskEditComponent} from './component/task/task-edit/task-edit.component';
import {TaskDisplayComponent} from './component/task/task-display/task-display.component';
import {TaskUri, UserUri} from './uri/Uri';
import {EmployeeDisplayComponent} from './component/employee/employee-display/employee-display.component';

export const appRoutes: Routes = [
  {path: TaskUri.VIEW_TASK, component: TaskDisplayComponent},
  {path: TaskUri.EDIT_TASK, component: TaskEditComponent},
  {path: UserUri.GET_USER_INFO, component: EmployeeDisplayComponent}
];
