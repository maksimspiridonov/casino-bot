import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// Telegram Mini App готово к работе
if (window.Telegram?.WebApp) {
  window.Telegram.WebApp.ready();

  // Извлекаем значения SafeAreaInset
  const safeArea = window.Telegram.WebApp.viewport?.safeArea || { top: 0, bottom: 0, left: 0, right: 0 };
  document.documentElement.style.setProperty('--tg-safe-area-inset-top', `${safeArea.top}px`);
  document.documentElement.style.setProperty('--tg-safe-area-inset-bottom', `${safeArea.bottom}px`);
  document.documentElement.style.setProperty('--tg-safe-area-inset-left', `${safeArea.left}px`);
  document.documentElement.style.setProperty('--tg-safe-area-inset-right', `${safeArea.right}px`);
}

// Рендерим основное приложение
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
