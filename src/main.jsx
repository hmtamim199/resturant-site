import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className='max-w-screen-lg mx-auto'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </HelmetProvider>
  </React.StrictMode>,
)
