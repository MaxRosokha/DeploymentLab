import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from './src/dev';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DevSupport ComponentPreviews={ComponentPreviews}
              useInitialHook={useInitial}
  >
    <App />
  </DevSupport>,
);