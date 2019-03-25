
import { Action, State } from '@ngrx/store';

import { EUserActions, UserActions } from '../actions/user.actions';
import { IUserState, initialUserState } from '../state/user.state';


export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.GetUsers: {
      return {
        ...state,
        users: action.payload
              };
    }
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload
      };
    }
    case EUserActions.SignInUser: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    case EUserActions.SignInUserSuccess {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    default:
      return state;
  }
};
