import React from 'react';
import './App.css';
import Hello from './Components/Navbar/nav.js';
import Photos from './Components/Carousel/photos';
import About from './Components/AboutUs/about';
import Footer from './Components/Footer/footer';


function App() {
  return (
    <div className="App">
      <Hello/>
      <Photos/>
      <About/>
      <Footer/>
         
    </div>
  );
}

export default App;
