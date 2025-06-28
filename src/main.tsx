import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactLenis } from '@studio-freight/react-lenis';
import App from './App';
import './index.css';

const options = {
  lerp: 0.05,
  duration: 1.5,
  smoothTouch: true,
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactLenis root options={options}>
      <App />
    </ReactLenis>
  </React.StrictMode>
);
