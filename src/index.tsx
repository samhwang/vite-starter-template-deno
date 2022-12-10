import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app.tsx';
import reportWebVitals from './reportWebVitals.ts';

const RootComponent = (
  <StrictMode>
    <App />
  </StrictMode>
);

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);
root.render(RootComponent);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
