import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18에서는 'react-dom/client'를 사용합니다.
import './styles/index.css';
import App from './App';

// React 18 새로운 방식으로 루트 생성
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
