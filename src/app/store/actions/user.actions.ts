import { Action } from '@ngrx/store';

import { IUser } from 'src/app/models/user.interface';


export enum EUserActions {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  SignInUser = '[User] Sign In',
  SignInUserSuccess = '[User] Sign In Success'
}
export class LoadUsers implements Action {
  readonly type = EUserActions.GetUsers;
  constructor(public payload: IUser[]) {}
}
export class LoadUsersSuccess implements Action {
  readonly type = EUserActions.GetUsersSuccess;
  constructor(public payload: IUser[]) {}
}
export class SignInUser implements Action {
  readonly type = EUserActions.SignInUser;
  constructor(public payload: IUser) {}
}
export class SignInUserSuccess implements Action {
  readonly type = EUserActions.SignInUserSuccess;
  constructor(public payload: IUser) {}
}
export type UserActions =
| LoadUsers
| LoadUsersSuccess
| SignInUser
| SignInUserSuccess;
