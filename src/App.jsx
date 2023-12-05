import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Popup from './components/Popup';
import SignIn from './components/SignIn';
import Home from './components/Home';

function App() {
  
  
  return (
  
     <Router>
      <div className="App position-relative">
        <Popup />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/signin" Component={SignIn} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
