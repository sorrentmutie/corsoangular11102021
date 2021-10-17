import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from '../../theory/models/customer';
import { MySubjectService } from '../../theory/services/my-subject.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  titolo: string = "";
  sottoTitolo: string = "Giorno 1 - componenti ";
  link = "https://www.beko.com/content/dam/italy-it-aem/italy-it-aemProductCatalog/product-images/7298243106-RCNE560E41ZXN/7298243106-LO3-20200729-133129.png";
  subscription: Subscription | undefined = undefined;
  data: Customer[] = [];

  constructor(private service: MySubjectService) {
    this.subscription = this.service.subjectObservable$?.subscribe(
      (nuovoCustomer: Customer) => {
        this.data.push(nuovoCustomer);
      }
    );
    this.service.start();
  }

  stopCustomers(): void {
    this.service.stop();
  }


}
