
import { Action, State } from '@ngrx/store';

import { UserActionTypes, UserActions } from '../actions/user.actions';
import { IUserState, initialUserState } from '../state/user.state';


export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case UserActionTypes.LogOnUser: { // //!  move to effect
      return {
        // this will actually be altered and moved to an effect to interact with the database...
        users: state.users, selectedUser: action.payload
      };
    }
    case UserActionTypes.LogOnUserSuccess: {
      return {
        users: state.users, selectedUser: action.payload
      };
    }
    case UserActionTypes.LogOnUserFailure: {
      // somehow should return a failure message - this should be sent from the effect in a different action.
      return state;
    }
    case UserActionTypes.LoadUsersSuccess: {
      return {
        users: action.payload, selectedUser: action.payload[0]};
    }
    default:
      return state;
  }
};
