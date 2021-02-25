import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderType } from '../../app.types';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loaderSubject = new Subject<LoaderType>();
  loaderState = this.loaderSubject.asObservable();
  constructor() { }

  show(){
    this.loaderSubject.next(<LoaderType>{show: true});
  }
  hide(){
    this.loaderSubject.next(<LoaderType>{show: false});
  }
}
