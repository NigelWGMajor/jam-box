
import { Action, State } from '@ngrx/store';

import { UserActionTypes, UserActions } from '../actions/user.actions';
import { IUserState, initialUserState } from '../state/user.state';


export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case UserActionTypes.GetUsers: {
      return {
        ...state,
        users: action.payload
              };
    }
    case UserActionTypes.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload
      };
    }
    case UserActionTypes.SignInUser: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    case UserActionTypes.SignInUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    default:
      return state;
  }
};
