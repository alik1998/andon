// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';
import AndonApp from './pages/AndonApp';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Login sayfası ana rotada gösterilecek */}
          <Route index element={<Login />} />
          {/* AndonApp sayfası sadece login sonrası erişilebilir */}
          <Route path="andonapp" element={<AndonApp />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;