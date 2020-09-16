import React from 'react';
import AllCounters from './allCounters'
import Header from './header'
import './App.css';
import Footer from './footer'


function App() {
  return (
    <div className="container">
        <Header />
        <AllCounters />
        <Footer />
    </div>
  );
}

export default App;
