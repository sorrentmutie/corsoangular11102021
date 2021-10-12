import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MioValidatore } from '../../models/mio-validatore';
import { debounceTime, filter } from 'rxjs/operators'
import { TestObject } from 'protractor/built/driverProviders';
import { ProductService } from 'src/app/features/ecommerce/services/product.service';
@Component({
  selector: 'app-hero-reactive-template-page',
  templateUrl: './hero-reactive-template-page.component.html',
  styleUrls: ['./hero-reactive-template-page.component.css']
})
export class HeroReactiveTemplatePageComponent  {

  constructor(private fb: FormBuilder,
     private service: ProductService) {

      this.formReattivoEroe.get('nome')?.valueChanges.pipe(
        filter((testo:string) => testo.length > 3),
        debounceTime(1000)
      ).subscribe(  (testoFiltrato: string) => {
          this.service.getProductsByApi().subscribe(prodotti => {

          });
      });


  }

  formReattivoEroe = this.fb.group(
    {
      nome: ['', [Validators.required, Validators.minLength(4),
        MioValidatore]],
      potere: [''],
      alterEgo: ['']
    }
  )

  submit(): void {
    console.log(this.formReattivoEroe);
    const nome = this.formReattivoEroe.get("nome")?.value;
    alert(nome);
  }

  get myNome(): any {
    return  this.formReattivoEroe.get("nome");
  }

}
