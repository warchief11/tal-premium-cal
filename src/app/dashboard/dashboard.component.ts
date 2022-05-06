import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OccupationRatings } from '../constants/occupation-ratings';
import { Occupation } from '../models/occupation';
import { PremiumCalculatorService } from '../services/premium-calculator.service';

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
  constructor(private fb: FormBuilder, private premiumCalculatorService: PremiumCalculatorService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      dateOfBirth: [null],
      occupation: ['', Validators.required],
      deathSumInsured: ['', Validators.required],
    });
  }

  calculate(){
    if(this.form.valid){
      this.monthlyPremium = this.premiumCalculatorService.calculate(this.form.value.deathSumInsured, this.form.value.occupation, this.form.value.age);
      this.cdRef.markForCheck();
    }
  }

}
