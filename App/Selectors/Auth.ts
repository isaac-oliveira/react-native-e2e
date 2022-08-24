import {GlobalState} from '../Redux';

export const AuthSelectors = {
  isFetching: (state: GlobalState) => state.auth.ui.fetching,
  hasError: (state: GlobalState) => state.auth.ui.error,
  isLogged: (state: GlobalState) => state.auth.entities.isLogged,
  getName: (state: GlobalState) => state.auth.entities.name,
};
