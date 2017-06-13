import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {EstimateValidatorService} from '../../service/validator/estimate-validator.service';

@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.css']
})
export class ControlMessagesComponent {
  errorMessage: string;
  @Input() control: FormControl;

  constructor() {
  }

  getErrorMessage(): string {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return EstimateValidatorService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }

}
