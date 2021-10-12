import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnDestroy {

  offeredProducts: Product[] = [];
  selectedProduct: Product | undefined = undefined;
  subscription: Subscription | undefined = undefined;
  notAvailableProducts: Product[] = [];
  constructor(private service: ProductService) {
    this.subscription =  this.service.getProductsByApi().subscribe(
      (prodotti: Product[]) => {
          this.offeredProducts = prodotti;
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  edit(selectedProduct: Product) {
    this.selectedProduct = selectedProduct;
  }

  showTable(message:string){
    console.log(message);
    this.selectedProduct = undefined;
  }

  getNotAvailableProducts(): Product[] {
    return [
    ]
  }

  // getProducts(): Product[] {
  //   return [
  //     {
  //         name: "Prodotto 1",
  //         price: 50,
  //         category: "Elettrodomestici",
  //         availability: true,
  //         image: "https://www.beko.com/content/dam/italy-it-aem/italy-it-aemProductCatalog/product-images/7298243106-RCNE560E41ZXN/7298243106-LO3-20200729-133129.png",
  //         date: new Date()
  //       },
  //       {
  //         name: "Prodotto 2",
  //         price: 256,
  //         category: "Elettrodomestici",
  //         availability: true,
  //         image: "https://www.beko.com/content/dam/italy-it-aem/italy-it-aemProductCatalog/product-images/7298243106-RCNE560E41ZXN/7298243106-LO3-20200729-133129.png",
  //         date: new Date()
  //       },
  //       {
  //         name: "Prodotto 3",
  //         price: 170,
  //         category: "Elettrodomestici",
  //         availability: true,
  //         image: "https://www.beko.com/content/dam/italy-it-aem/italy-it-aemProductCatalog/product-images/7298243106-RCNE560E41ZXN/7298243106-LO3-20200729-133129.png",
  //         date: new Date()
  //       }
  //   ]
  // }



}
