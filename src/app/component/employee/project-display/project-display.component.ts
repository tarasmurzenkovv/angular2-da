import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../model/project';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.css']
})
export class ProjectDisplayComponent implements OnInit {
  @Input() projects: Project[];

  constructor() {
  }

  ngOnInit() {
  }

}
