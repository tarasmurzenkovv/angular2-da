import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {TaskComponent} from './task/task.component';
import {TaskService} from './service/task/task.service';
import {PersonService} from "./service/person/person.service";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
