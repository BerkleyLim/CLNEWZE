import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import storage from "redux-persist/lib/storage/session";

import userReducer from "./action/user.js"
import careerReducer from "./action/career.js"


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
  career:careerReducer,
});

export default persistReducer(persistConfig, rootReducer);