import UiReducer, {UiActions} from './Ui';
import EntitiesReducer, {EntitiesActions} from './Entities';
import {combineReducers} from '@reduxjs/toolkit';

export const AuthActions = {
  ui: UiActions,
  entities: EntitiesActions,
};

export const AuthReducer = combineReducers({
  ui: UiReducer,
  entities: EntitiesReducer,
});
