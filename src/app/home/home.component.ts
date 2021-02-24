import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getRoleDetails } from '../shared/auth/core/actions/auth.actions';
import { RoleDetails } from '../shared/auth/core/auth.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _store: Store) {
    let input: RoleDetails = {
      role: "admin",
      designation: "Software Engineer",
    }
    this._store.dispatch(getRoleDetails())
  }

  ngOnInit(): void {
  }

}
