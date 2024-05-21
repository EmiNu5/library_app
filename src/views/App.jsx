import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Cart from './Cart'
import PageNotFound from './PageNotFound'
import '../../output.css'

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acercade" element={<About />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
  
  )
}

export default App
