import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import './App.css'

import Auth from './components/Auth';

const App = () => {
  return (
    <div>
      <Auth />
    </div>
  );
};

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

// Render your App component inside the root
root.render(
    <App />
);