import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeTabService { 
  status$: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor() {
  }
  setStatus(num: any): any {
    this.status$.next(num)
  }
}
