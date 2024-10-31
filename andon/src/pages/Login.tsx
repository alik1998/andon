import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';
import LoginForm from '../components/LoginForm';
import users from '../data/users.json';
import './login.css';  // Stil dosyası doğru şekilde import edildi

const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (values: { username: string; password: string }) => {
    const user = users.find(
      (u) => u.username === values.username && u.password === values.password
    );

    if (user) {
      navigate('/andonapp');  // Login başarılı, AndonApp'e yönlendir
    } else {
      setErrorMessage('Invalid username or password');  // Hata mesajı göster
    }
  };

  return (
    <div className="login-container">
      <Card style={{ width: 400 }}>
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <LoginForm onLogin={handleLogin} />  {/* LoginForm bileşeni */}
        {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
      </Card>
    </div>
  );
};

export default Login;