import './index.scss'
// import { FormItem } from 'ant-design-vue';
// import { Form } from 'react-router-dom';
import { Card, Form, Button , Input, message} from 'antd';
import logo from '../../logo.svg'
import {useDispatch} from 'react-redux'
import { fetchLogin } from '../../store/module/user';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish = async (values) => {
        console.log(values)
        // 触发异步action fetchLogin
        await dispatch(fetchLogin(values))
        // 1、登陆完毕，跳转到首页
        navigate('/')
        //2、提示用户登陆成功
        message.success('登陆成功')
    }
    return (
        <div className='login'>
            <Card className='login-container'>
                <img className='login-logo' src={logo} alt =""></img>
                {/* 登陆表单 */}
                <Form 
                    onFinish={onFinish}
                    validateTrigger="onBlur"
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!'
                            },
                    ]}>
                        <Input size="large" placeholder="请输入邮箱"></Input>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!'
                            }
                            ]}>
                        <Input size="large" placeholder="请输入密码"></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType='submit' size='large' block>
                            sign in
                        </Button>
                    </Form.Item>
                    
                </Form>
                <Form>
                    <Form.Item>
                        <Button type="primary" htmlType='submit' size='large' block>
                            sign up
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )

}

export default Login
