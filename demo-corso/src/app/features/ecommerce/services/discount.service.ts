import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor() { }

  getDiscountPercentage(date: Date): number {
    return 0.05;
  }
}
