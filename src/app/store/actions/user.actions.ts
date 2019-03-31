import { Action } from '@ngrx/store';

import { IUser } from 'src/app/models/user.interface';


export enum UserActionTypes {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  SetGuestUser = '[User] Set Guest',
  SignInUser = '[User] Sign In',
  SignInUserSuccess = '[User] Sign In Success'
}
export class GetUsers implements Action {
  readonly type = UserActionTypes.GetUsers;
  constructor(public payload: IUser[]) {}
}
export class GetUsersSuccess implements Action {
  readonly type = UserActionTypes.GetUsersSuccess;
  constructor(public payload: IUser[]) {}
}
export class SetGuestUser implements Action {
  readonly type = UserActionTypes.SetGuestUser;
  constructor(public payload: IUser) {}
}
export class SignInUser implements Action {
  readonly type = UserActionTypes.SignInUser;
  constructor(public payload: IUser) {}
}
export class SignInUserSuccess implements Action {
  readonly type = UserActionTypes.SignInUserSuccess;
  constructor(public payload: IUser) {}
}
export type UserActions =
| GetUsers
| GetUsersSuccess
| SetGuestUser
| SignInUser
| SignInUserSuccess;
