import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import appstore from './utils/appstore'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {appstore}>
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </Provider>
);


