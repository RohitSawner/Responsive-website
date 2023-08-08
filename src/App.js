import React from 'react';
//import '/index.css'
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Project from './Component/Project/Project';
import Contact from './Component/Contact/Contact';
import {Routes , Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index path='/' element={ <Home/> } />
      <Route path='/About' element = { <About/>} />
      <Route path='/Project' element = { <Project/>} />
      <Route path='/Contact' element = { <Contact />} />
    </Routes>
  );
}

export default App;
