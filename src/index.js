import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css'; // Import styles
import App from './components/App/App'; // Import the main App component

// Create a root for ReactDOM to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
