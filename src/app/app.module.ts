import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavBarComponent} from './component/nav-bar/nav-bar.component';
import {TaskService} from './service/task/task.service';

import {TaskEditComponent} from './component/task/task-edit/task-edit.component';
import {PersonService} from './service/person/person.service';
import {ProjectService} from './service/project/project.service';
import {TaskDisplayComponent} from './component/task/task-display/task-display.component';
import {appRoutes} from './routes';
import {RouterModule} from '@angular/router';
import { SelectOptionDirective } from './directive/select-option.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskEditComponent,
    TaskDisplayComponent,
    NavBarComponent,
    TaskEditComponent,
    SelectOptionDirective
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule
  ],
  providers: [TaskService, PersonService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
