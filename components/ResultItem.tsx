
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
      className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4 shadow-sm transition-all duration-200 ease-in-out hover:border-slate-700 hover:bg-slate-800"
      aria-label={`View ${topic} on Pinterest`}
    >
      <p className="font-medium text-gray-50">
        {topic}
      </p>
      <div className="flex items-center space-x-2 rounded-full bg-[#ea384c] px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition-colors group-hover:bg-[#d12f41]">
        <span>View</span>
        <ExternalLink className="h-4 w-4" />
      </div>
    </a>
  );
};

export default ResultItem;