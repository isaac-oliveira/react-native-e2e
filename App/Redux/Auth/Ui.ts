import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IAuthData {
  email: string;
  password: string;
}
export interface State {
  fetching: boolean;
  error: string | null;
}

const initialState: State = {
  fetching: false,
  error: null,
};

const uiSlice = createSlice({
  name: 'ui/auth',
  initialState,
  reducers: {
    request: (state: State, _action: PayloadAction<IAuthData>) => {
      state.fetching = true;
      state.error = null;
    },
    failure: (state: State, action: PayloadAction<string>) => {
      state.fetching = false;
      state.error = action.payload;
    },
    success: _state => initialState,
    logout: _state => initialState,
  },
});

export const UiActions = uiSlice.actions;
export default uiSlice.reducer;
