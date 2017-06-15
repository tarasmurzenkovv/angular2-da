import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EmployeeDisplayComponent} from './employee-display.component';
import {EmployeeService} from '../../../service/employee/employee.service';
import {HttpModule} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {ProjectDisplayComponent} from '../project-display/project-display.component';
import {SkillService} from '../../../service/skill/skill.service';

describe('EmployeeDisplayComponent', () => {
  let component: EmployeeDisplayComponent;
  let fixture: ComponentFixture<EmployeeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDisplayComponent, ProjectDisplayComponent],
      providers: [EmployeeService, SkillService],
      imports: [HttpModule, RouterTestingModule.withRoutes([
        {path: 'employees/:id', component: EmployeeDisplayComponent}
      ])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created dummy 666', () => {
    expect(component).toBeTruthy();
  });

  it('should display the employee full name', () => {
    const stubbedUserService = fixture.debugElement.injector.get(EmployeeService);
  })
});
