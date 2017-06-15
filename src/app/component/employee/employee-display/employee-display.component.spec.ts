import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EmployeeDisplayComponent} from './employee-display.component';
import {EmployeeService} from '../../../service/employee/employee.service';
import {HttpModule} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {ProjectDisplayComponent} from '../project-display/project-display.component';
import {SkillService} from '../../../service/skill/skill.service';
import {fakeEmployee} from '../../../../assets/test/employee';
import {By} from '@angular/platform-browser';

describe('EmployeeDisplayComponent', () => {
  let component: EmployeeDisplayComponent;
  let fixture: ComponentFixture<EmployeeDisplayComponent>;
  let employeeInfo: any;
  let employeeSkillTable: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDisplayComponent, ProjectDisplayComponent],
      providers: [EmployeeService, SkillService],
      imports: [HttpModule, RouterTestingModule.withRoutes([
        {path: 'employees/1', component: EmployeeDisplayComponent}
      ])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDisplayComponent);
    const employeeService = fixture.debugElement.injector.get(EmployeeService);
    spyOn(employeeService, 'getEmployeeForId').and.returnValue({
      subscribe: () => fakeEmployee
    });
    component = fixture.componentInstance;
    component.employee = fakeEmployee;
    employeeInfo = fixture.debugElement.queryAll(By.css('.col-md-3'))[1].queryAll((By.css('.row')));
    employeeSkillTable = fixture.debugElement.queryAll(By.css('.col-md-3'))[2].query((By.css('table')));
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display the employee full name', () => {
    const actualElementWithEmployeeName = fixture.debugElement.query(By.css('.text-center.h2'));
    expect(actualElementWithEmployeeName.nativeElement.textContent).toEqual(fakeEmployee.FullName);
  });

  it('should display the employee birthday', () => {
    expect(employeeInfo[0].nativeElement.textContent).toContain('Birthday: ');
  });

  it('should display the employee email', () => {
    expect(employeeInfo[1].nativeElement.textContent).toContain('Email:  ' + fakeEmployee.Email);
  });

  it('should display the employee location name', () => {
    expect(employeeInfo[2].nativeElement.textContent).toContain('Location:  ' + fakeEmployee.Location.Name);
  });

  it('should display the employee location address', () => {
    expect(employeeInfo[3].nativeElement.textContent).toContain('Address:  ' + fakeEmployee.Address);
  });

  it('should display the employee location skype', () => {
    expect(employeeInfo[4].nativeElement.textContent).toContain('Skype:  ' + fakeEmployee.Skype);
  });

  it('should display the employee location phone', () => {
    expect(employeeInfo[5].nativeElement.textContent).toContain('Phone:  ' + fakeEmployee.Phone);
  });

  it('should display the employee skills table', () => {
    expect(employeeSkillTable.nativeElement).toBeTruthy();
  });
});
