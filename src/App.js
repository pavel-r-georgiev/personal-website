import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';
import EasterEgg from './components/EasterEgg/EasterEgg';

const App = () => (
  <div className="app">
    <Route exact path="/" component={AppComponent} />
    <Route exact path="/nautilus" component={EasterEgg} />
  </div>
  );

const AppComponent = () => (
  <div className="App">
    <Navbar />
    <Banner title="Pavel Georgiev" />
    <About />
    <Skills />
    {/* <Projects /> */}
    <Footer />
  </div>
  );


export default App;
