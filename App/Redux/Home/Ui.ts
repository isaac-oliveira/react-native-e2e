import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface State {
  fetching: boolean;
  error: string | null;
}

const initialState: State = {
  fetching: false,
  error: null,
};

const uiSlice = createSlice({
  name: 'ui/home',
  initialState,
  reducers: {
    request: (state: State) => {
      state.fetching = true;
      state.error = null;
    },
    failure: (state: State, action: PayloadAction<string>) => {
      state.fetching = false;
      state.error = action.payload;
    },
    success: _state => initialState,
  },
});

export const UiActions = uiSlice.actions;
export default uiSlice.reducer;
