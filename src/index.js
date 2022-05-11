import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js'
import SimpleHabit from './components/simpleHabit';
import Test from './components/test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SimpleHabit/> */}
    <Test/>
  </React.StrictMode>
);
