import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  // bookingCntSub$ = new Subject();
  bookingCntSub$ = new BehaviorSubject<number>(0)

  sendBookingcount(count:number){
    this.bookingCntSub$.next(count);

  }
}
