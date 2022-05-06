import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremiumCalculatorService {

  constructor() { }

  calculate(deathCoverAmount :number, ratingFactor: number, age :number){
    return (deathCoverAmount * ratingFactor * age )/(1000*12);
  }
}
