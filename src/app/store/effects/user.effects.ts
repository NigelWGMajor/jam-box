import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
//import { EMPTY } from 'rxjs';
import { map, mergeMap, switchMap, catchError } from 'rxjs/operators';
import * as fromServices from '../../storage.service';
import { UserActions } from '../actions/user.actions';
import { EMPTY } from 'rxjs';


// //! reference the user actions and replace the text-types with enum types.
// //! chain the service results to reducer actions.

@Injectable()
export class UserEffects {
  @Effect()
  loadUsers$ = this.actions$
    .pipe(
      ofType('[User] Load Users'),
      mergeMap(() => this.userService.getAllUsers()
        .pipe(
          map(users => ({ type: '[User] Load Users Success', payload: users })),
          catchError(() => EMPTY)
        ))
    );

  @Effect()
  logonUser$ = this.actions$
    .pipe(
      ofType('[User] Log On'),
      mergeMap((user) => this.userService.logOn(user)
        .pipe(
          map(() => ({ type: '[User] Logon User Success', payload: user })),
          catchError(() => EMPTY)
        ))
    );

  constructor(
    private actions$: Actions,
    private userService: fromServices.StorageService
  ) { }


}
