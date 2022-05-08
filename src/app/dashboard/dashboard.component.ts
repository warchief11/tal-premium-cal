import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OccupationRatings } from '../constants/occupation-ratings';
import { Occupation } from '../models/occupation';
import { PremiumCalculatorService } from '../services/premium-calculator.service';
import { CustomValidators } from '../utils/custom-validators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  form!: FormGroup;
  monthlyPremium!: number;
  occupations = OccupationRatings;
  submitted = false;
  maxDate = {
    year: new Date().getFullYear() - 2,
    month: 12,
    day: 31,
  }
  constructor(private fb: FormBuilder, private premiumCalculatorService: PremiumCalculatorService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, CustomValidators.numberRange(1)]],
      dateOfBirth: [null, Validators.required],
      occupation: ['', Validators.required],
      deathSumInsured: ['', Validators.required],
    });

    this.form.get('dateOfBirth')?.valueChanges.subscribe(dob => {
      this.form.patchValue({'age': this.getAge(dob)});
    })
  }

  calculate(){
    this.submitted = true;
    if(this.form.valid){
      this.monthlyPremium = this.premiumCalculatorService.calculate(this.form.value.deathSumInsured, this.form.value.occupation, this.form.value.age);
    }
    this.cdRef.markForCheck();
  }

  getAge(birthDate : {day : number, month: number, year: number}) {
    var today = new Date();
    var age = today.getFullYear() - birthDate.year;
    var m = today.getMonth() - birthDate.month;
    if (m < 0 || (m === 0 && today.getDate() < birthDate.day)) {
        age--;
    }
    return age;
}

}
