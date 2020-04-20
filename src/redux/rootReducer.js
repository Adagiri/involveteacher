import { combineReducers } from "redux";
import { auth_reducer } from "./auth/auth.reducer";
import { topics_reducer } from "./topics/topics.reducer";
import { user_reducer } from "./user/user.reducer";
import { persistReducer } from "redux-persist";
import storage  from "redux-persist/lib/storage";
// import createFilter, { createBlacklistFilter } from 'redux-persist-transform-filter';


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["topics", "auth", "user"]
}

//  export const authFilter = createBlacklistFilter(
//     'auth',
//     ['auth_toggled',
//     'loading',
//     'error_messages', 'keyYouDontWantToSave2']
//   );

const root_reducer = combineReducers({
    auth: auth_reducer,
    topics: topics_reducer,
    user: user_reducer
});

export default persistReducer(persistConfig, root_reducer);