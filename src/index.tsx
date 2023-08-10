import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
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

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
