// Ensure fetch setter exists to prevent sandbox iframe exceptions
try {
  if (typeof window !== 'undefined') {
    const origFetch = window.fetch ? window.fetch.bind(window) : undefined;
    let customFetch = origFetch;
    Object.defineProperty(window, 'fetch', {
      get() {
        return customFetch;
      },
      set(val) {
        customFetch = val;
      },
      configurable: true,
      enumerable: true
    });
  }
} catch {
  // Silent fallback
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

