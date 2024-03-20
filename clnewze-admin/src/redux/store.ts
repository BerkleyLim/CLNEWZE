import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './state/userSlice';

const sessionStorage =
    typeof window !== 'undefined' ? window.sessionStorage : undefined
const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    whilelist: ['user'],
    // blacklist : []
}

const rootReducer = combineReducers({
    user:userReducer
})

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: rootReducer
    // reducer: persistedReducer
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

