import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {
    const myObservable = of(1,2,3,4,5,6,7,8,9,10);

    const myObserver = {
      next: (x: number) => console.log('Ho un nuovo valore:'  + x),
      error: (err: Error)  => console.log('Errore: ' + err),
      complete: () => console.log('Emissione finita')
    };

  // myObservable.subscribe(myObserver);

   }

  ngOnInit(): void {
  }

}
