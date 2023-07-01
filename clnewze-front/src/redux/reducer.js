import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import storage from "redux-persist/lib/storage/session";

import userReducer from "./action/user.js"
import languageReducer from "./action/language.js"
// import teacherReducer from "./action/teacher.js"

const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ["user"]
  // blacklist -> 그것만 제외합니다
};

export const rootReducer = combineReducers({
  user:userReducer,
  language:languageReducer,
  // teacher:teacherReducer,
});

export default persistReducer(persistConfig, rootReducer);