import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, Dispatch, Middleware } from "redux";
import freeze from "redux-freeze";
import rootReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import appSagas from "./saga";

const sagaMiddleware = createSagaMiddleware();

const composer = composeWithDevTools({ trace: true, traceLimit: 25 });
const middleware = [freeze, sagaMiddleware];


const errorHandlerMiddleware: Middleware = () => (next: Dispatch) => (action) => {
  if (action.type.includes("SUCCESS") && action.payload && action.payload.message) {
    next({ type: "ERROR", payload: action.payload.message });
  }

  return next(action);
};


export default function configureStore() {
  const store = createStore(rootReducer(), undefined, composer(applyMiddleware(...middleware, errorHandlerMiddleware)));

  sagaMiddleware.run(appSagas);


  return { store };
}