import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner title="Pavel Georgiev"/>
        <About />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default App;
