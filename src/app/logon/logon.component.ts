import { Component, OnInit, NgModule } from '@angular/core';
/* ngrx */
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IUserState } from '../store/state/user.state';
import { store } from '@angular/core/src/render3';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { UserActionTypes, LogOnUser } from '../store/actions/user.actions';


@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss']
})

export class LogonComponent implements OnInit {
  users$ = this.store.select(state => state.users);
  userName: string;
  password: string;

  constructor(private store: Store<IUserState>) {
    this.users$ = store.pipe(select('users'));
  }

  ngOnInit() {
    // todo: initialize from the UserState!
    this.store.dispatch({ type: '[User] Get All Users'});
    this.userName = 'Nicholas';
    this.password = '***';
  }

  tryLogOn(event) {
    // todo: grab the password and user name and send them to the LogOnUser effect.
    //debugger;
    this.store.dispatch(new LogOnUser({ name: this.userName, password: this.password, id: 0 }));
   }
}
