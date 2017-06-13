import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../../service/employee/employee.service';
import {ActivatedRoute} from '@angular/router';
import {Employee} from '../../../model/employee';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {SkillService} from '../../../service/skill/skill.service';
import {Skill} from '../../../model/skill';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  styleUrls: ['./employee-display.component.css']
})
export class EmployeeDisplayComponent implements OnInit {
  private employee: Employee;
  private skills: Skill[];

  constructor(private employeeService: EmployeeService, private skillService: SkillService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const employeeId = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeForId(employeeId).subscribe(employee => {
      this.employee = employee;
      console.log(this.employee)
    }, error => console.log(error));

    this.skillService.getSkills(employeeId).subscribe(skills => {
      this.skills = skills;
      console.log(this.skills);
    }, error => {
      console.log(error)
    });
  }

  editSkill(skill: Skill) {
    console.log(skill);
  }
}
