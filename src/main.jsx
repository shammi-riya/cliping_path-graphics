import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/router.jsx';
import ScrollToTopComponent from './Reusable/ScrollToTopComponent';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ScrollToTopComponent />
    </RouterProvider>
  </React.StrictMode>
);
