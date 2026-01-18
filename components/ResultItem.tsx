
import React from 'react';
import { ExternalLink, Search, Copy } from 'lucide-react';
import { useToast } from './ToastContext';

interface ResultItemProps {
  topic: string;
}

const ResultItem: React.FC<ResultItemProps> = ({ topic }) => {
  const { showToast } = useToast();
  const topicSlug = topic.toLowerCase().replace(/\s+/g, '-');
  const pinterestUrl = `https://www.pinterest.com/topics/${topicSlug}`;
  // Construct Pinalysis search URL with the topic encoded (spaces become %20)
  const pinalysisUrl = `https://www.pinalysis.com/top-pins?q=${encodeURIComponent(topic)}`;

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(topic);
      showToast(`Copied "${topic}" to clipboard!`);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div
      className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/50 p-4 shadow-sm transition-all duration-300 ease-in-out hover:border-[#ea384c]/50 hover:bg-slate-900 hover:shadow-lg hover:shadow-red-900/10 hover:-translate-y-1"
    >
      <button
        onClick={handleCopyClick}
        className="flex-grow mr-4 text-left font-medium text-gray-50 capitalize hover:text-[#ea384c] transition-colors truncate focus:outline-none group/text"
        aria-label={`Copy ${topic} to clipboard`}
        title="Click to copy"
      >
        {topic}
        <span className="inline-block ml-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover/text:opacity-100 group-hover/text:translate-x-0">
            <Copy className="h-3 w-3 inline align-middle text-slate-500" />
        </span>
      </button>
      
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
