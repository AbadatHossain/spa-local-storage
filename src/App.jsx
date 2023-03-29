import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home'
import SideCart from './components/SiteCart/SideCart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <div>
    <Header></Header>
    </div>
    <div className="main d-flex justify-content-between mt-3">
      <div className="home-container col-md-8 bg-warning">
        <Home></Home>
      </div>
      <div className="aideCart col-md-4 bg-info">
        <SideCart></SideCart>
      </div>
    </div>
      
    </div>
  )
}

export default App
