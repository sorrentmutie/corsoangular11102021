import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  titolo: string = "";
  sottoTitolo: string = "Giorno 1 - componenti ";
  link = "https://www.beko.com/content/dam/italy-it-aem/italy-it-aemProductCatalog/product-images/7298243106-RCNE560E41ZXN/7298243106-LO3-20200729-133129.png";

  constructor() {
    // this.creaTitolo();
  }

  creaTitolo() : string {
    return "Corso Angular";
  }

}
