
import React, { useState } from 'react';
import { Copy, Link as LinkIcon, Check } from 'lucide-react';

interface FloatingActionsProps {
  items: string[];
}

const FloatingActions: React.FC<FloatingActionsProps> = ({ items }) => {
  const [copiedNames, setCopiedNames] = useState(false);
  const [copiedLinks, setCopiedLinks] = useState(false);

  const handleCopyNames = async () => {
    if (items.length === 0) return;
    const text = items.join('\n');
    try {
      await navigator.clipboard.writeText(text);
      setCopiedNames(true);
      setTimeout(() => setCopiedNames(false), 2000);
    } catch (err) {
      console.error('Failed to copy names', err);
    }
  };

  const handleCopyLinks = async () => {
    if (items.length === 0) return;
    const text = items.map(topic =>
      `https://www.pinterest.com/topics/${topic.toLowerCase().replace(/\s+/g, '-')}`
    ).join('\n');
    try {
      await navigator.clipboard.writeText(text);
      setCopiedLinks(true);
      setTimeout(() => setCopiedLinks(false), 2000);
    } catch (err) {
      console.error('Failed to copy links', err);
    }
  };

  if (items.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 flex flex-col gap-3 print:hidden">
      {/* Copy Links Button */}
      <button
        onClick={handleCopyLinks}
        className="group relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-slate-300 shadow-xl transition-all hover:bg-slate-800 hover:text-white hover:border-[#ea384c] focus:outline-none focus:ring-2 focus:ring-[#ea384c] focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Copy all links on current page"
      >
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100 border border-slate-800 pointer-events-none hidden sm:block">
          Copy Page Links
        </span>
        {copiedLinks ? <Check className="h-5 w-5 text-green-500" /> : <LinkIcon className="h-5 w-5" />}
      </button>

      {/* Copy Names Button */}
      <button
        onClick={handleCopyNames}
        className="group relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-slate-300 shadow-xl transition-all hover:bg-slate-800 hover:text-white hover:border-[#ea384c] focus:outline-none focus:ring-2 focus:ring-[#ea384c] focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Copy all topic names on current page"
      >
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100 border border-slate-800 pointer-events-none hidden sm:block">
          Copy Page Names
        </span>
        {copiedNames ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
      </button>
    </div>
  );
};

export default FloatingActions;
