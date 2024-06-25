import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import App from './App.jsx'
import './index.css'
import Header from './components/Header/Header.jsx';
import "@fontsource-variable/inter"; // Defaults to wght axis




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "profile",
  //   element: <Profile />,
  // },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Header/>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
