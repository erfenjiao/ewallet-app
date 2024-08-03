import React, { useState, useEffect } from 'react';
import api from '../api';

function Wallet() {
  const [balance, setBalance] = useState(0);
  const [bankCards, setBankCards] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchBalance = async () => {
      const response = await api.get(`/accounts/${userId}/balance`);
      setBalance(response.data.balance);
    };

    const fetchBankCards = async () => {
      const response = await api.get(`/accounts/${userId}/bank-cards`);
      setBankCards(response.data);
    };

    const fetchTransactions = async () => {
      const response = await api.get(`/transactions/${userId}`);
      setTransactions(response.data);
    };

    fetchBalance();
    fetchBankCards();
    fetchTransactions();
  }, [userId]);

  return (
    <div>
      <h2>Wallet</h2>
      <button onClick={() => alert(`Balance: ${balance}`)}>Balance</button>
      <button onClick={() => alert(`Bank Cards: ${JSON.stringify(bankCards)}`)}>Bank Cards</button>
      <button onClick={() => alert(`Transactions: ${JSON.stringify(transactions)}`)}>Transactions</button>
    </div>
  );
}

export default Wallet;
