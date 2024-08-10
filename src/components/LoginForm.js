import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

import { Form, Input, Button, Typography } from 'antd';
// import 'antd/dist/antd.css';

const {Title} = Typography

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users/login', { email: email, password });
      // localStorage.setItem('userId', response.data.userId);
      // 假设后端返回的响应包含 userId 和 token
    const { userId, token } = response.data;

    // 存储 userId 和 token
    localStorage.setItem('userId', userId);
    localStorage.setItem('token', token);
    
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <h2>Login</h2>
    //   <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
    //   <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
    //   <button type="submit">Login</button>
    //   <button type="button" onClick={handleRegister}>Register</button>
    // </form>
    <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
    <Form onSubmit={handleSubmit} style={{ width: 300 }}>
      <Title level={3} style={{ textAlign: 'center', marginBottom: 20 }}>登录</Title>
      <Form.Item>
        <Input
          prefix={<i className="anticon anticon-user" />}
          placeholder="邮箱"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<i className="anticon anticon-lock" />}
          type="password"
          placeholder="密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      {/* <Form.Item>
        <Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}>
          记住我
        </Checkbox>
      </Form.Item> */}
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          登录
        </Button>
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleRegister}>
          注册
        </Button>
      </Form.Item>
    </Form>
  </div>
  );
}

export default LoginForm;
