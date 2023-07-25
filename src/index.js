import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { Provider } from 'react-redux';
import store from './store';
import {
  getAnalytics,
  setAnalyticsCollectionEnabled,
} from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_ANALYTICS_API_KEY,
  authDomain: process.env.REACT_APP_ANALYTICS_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_ANALYTICS_PROJECT_ID,
  storageBucket: process.env.REACT_APP_ANALYTICS_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_ANALYTICS_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ANALYTICS_APP_ID,
  measurementId: process.env.REACT_APP_ANALYTICS_MEASUREMENT_ID,
};

setAnalyticsCollectionEnabled(
  getAnalytics(initializeApp(firebaseConfig)),
  true
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
