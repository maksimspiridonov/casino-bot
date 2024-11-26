import { useEffect } from 'react';

// Функция App
function App() {
  useEffect(() => {
    const partnerUrl = "https://1warlo.top/casino/list?open=register&p=4aa0"; // Укажите URL партнера

    // Прямой редирект через небольшую задержку
    setTimeout(() => {
      window.location.href = partnerUrl;
    }, 100); // Небольшая задержка на случай мгновенного рендера

    // Извлекаем значения SafeAreaInset из WebApp
    if (window.Telegram?.WebApp) {
      const safeArea = window.Telegram.WebApp.safeArea;
      
      // Применяем Safe Area отступы через CSS переменные
      document.documentElement.style.setProperty('--tg-safe-area-inset-top', `${safeArea.top}px`);
      document.documentElement.style.setProperty('--tg-safe-area-inset-bottom', `${safeArea.bottom}px`);
      document.documentElement.style.setProperty('--tg-safe-area-inset-left', `${safeArea.left}px`);
      document.documentElement.style.setProperty('--tg-safe-area-inset-right', `${safeArea.right}px`);
    }
  }, []); // Это выполняется только один раз при монтировании компонента

  return (
    <div className="loader"></div> // Показ анимации загрузки
  );
}

export default App;
