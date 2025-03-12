import { Injectable, signal, WritableSignal } from '@angular/core';
import { Car } from '../../../types/car.type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  list$ = new BehaviorSubject([
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  ]);

  add(){
    this.list$.next([...this.list$.value, { make: 'Toyota', model: 'Corolla', price: 29600, electric: false }]);
  }
}
