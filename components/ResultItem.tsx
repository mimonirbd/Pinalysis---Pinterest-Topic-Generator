
import React from 'react';
import { ExternalLink, Search } from 'lucide-react';

interface ResultItemProps {
  topic: string;
}

const ResultItem: React.FC<ResultItemProps> = ({ topic }) => {
  const topicSlug = topic.toLowerCase().replace(/\s+/g, '-');
  const pinterestUrl = `https://www.pinterest.com/topics/${topicSlug}`;
  // Construct Pinalysis search URL with the topic encoded (spaces become %20)
  const pinalysisUrl = `https://www.pinalysis.com/top-pins?q=${encodeURIComponent(topic)}`;

  return (
    <div
      className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/50 p-4 shadow-sm transition-all duration-300 ease-in-out hover:border-[#ea384c]/50 hover:bg-slate-900 hover:shadow-lg hover:shadow-red-900/10 hover:-translate-y-1"
    >
      <a 
        href={pinterestUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-gray-50 capitalize hover:text-[#ea384c] transition-colors flex-grow mr-4 truncate"
        aria-label={`View ${topic} on Pinterest`}
      >
        {topic}
      </a>
      
      <div className="flex items-center space-x-2 shrink-0">
        {/* Pinalysis Search Button */}
        <a
          href={pinalysisUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-all duration-200 hover:bg-[#ea384c] hover:text-white hover:scale-110"
          title="Search on Pinalysis"
          aria-label={`Search ${topic} on Pinalysis`}
        >
          <Search className="h-4 w-4" />
        </a>

        {/* Pinterest View Button */}
        <a
          href={pinterestUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-all duration-200 hover:bg-[#ea384c] hover:text-white hover:scale-110"
          title="View on Pinterest"
          aria-label={`View ${topic} on Pinterest`}
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default ResultItem;
