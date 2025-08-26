
import React from 'react';
import Header from './components/Header';
import SearchTool from './components/SearchTool';
import Footer from './components/Footer';
import WhyTool from './components/WhyTool';
import Benefits from './components/Benefits';
import Faq from './components/Faq';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-gray-50 selection:bg-[#ea384c] selection:text-white">
      <Header />
      <main>
        <SearchTool />
        <WhyTool />
        <Benefits />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default App;