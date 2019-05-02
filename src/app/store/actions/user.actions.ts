import { Action } from '@ngrx/store';
// import { IUserState } from '../state/user.state';
import { IUser } from '../../models/user.interface';

export enum UserActionTypes {
  LogOnUser = '[User] Log On',
  LogOnUserSuccess = '[User] Log On Success',
  LogOnUserFailure = '[User] Log On Failure',
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success'
}
export class LogOnUser implements Action {
  readonly type = UserActionTypes.LogOnUser;
  constructor(public payload: IUser) {}
}
export class LogOnUserSuccess implements Action {
  readonly type = UserActionTypes.LogOnUserSuccess;
  constructor(public payload: IUser) {}
}
export class LogOnUserFailure implements Action {
  readonly type = UserActionTypes.LogOnUserFailure;
  constructor(public payload: IUser) {}
}
export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
  constructor(public payload: IUser) {}
}
export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;
  constructor(public payload: IUser[]) {}
}
export type UserActions =
| LogOnUser
| LogOnUserSuccess
| LogOnUserFailure
| LoadUsers
| LoadUsersSuccess;
