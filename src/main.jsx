import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import App from './views/App'
import Home from './views/Home'
import Cart from './components/Cart'
import About from './views/About'
import PageNotFound from './views/PageNotFound'
import './input.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <PageNotFound />,
  },
  {
    path: 'carrito',
    element: <Cart />,
    errorElement: <PageNotFound />,
  },
  {
    path: 'acercade',
    element: <About />,
    errorElement: <PageNotFound />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
