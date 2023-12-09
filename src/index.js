import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/home';
import { Cadastro } from './pages/cadastro';
import { Consulta } from './pages/consulta';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App  />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/consulta",
        element: <Consulta />,
      }, 
      { 
        path: "/cadastro",
        element: <Cadastro />,
      },  
       
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


