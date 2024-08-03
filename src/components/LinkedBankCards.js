import React, { useState, useEffect } from 'react';
import api from '../api';

function LinkedBankCard() {
  const [bankCards, setBankCards] = useState([]);
  const [cardNumber, setCardNumber] = useState('');
  const [cardPassword, setCardPassword] = useState('');
  const [defaultCard, setDefaultCard] = useState(null);

  useEffect(() => {
    fetchBankCards();
  }, []);

  const fetchBankCards = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await api.get(`/accounts/${userId}/bankcards`);
      setBankCards(response.data);
    } catch (error) {
      console.error('Error fetching bank cards', error);
    }
  };

  const handleAddBankCard = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('userId');
      await api.post(`/accounts/${userId}/bankcards`, { cardNumber, cardPassword });
      setCardNumber('');
      setCardPassword('');
      fetchBankCards();
    } catch (error) {
      console.error('Error adding bank card', error);
    }
  };

  const handleSetDefault = async (cardId) => {
    try {
      const userId = localStorage.getItem('userId');
      await api.put(`/accounts/${userId}/bankcards/${cardId}/default`);
      fetchBankCards();
    } catch (error) {
      console.error('Error setting default bank card', error);
    }
  };

  return (
    <div>
      <h2>Linked Bank Cards</h2>
      <form onSubmit={handleAddBankCard}>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Card Number"
          required
        />
        <input
          type="password"
          value={cardPassword}
          onChange={(e) => setCardPassword(e.target.value)}
          placeholder="Card Password"
          required
        />
        <button type="submit">Add Bank Card</button>
      </form>
      <h3>Existing Bank Cards</h3>
      <ul>
        {bankCards.map((card) => (
          <li key={card.cardNumber}>
            <span>{card.cardNumber}</span>
            <span>{card.isDefault ? ' (Default)' : ''}</span>
            {!card.isDefault && (
              <button onClick={() => handleSetDefault(card.cardNumber)}>Set as Default</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkedBankCard;
