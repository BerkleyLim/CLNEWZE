import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE} from 'redux-persist'
import userReducer from './slice/userSlice';
import storageSession from 'redux-persist/lib/storage/session';

// const sessionStorage =
//     typeof window !== 'undefined' ? window.sessionStorage : undefined
const persistConfig = {
  key: 'root',
  // storage: sessionStorage,
  storage: storageSession,
  whitelist: ['user'],
  version: 1,
  // blacklist : []
}

const rootReducer = combineReducers({
  user: userReducer
})

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  // reducer: rootReducer
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // serializableCheck: false
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// 기존 설정 방식 (persistConfig 때문에 제외함)
// export const store = configureStore({
//     reducer: {
//         user: userReducer
//     }
// })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

