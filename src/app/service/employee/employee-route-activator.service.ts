import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {EmployeeService} from './employee.service';

@Injectable()
export class EmployeeRouteActivatorService implements CanActivate {

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const employeeId = Number.parseInt(route.params['id']);
    const employeeExists = !!this.employeeService.getEmployeeForIdDummy(employeeId);
    if (!employeeExists) {
      this.router.navigate(['/404']);
    }
    return employeeExists;
  }
}
