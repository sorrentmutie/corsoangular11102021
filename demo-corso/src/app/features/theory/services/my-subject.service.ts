import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { threadId } from 'worker_threads';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class MySubjectService {

  private subject$: Subject<Customer> | undefined = undefined;
  subjectObservable$: Observable<Customer> | undefined = undefined;
  private customers: Customer[] = [];
  private myInterval: any;

  constructor() {
    this.subject$ = new Subject();
    this.subjectObservable$ = this.subject$.asObservable();
  }

  stop(): void {
    clearInterval(this.myInterval);
  }

  start(): void {
    this.myInterval = setInterval( () => {
      const lunghezza = this.customers.length + 1;
      const nuovoCustomer = {name: "nome" + lunghezza, city: "citta" + lunghezza};
      this.customers.push(nuovoCustomer);
      this.subject$?.next(nuovoCustomer);
    }, 2000);
  }

}
