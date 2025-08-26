
import React from 'react';
import { Zap, Infinity, TrendingUp, SearchCode } from 'lucide-react';

const features = [
  {
    name: 'Instant Search',
    description: 'Get immediate results as you type, allowing for rapid keyword exploration.',
    icon: Zap,
  },
  {
    name: 'Unlimited Queries',
    description: 'Search as much as you want, for free. We believe in unrestricted access to data.',
    icon: Infinity,
  },
  {
    name: 'Trending Topics',
    description: 'Our curated list includes currently trending topics to keep your content relevant.',
    icon: TrendingUp,
  },
  {
    name: 'Niche Discovery',
    description: 'Uncover hidden and specific topic niches to target dedicated audiences.',
    icon: SearchCode,
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
       <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Why You'll Love This Topic Generator
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
        Here's how our tool helps you find great Pinterest topic ideas, fast.
      </p>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.name} className="flex flex-col items-center text-center rounded-xl border border-slate-800 bg-slate-950 p-8">
             <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ea384c]/10 text-[#ea384c]">
               <feature.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-white">{feature.name}</h3>
            <p className="mt-2 text-base text-slate-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;