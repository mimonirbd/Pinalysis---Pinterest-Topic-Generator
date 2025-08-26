
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="border-b border-slate-800/50 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex h-24 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl">
          <span className="text-[#ea384c]">Pinalysis</span> -
          <br className="sm:hidden" />
          <span> Ideas Finder</span>
        </div>
        <a
          href="https://www.pinalysis.com"
          target="_blank"
          rel="noopener"
          className="group inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-[#ea384c] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 ease-in-out hover:bg-[#d12f41] focus:outline-none focus:ring-2 focus:ring-[#ea384c] focus:ring-offset-2 focus:ring-offset-black"
        >
          Visit Pinalysis.com
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </header>
  );
};

export default Header;