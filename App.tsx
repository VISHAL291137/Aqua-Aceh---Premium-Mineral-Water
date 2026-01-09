
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Values from './components/Values';
import Team from './components/Team';
import FAQ from './components/FAQ';
import BottomGallery from './components/BottomGallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <Values />
        <Team />
        <FAQ />
        <BottomGallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;
