import React from 'react';
import ReactDOM from 'react-dom/client';
import SpaceshipApp from './SpaceshipApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SpaceshipApp />
    </BrowserRouter>
  </React.StrictMode>
);
