import {AbstractControl} from '@angular/forms';

export function ValidateInputText(control: AbstractControl) {
  if (control.value === null || control.value === '') {
    return {validDescriptionRequired: true};
  }
  return null;
}

export function ValidateInputNumber(control: AbstractControl) {
  if (control.value === null || Number.parseInt(control.value) < 0) {
    return {validEstimateRequired: true};
  }
  return null;
}
