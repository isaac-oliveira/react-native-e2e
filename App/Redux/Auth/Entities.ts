import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  isLogged: false,
  name: '',
};

const entitiesSlice = createSlice({
  name: 'entities/auth',
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<string>) => ({
      name: action.payload,
      isLogged: true,
    }),
    clear: _state => initialState,
  },
});

export const EntitiesActions = entitiesSlice.actions;
export default entitiesSlice.reducer;
