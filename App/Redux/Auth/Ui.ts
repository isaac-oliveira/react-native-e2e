import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IAuthUi {
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
    request: (state: State, _action: PayloadAction<IAuthUi>) => {
      state.fetching = true;
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
