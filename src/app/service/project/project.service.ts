import {Injectable} from '@angular/core';
import {Project} from '../../model/task';

@Injectable()
export class ProjectService {

  constructor() {
  }

  getProject(): Project {
    return new Project('OpenQ');
  }
}
