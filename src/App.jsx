import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Videoplayer from './components/Videoplayer/Videoplayer';
import { useState } from 'react';


const App = () => {

  const  [playState, setPlayState] = useState(false);


  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer' />
      <Programs/>
      <About setPlayState={setPlayState} />
      <Title subTitle='Gallery' title='Campus Photos' />
      <Campus/>
      <Title subTitle='Testimonials' title='What Students Say' />
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get In Touch' />
      <Contact/>
      <Footer/> 
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState} />
      
    </div>
  );
};

export default App
