import { combineReducers } from 'redux';
import { MenuReducer } from '../common/components/menu';
import { MenuButtonReducer } from '../common/components/menu-button';

export const rootReducer = combineReducers({
  menu: MenuReducer,
  menuButton: MenuButtonReducer
});

export type AppState = ReturnType<typeof rootReducer>;
