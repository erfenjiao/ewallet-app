// 放置和用户相关的状态管理

import { createSlice } from '@reduxjs/toolkit'
import { request } from '../../utils'
import {getToken, setToken as _setToken} from '../../utils'

const userStore = createSlice({
    name: "user",
    //数据状态
    initialState:{
        token: getToken() || '',
        userInfo: {
            userId: null,
            username: '',
            password: '',
            email: '',
            phoneNumber: '',
            create_time: null,
            update_time: null,
            token: null
        }
    },
    // 同步修改方法
    reducers:{
        setToken (state, action) {
            state.token = action.payload
            // loaclstorage 存一份
            //localStorage.setItem('token', action.payload)
            _setToken(action.payload)
        },
        setUserInfo (state, action) {
            state.userInfo = action.payload
        }
    }
})

// 解构出 actionCreater
const { setToken, setUserInfo } = userStore.actions

// 获取 reducer 函数
const userReducer = userStore.reducer

// 异步方法 完成登录获取token
const fetchLogin = (loginForm)=> {
    return async(dispatch)=>{
        try {
            //1、发送异步请求
            const res = await request.post('/users/login', loginForm);
            console.log("res.token = "+ res.token)
            // 2、提交同步方法，进行token的存入
            // dispatch(setToken(res.data.token));
            if (res && res.token) {
                dispatch(setToken(res.token));
            } else {
                console.error('登录失败，未返回 token');
            }
          } catch (error) {
            console.error('登录请求失败:', error);
          }
    }
}

// 获取个人用户信息-异步方法
const fetchUserInfo = ()=> {
    return async(dispatch)=>{
        try {
            const userId = localStorage.getItem('userId');
            //1、发送异步请求
            const res = await request.get(`/users/${userId}/profile`);
            console.log("res = "+res)
            // 2、提交同步方法，进行存入
            dispatch(setUserInfo(res));
        } catch (error) {
            console.error('获取个人用户信息请求失败:', error);
        }
    }
}

export {fetchLogin, fetchUserInfo, setToken}

export default userReducer