import UiReducer, {UiActions} from './Ui';
import EntitiesReducer, {EntitiesActions} from './Entities';
import {combineReducers} from '@reduxjs/toolkit';

export const HomeActions = {
  ui: UiActions,
  entities: EntitiesActions,
};

export const HomeReducer = combineReducers({
  ui: UiReducer,
  entities: EntitiesReducer,
});
