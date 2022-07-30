import React from 'react';
import './App.css';
import Hello from './Components/Navbar/nav.js';
import Photos from './Components/PhotoIntro/photos';
import About from './Components/AboutUs/about';
import Footer from './Components/Footer/footer';
import Carousel from './Components/Carousel/carousel';



function App() {
  return (
    <div className="App">
      <Hello/>
      <Photos/>
      <Carousel/>
      <About/>
      <Footer/>
         
    </div>
  );
}

export default App;
