// 路由配置

import Layout from "@/pages/Layout";
import Login from "@/pages/Login";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link
} from 'react-router-dom'
// 配置路由实例

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>
    },
    {
        path: "/login",
        element: <Login></Login>
    }
])

export default router
