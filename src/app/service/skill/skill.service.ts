import {Injectable} from '@angular/core';
import {Skill} from '../../model/skill';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SkillService {

  constructor(private http: Http) {
  }

  getSkills(employeeId: number): Observable<Skill[]> {
    const auth = new Headers();
    auth.append('API_KEY', 'O%2fYoVj5ASOkdhSGG%2bQWJImuKcjoAxZeuzy%2bJmjSiaIU%3d');
    auth.append('Accept', 'application/json');
    return this.http.get('http://aac-vm.universe.dart.spb:8080/api/skills/' + employeeId, {
      headers: auth
    })
      .map(response => {
        const skills: Skill[] = response.json();
        console.log(skills);
        return skills;
      }).catch(this.handleError);
  }

  private handleError(error: Response | any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
