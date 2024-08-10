// 组合 redux 的子模块 + 导出 store 实例

import {configureStore} from '@reduxjs/toolkit'
import userReducer from './module/user'

export default configureStore({
    reducer:{
        user: userReducer
    }
})