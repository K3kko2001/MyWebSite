import React from 'react';

import { AboutMe, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <AboutMe />
    <Work />
    <Skills />
    <Footer />
  </div>
);

export default App;
