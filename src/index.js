import React from 'react';
import ReactDOM from 'react-dom/client';
import pkg from '../package.json';
import './index.css';
import App from './App';
import CacheBuster from 'react-cache-buster';
import reportWebVitals from './reportWebVitals';

const isProduction = process.env.NODE_ENV === 'production'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CacheBuster
    currentVersion={pkg.version}
    isEnabled={isProduction} //If false, the library is disabled.
    isVerboseMode={false} //If true, the library writes verbose logs to console.
  >
    <App />
  </CacheBuster>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();