// 测试 token 是否注入
// import { request } from "@/utils"
// import { useEffect } from "react"

// const Layout = () => {
//     useEffect(() => {
//         request.get('/users/profile', { params: { email: 'red@qq.com' } })
//     },[])
//     return <div>this is layout</div>
// }

// export default Layout
import { Layout, Menu, Popconfirm } from "antd";
import { UserOutlined, TransactionOutlined , WalletOutlined, LogoutOutlined} from '@ant-design/icons';
import './index.scss'
import { Outlet, useNavigate } from "react-router-dom";

const {Header, Sider} = Layout

const items = [
    {
        label: '用户-user',
        key: '/user',
        icon: <UserOutlined />
    },
    {
        label: '转账-transfer',
        key: '/transfer',
        icon: <TransactionOutlined/>
    },
    {
        label: '钱包-wallet',
        key: '/wallet',
        icon: <WalletOutlined/>
    }
]

const GeekLayout = () => {
    const navigate = useNavigate()
    const onMenuClick = (router) => {
        console.log("菜单被点击了", router)
        const path = router.key
        navigate(path)
    }
    return (
        <Layout>
            <Header className="header">
                <div className="logo"></div>
                <div className="user-info">
                    <span className="user-name">
                        user-name
                    </span>
                    <span className="user-logout">
                        <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
                            <LogoutOutlined>退出</LogoutOutlined>
                        </Popconfirm>
                    </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        theme="dark"
                        defaultSelectedKeys={["1"]}
                        items={items}
                        style={{ height: '100%', borderRight: 0 }}
                        onClick={onMenuClick}></Menu>
                </Sider>
                <Layout className="layout-content" style={{padding: 20}}>
                    {/* 二级路由出口 */}
                    <Outlet/>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default GeekLayout