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
    let premium = service.calculate(100000, 1.25, 48);
    expect(premium).toBe(500);
    premium = service.calculate(1000, 1.25, 48);
    expect(premium).toBe(5);
    premium = service.calculate(1000, 1.5, 48);
    expect(premium).toBe(6);
    premium = service.calculate(1000, 1.5, 50);
    expect(premium).toBe(6.25);
  });
});
