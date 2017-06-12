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

@NgModule({
  declarations: [
    AppComponent,
    TaskEditComponent,
    TaskDisplayComponent,
    NavBarComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [TaskService, PersonService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
