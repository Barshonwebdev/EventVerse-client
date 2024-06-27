import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main';
import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/> ,
    children:[
      {
        path:'/',
        element:<Homepage/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/> ,
  },
  {
    path: "/register",
    element: <Register/> ,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider> <RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
