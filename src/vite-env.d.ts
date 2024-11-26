/// <reference types="vite/client" />

declare global {
    interface Window {
      Telegram: any;  // Тип `any` позволяет использовать любые поля и методы, доступные на объекте Telegram
    }
  }
  
  export {};  // Это нужно, чтобы файл стал модулем и декларация была применена
  