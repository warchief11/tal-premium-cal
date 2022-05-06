import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PremiumCalculatorService } from '../services/premium-calculator.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  form!: FormGroup;

  occupations = [
    'Cleaner',
    'Doctor',
    'Author',
    'Farmer',
    'Mechanic',
    'Florist',
  ];

  constructor(private fb: FormBuilder, private premiumCalculatorService: PremiumCalculatorService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      occupation: ['', Validators.required],
      deathSumInsured: ['', Validators.required],
    });
  }

  calculate(){
    console.log(this.form.value)
  }

}
