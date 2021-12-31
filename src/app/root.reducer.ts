import { MenuReducer } from '../common/components/menu';
import { MenuButtonReducer } from '../common/components/menu-button';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  menu: MenuReducer,
  menuButton: MenuButtonReducer
});

export type AppState = ReturnType<typeof rootReducer>;
