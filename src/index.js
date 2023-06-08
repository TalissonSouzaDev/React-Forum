import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { ContextProvider } from './contexts/ContextProvider'
import route from './route';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ContextProvider>
   <RouterProvider router={route}/>
   </ContextProvider>
  </React.StrictMode>
);


