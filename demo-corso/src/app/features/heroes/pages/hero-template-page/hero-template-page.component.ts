import { Component } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-template-page',
  templateUrl: './hero-template-page.component.html',
  styleUrls: ['./hero-template-page.component.css']
})
export class HeroTemplatePageComponent  {

  powers = ['Invisibilità','Magia','Forza'];
  hero: Hero = new Hero(1, "Dr.Salvatore", "Magia", "Salvatore Sorrentino");
  constructor() { }

  nuovoEroe(): void {
    this.hero = new Hero(2,"","","");
  }

  submitForm(): void
 {
   alert('form submitted');
   
 }

}
