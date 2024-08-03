// UserDashboard.js
import React, { useState, useEffect } from 'react';
import api from '../api';
import { Form, Input } from 'antd';

function UserDashboard() {
  const [userInfo, setUserInfo] = useState({
    userId: '',
    accountId: '',
    email: '',
    phone: '',
    balance: '',
    accountStatus: '',
    frozenBalance: ''
  });

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const userId = localStorage.getItem('userId');
      if (userId) {
        const response = await api.get(`/users/${userId}`);
        const accountResponse = await api.get(`/accounts/${userId}`);
        setUserInfo({
          userId: response.data.userId || '',
          accountId: accountResponse.data.id || '',
          email: response.data.email || '',
          phone: response.data.phoneNumber || '',
          balance: accountResponse.data.balance || '',
          accountStatus: accountResponse.data.accountStatus || '',
          frozenBalance: accountResponse.data.frozenBalance || ''
        });
      } else {
        console.error('No userId found in localStorage');
      }
    } catch (error) {
      console.error('Error fetching user info', error);
    }
  };

  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="User ID">
        <Input value={userInfo.userId} readOnly />
      </Form.Item>
      <Form.Item label="Account ID">
        <Input value={userInfo.accountId} readOnly />
      </Form.Item>
      <Form.Item label="Email">
        <Input value={userInfo.email} readOnly />
      </Form.Item>
      <Form.Item label="Phone">
        <Input value={userInfo.phone} readOnly />
      </Form.Item>
      <Form.Item label="Balance">
        <Input value={userInfo.balance} readOnly />
      </Form.Item>
      <Form.Item label="Account Status">
        <Input value={userInfo.accountStatus} readOnly />
      </Form.Item>
      <Form.Item label="Frozen Balance">
        <Input value={userInfo.frozenBalance} readOnly />
      </Form.Item>
    </Form>
  );
}

export default UserDashboard;
