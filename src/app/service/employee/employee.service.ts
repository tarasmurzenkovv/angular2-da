import {Injectable} from '@angular/core';
import {Employee} from '../../model/employee';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
  private reportingPerson: Employee;
  private responsiblePerson: Employee;
  private idVsEmployeeId = new Map<number, Employee>();

  constructor(private http: Http) {
  }

  getReportingPerson(): Employee {
    return null;
  }

  getResponsiblePerson(): Employee {
    return null;
  }

  getEmployeeForIdDummy(employeeId: number): Employee {
    return this.idVsEmployeeId.get(employeeId);
  }

  getEmployeeForId(employeeId: number): Observable<Employee> {
    const auth = new Headers();
    auth.append('API_KEY', 'O%2fYoVj5ASOkdhSGG%2bQWJImuKcjoAxZeuzy%2bJmjSiaIU%3d');
    auth.append('Accept', 'application/json');
    return this.http.get('http://aac-vm.universe.dart.spb:8080/api/employees/' + employeeId, {
      headers: auth
    }).map(response => {
      const employee: Employee = response.json();
      console.log(employee);
      return employee;
    })
      .catch(this.handleError);
  }

  private handleError(error: Response | any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  setResponsiblePerson(responsiblePerson: Employee) {
    this.responsiblePerson = responsiblePerson;
  }

  setReportingPerson(assignablePerson: Employee) {
    this.reportingPerson = assignablePerson;
  }
}
