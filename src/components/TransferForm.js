import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function TransferForm() {
  const [toUserId, setToUserId] = useState('');
  const [amount, setAmount] = useState('');
//   const history = useHistory();
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/transactions/transfer', {
        fromUserId: userId,
        toUserId: toUserId,
        amount: amount,
      });
      navigate.push('/dashboard');
    } catch (error) {
      console.error('Transfer failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Transfer Money</h2>
      <input type="text" value={userId} readOnly placeholder="From User ID" />
      <input type="text" value={toUserId} onChange={(e) => setToUserId(e.target.value)} placeholder="To User ID" required />
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
      <button type="submit">Transfer</button>
    </form>
  );
}

export default TransferForm;
