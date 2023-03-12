// Import Dependency 
import React from 'react';
import ReactDOM from 'react-dom';
import './languages/i18next'

import { AuthContextProvider } from './context/authcontext';
import { PostContextProvider } from './context/postcontext';

// Import Component 
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import Styling 
import './index.css';

// import your fontawesome library
import './icons';
import { PredictionContextProvider } from './context/predictioncontext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostContextProvider>
        <PredictionContextProvider>
          <App />
        </PredictionContextProvider>
      </PostContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
