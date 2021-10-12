import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit, OnChanges, OnDestroy {

  @Input() rating: number = 0;
  ratingsquare: number = 0;

  constructor() {
    console.log('sono nel costruttore di son');
   }
  ngOnDestroy(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.ratingsquare = this.rating * this.rating;
  }
  ngOnInit(): void {
    console.log('sono nell oninit di son');
  }
}
