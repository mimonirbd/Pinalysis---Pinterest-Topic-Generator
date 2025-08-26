import React from 'react';
import { Sparkles } from 'lucide-react';

const WhyTool: React.FC = () => {
  return (
    <section className="border-y border-slate-800 bg-gradient-to-b from-black to-slate-900/50">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your Go-To Tool for Pinterest Topic Ideas
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400 md:mx-0">
              The Pinalysis Topic Generator is a completely free tool built to help you instantly find trending and niche topics on Pinterest. You don't need to sign up or enter a credit card, and you can search as much as you like. We made this to give creators, marketers, and Pinterest fans a simple way to find great content ideas and grow their audience.
            </p>
            <div className="mt-8 flex justify-center gap-4 md:justify-start">
              <span className="inline-block rounded-full bg-[#ea384c]/10 px-4 py-1.5 text-sm font-semibold text-red-400">
                100% Free
              </span>
              <span className="inline-block rounded-full bg-slate-700/50 px-4 py-1.5 text-sm font-semibold text-slate-300">
                Unlimited Searches
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-[#ea384c] to-purple-600 opacity-10 blur-2xl"></div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-8 shadow-2xl shadow-black/50">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#ea384c]/10 text-[#ea384c]">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">Discover Hot Topics</h3>
              </div>
              <p className="mt-4 text-slate-400">
                Find what's buzzing on Pinterest by exploring thousands of curated topic tags.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">wedding ideas</span>
                <span className="rounded-full bg-[#ea384c] px-3 py-1 text-sm font-medium text-white">summer recipes</span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">home decor</span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">fashion outfits</span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">DIY projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTool;
