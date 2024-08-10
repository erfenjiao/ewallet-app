import './index.scss'
// import { FormItem } from 'ant-design-vue';
// import { Form } from 'react-router-dom';
import { Card, Form, Button , Input} from 'antd';
import logo from '../../logo.svg'



const Login = () => {
    const onFinish = (values) => {
        console.log(values)
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

export default Login;