import { combineReducers } from "redux";
import { reducers } from "./reducers/index";
import { routerReducer} from 'react-router-redux';
import { IAppState } from "./state/app-state";
import { IAppAction } from "./app-action";


const appReducer = combineReducers({
  ...reducers,
  router: routerReducer
});


export const rootReducer = (state: IAppState, action: IAppAction) => {
  return appReducer(state, action);
}
