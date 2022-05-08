import { ValidatorFn, AbstractControl } from "@angular/forms";

export class CustomValidators {

  static numberRange(min: number): ValidatorFn {
      return (c: AbstractControl): { [key: string]: boolean } | null => {
          if (isNaN(c.value) || c.value < min) {
              return { 'range': true };
          }
          return null;
      };
  }
}
