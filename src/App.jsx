import React from 'react';
import Header from './components/Header';
import { Box, CssBaseline } from '@mui/material';
import HeroSection from './components/HeroSection';
import HeroSection2 from './components/HeroSection2';
import HeroSection3 from './components/HeroSection3';
import Section5 from './components/Section5';
import Section4 from './components/Section4';
import Section6 from './components/Section6';
import Section8 from './components/Section8';
import Section9 from './components/Section9';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <CssBaseline/>
     <Header/>
     <HeroSection/>
     <HeroSection2/>
     <HeroSection3/>
     <Section4/>
     <Section5/>
     <Section6/>
     <Section8/>
     <Section9/>
     <Footer/>
    </>
  );
}

export default App;
