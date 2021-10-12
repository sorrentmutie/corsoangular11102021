import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  rating: number = 3;


  constructor() {
    console.log('sono nel costruttore di father');
  }

  ngOnInit(): void {
    console.log('sono nell onginit di father')
  }

  cambia(): void {
    this.rating = 5;
  }

}
