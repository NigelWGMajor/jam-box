import { Component, OnInit, NgModule } from '@angular/core';
/* ngrx */
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IUserState } from '../store/state/user.state';


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
   // debugger;
    // todo: grab the password and user name and send them to the LogOnUser effect.


  }
}
