import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type State = {
  data: any[];
};

const initialState: State = {
  data: [],
};

const entitiesSlice = createSlice({
  name: 'entities/home',
  initialState,
  reducers: {
    setData: (_state: State, action: PayloadAction<any[]>) => ({
      data: action.payload,
    }),
  },
});

export const EntitiesActions = entitiesSlice.actions;
export default entitiesSlice.reducer;
