import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {
   text: string = "Il mio footer";
  constructor() {
    this.myValue = this.myControl.valueChanges;
    this.myControl.valueChanges.subscribe(
      (testo: string) => {
          if(testo.length > 10) {
            this.myControl.setValue ('');
          }
      })
  }

  myFormGroup = new FormGroup({
    firstName: new FormControl('', {}),
    lastName: new FormControl('', {}),
    email: new FormControl('', {})
  });

  myControl = new FormControl("valore iniziale");
  myValue: Observable<string> | null = null;

  mySubmit(): void {
    console.log(this.myFormGroup);
  }

}
