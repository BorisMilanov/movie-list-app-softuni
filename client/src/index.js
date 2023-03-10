

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MoviesContextProvider } from './context/MoviesContext'
import { AuthContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <useWorkoutsContext><App />
    </useWorkoutsContext>
        
    </AuthContextProvider>
  </React.StrictMode>
);