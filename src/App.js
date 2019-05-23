import React from 'react';  
import './App.css';
import Home from './components/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App = () => {
  return(
    <div class='container-fluid'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App;
