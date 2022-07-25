import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Person, PERSONS } from './persons';

@Injectable({
  providedIn: 'root'
})
export class TableRowDragService {
  constructor() {}

  getUsers(): Observable<Person[]> {
    return of(PERSONS).pipe(delay(400));
  }
}
