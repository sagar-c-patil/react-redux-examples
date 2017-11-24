import { createStore, applyMiddleware, compose } from "redux";
import 'rxjs/Rx';
import { rootReducer } from "./root-reducer";
import logger from 'redux-logger';
import { createEpicMiddleware } from "redux-observable";
import { routerMiddleware } from 'react-router-redux';
import { rootEpic } from "./root-epic";
import { appHistory } from "../app-history";

const epic = createEpicMiddleware(rootEpic);

const middlewareList= [epic,logger, routerMiddleware(appHistory())];

const windowIfDefined = typeof window === 'undefined' ? null : window as any;

// pick debug or dummy enhancer
const composeEnhancers = windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(
  applyMiddleware(...middlewareList)
);

const store = createStore(rootReducer,middlewares);

export { store };