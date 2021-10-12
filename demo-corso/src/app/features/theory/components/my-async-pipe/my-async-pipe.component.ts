import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/features/ecommerce/models/product';
import { ProductService } from 'src/app/features/ecommerce/services/product.service';

@Component({
  selector: 'app-my-async-pipe',
  templateUrl: './my-async-pipe.component.html',
  styleUrls: ['./my-async-pipe.component.css']
})
export class MyAsyncPipeComponent  {
  constructor(public service: ProductService) {
  }
}
