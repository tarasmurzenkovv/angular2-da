import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavBarComponent} from './component/nav-bar/nav-bar.component';
import {TaskService} from './service/task/task.service';

import {TaskEditComponent} from './component/task/task-edit/task-edit.component';
import {EmployeeService} from './service/employee/employee.service';
import {ProjectService} from './service/project/project.service';
import {TaskDisplayComponent} from './component/task/task-display/task-display.component';
import {appRoutes} from './routes';
import {RouterModule} from '@angular/router';
import {SelectOptionDirective} from './directive/select-option.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmployeeDisplayComponent} from './component/employee/employee-display/employee-display.component';
import {HttpModule, JsonpModule} from '@angular/http';
import {SkillService} from './service/skill/skill.service';
import { ProjectDisplayComponent } from './component/employee/project-display/project-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskEditComponent,
    TaskDisplayComponent,
    NavBarComponent,
    TaskEditComponent,
    SelectOptionDirective,
    EmployeeDisplayComponent,
    ProjectDisplayComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule, HttpModule, JsonpModule
  ],
  providers: [TaskService, EmployeeService, ProjectService, SkillService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
