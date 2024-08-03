import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import UserDashboard from './components/UserDashboard';
import TransferForm from './components/TransferForm';
import LinkedBankCard from './components/LinkedBankCards';
import Wallet from './components/Wallet';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/transfer" element={<TransferForm />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/linked-bank-cards" element={<LinkedBankCard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
