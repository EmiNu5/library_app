import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './views/App'
import Cart from './views/Cart'
import About from './views/About'
import PageNotFound from './views/PageNotFound'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
