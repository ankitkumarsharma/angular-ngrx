import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getTodoList } from '../shared/auth/core/actions/auth.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  unsubscriber = new Subject();
  constructor(private _store: Store<any>) {
    this._store.dispatch(getTodoList());
  }

  ngOnInit(): void {
    this._store.select("authData", "loginDetails", "todoList")
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((data) => {
        console.log(data);
      })
  }
  ngOnDestroy() {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

}
