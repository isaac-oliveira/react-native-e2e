import {GlobalState} from '../Redux';

export const HomeSelectors = {
  isFetching: (state: GlobalState) => state.home.ui.fetching,
  getError: (state: GlobalState) => state.home.ui.error,
  getData: (state: GlobalState) => state.home.entities.data,
};
