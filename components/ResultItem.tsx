import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ResultItemProps {
  topic: string;
}

const ResultItem: React.FC<ResultItemProps> = ({ topic }) => {
  const topicSlug = topic.toLowerCase().replace(/\s+/g, '-');
  const pinterestUrl = `https://www.pinterest.com/topics/${topicSlug}`;

  return (
    <a
      href={pinterestUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/50 p-4 shadow-sm transition-all duration-300 ease-in-out hover:border-[#ea384c]/50 hover:bg-slate-900 hover:shadow-lg hover:shadow-red-900/10 hover:-translate-y-1"
      aria-label={`View ${topic} on Pinterest`}
    >
      <p className="font-medium text-gray-50 capitalize">
        {topic}
      </p>
      <div className="flex items-center space-x-2 text-sm font-semibold text-slate-400 transition-colors group-hover:text-white">
        <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">View</span>
        <ExternalLink className="h-4 w-4" />
      </div>
    </a>
  );
};

export default ResultItem;