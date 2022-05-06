import { Injectable } from '@angular/core';
import { OccupationRatings } from '../constants/occupation-ratings';
import { RatingFactors } from '../constants/rating-factors';

@Injectable({
  providedIn: 'root',
})
export class PremiumCalculatorService {
  constructor() {}

  calculate(deathCoverAmount: number, occupation: string, age: number) {
    const rating = OccupationRatings[occupation];
    if(!rating){
      throw new Error("invalid occupation");
    }
    const ratingFactor = RatingFactors[rating];

    if(!ratingFactor){
      throw new Error("invalid rating");
    }
    const premiumAmount = (deathCoverAmount * ratingFactor * age) / (1000 * 12);
    return Math.round(premiumAmount * 100)/ 100;
  }
}
