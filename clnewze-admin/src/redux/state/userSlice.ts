import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserType} from "../../type/user";
import {RootState} from "../store";

const initialState : UserType | undefined | null = {
    uno: -1,
    id: undefined,
    userName: undefined,
    nickName: undefined,
    role_admin: undefined,
    birthday: undefined,
    user_company: undefined,
    isLogin: false,  // 현재 로그인중인지 알려준다
    validated: false // 이 값은 현재 로그인중인지 아닌지 한번 서버측에 검증했음을 의미
}

// user state
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser(state, action : PayloadAction<UserType | undefined | null>) {
            state.uno = !!action.payload?.uno ? action.payload.uno : state.uno
            state.id = !!action.payload?.id ? action.payload.id : state.id
            state.userName = !!action.payload?.userName ? action.payload.userName : state.userName
            state.nickName = !!action.payload?.nickName ? action.payload.nickName : state.nickName
            state.role_admin = !!action.payload?.role_admin ? action.payload.role_admin : state.role_admin
            state.birthday = !!action.payload?.birthday ? action.payload.birthday : state.birthday
            state.user_company = !!action.payload?.user_company ? action.payload.user_company : state.user_company
            state.isLogin = !!action.payload?.isLogin ? action.payload.isLogin : state.isLogin // 현재 로그인중인지 알려준다
            state.validated = !!action.payload?.validated ? action.payload.validated : state.validated // 이 값은 현재 로그인중인지 아닌지 한번 서버측에 검증했음을 의미
        }
    }
})


export const {setUser} = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const userState = (state: RootState) => state.user
export default userSlice.reducer