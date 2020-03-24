import { applyMiddleware, createStore } from 'redux';
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from 'redux-persist';
import { root_saga } from "./root_saga";

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer,composeWithDevTools( applyMiddleware(sagaMiddleware)) );

sagaMiddleware.run(root_saga);
export const persistor = persistStore(store);

export default {persistor, store};

// , {
//     transforms: [authFilter]
// }