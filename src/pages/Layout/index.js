// 测试 token 是否注入
import { request } from "@/utils"
import { useEffect } from "react"

const Layout = () => {
    useEffect(() => {
        request.get('/users/profile', { params: { email: 'red@qq.com' } })
    },[])
    return <div>this is layout</div>
}

export default Layout