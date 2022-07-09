import React from 'react';
import "./App.css";
import {Contact, Navbar} from "./components";
import {Header, Projects, Info} from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
      <Navbar />
      <Header />
      <Info />
      <Projects />
      <Contact />
      </div>
    </div>
  )
}

export default App