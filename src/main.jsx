/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/
import React from 'react';
 import ReactDOM from 'react-dom/client';
 import { Provider } from 'react-redux';
 import { PersistGate } from 'redux-persist/integration/react';
 import { store, persistor } from './store/store';
 import { ThemeContextProvider } from './context/ThemeContext';
 import { CssBaseline } from '@mui/material';
 import App from './App';
 ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeContextProvider>
        <CssBaseline />
        <App />
      </ThemeContextProvider>
    </PersistGate>
  </Provider>

 );