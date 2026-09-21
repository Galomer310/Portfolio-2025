import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LangProvider } from './i18n';
import './styles/app.css';

/* No Router: the page is one screen and the prompt is the navigation. A router
   that wraps a single route only adds a dependency and a way for a deep link
   to 404 on a static host. */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>,
);
