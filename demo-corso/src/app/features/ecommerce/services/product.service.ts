import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { DiscountService } from './discount.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient,
              private discountService: DiscountService) {}

  getProductsAsObservable(): Observable<Product[]>{
    return of(this.getProducts());
  }

  getProductsByApi(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiUrl);
  }


  getProducts(): Product[] {
    return [
    ]
  }


}
