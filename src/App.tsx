import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
    </>
  );
};

export default App;
