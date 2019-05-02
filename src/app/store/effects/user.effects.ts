import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { StorageService } from '../../storage.service';

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
      mergeMap((payload) => this.userService.logOn(payload))
    );

  constructor(
    private actions$: Actions,
    private userService: StorageService
  ) { }
}
