import React from "react";
import { createRoot } from "react-dom/client"; // Импортируем createRoot
import "bootstrap/dist/css/bootstrap.css";
import App from "./app"; // Убедитесь, что путь правильный

// Создаём корневой элемент для React приложения
const container = document.getElementById("root"); // Получаем элемент root
const root = createRoot(container); // Создаём корень
root.render(<App />); // Рендерим компонент App
