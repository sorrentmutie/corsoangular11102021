import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Customer } from '../../theory/models/customer';
import { MySubjectService } from '../../theory/services/my-subject.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {
   text: string = "Il mio footer";
  constructor(private service: MySubjectService) {
    this.myValue = this.myControl.valueChanges;
    this.myControl.valueChanges.subscribe(
      (testo: string) => {
          if(testo.length > 10) {
            this.myControl.setValue ('');
          }
      });
    this.service.subjectObservable$?.subscribe( (customer: Customer) => {
      this.text = customer.name;
    });
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
