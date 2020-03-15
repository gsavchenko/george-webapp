import { MenuReducer } from '../shared/components/menu/store';
import { MenuButtonReducer } from '../shared/components/menu-button/store';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  menu: MenuReducer,
  menuButton: MenuButtonReducer
});

export type AppState = ReturnType<typeof rootReducer>;
