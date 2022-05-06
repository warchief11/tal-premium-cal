import { TestBed } from '@angular/core/testing';

import { PremiumCalculatorService } from './premium-calculator.service';

describe('PremiumCalculatorService', () => {
  let service: PremiumCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremiumCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate death Premium correctly', () => {
    let premium = service.calculate(100000, "Author", 48);
    expect(premium).toBe(500);
    premium = service.calculate(1000,"Doctor", 48);
    expect(premium).toBe(4);
    premium = service.calculate(1000, "Cleaner", 48);
    expect(premium).toBe(6);
    premium = service.calculate(1000, "Farmer", 50);
    expect(premium).toBe(7.29);
  });

  it('should return error on invalid occupation', () => {
    try{
      let premium = service.calculate(100000, "randomoccupation", 48);
    }catch(error){
      expect(error.message).toBe("invalid occupation");
    }
  });
});
