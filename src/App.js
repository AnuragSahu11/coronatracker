import React from 'react';
import AllCounters from './allCounters'
import Header from './header'
import styles  from './App.module.css';
import Footer from './footer'


function App() {
  return (
    <div className={styles.container}>
        <Header />
        <AllCounters />
        
    </div>
  );
}

export default App;