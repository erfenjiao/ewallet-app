// 路由配置

import { AuthRoute } from "@/components/AuthRoute/AuthRoute";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import User from "@/pages/User";
import Transfer from "@/pages/Transfer";
import Wallet from "@/pages/Wallet";

import {
    createBrowserRouter,
    // RouterProvider,
    // Route,
    // Link
} from 'react-router-dom'

// 配置路由实例

const router = createBrowserRouter([
    {
        path: "/",
        element:  <AuthRoute> <Layout></Layout> </AuthRoute>,
        children: [
            {
                path: 'user',
                element: <User></User>
            },
            {
                path: 'wallet',
                element: <Wallet></Wallet>
            },
            {
                path: "transfer",
                element: <Transfer></Transfer>
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    }
])

export default router
