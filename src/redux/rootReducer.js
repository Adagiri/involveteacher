import { combineReducers } from "redux";
import { auth_reducer } from "./auth/auth.reducer";
import { persistReducer } from "redux-persist";
import storage  from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: []
}

const root_reducer = combineReducers({
    auth: auth_reducer
});

export default persistReducer(persistConfig, root_reducer);