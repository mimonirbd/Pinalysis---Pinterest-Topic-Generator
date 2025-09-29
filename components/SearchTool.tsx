import React, { useState, useEffect, useMemo } from 'react';
import ResultItem from './ResultItem';
import { Search, FileSearch2 } from 'lucide-react';
import { topics } from '../data/topics';

// Function to get a random subset of topics
const getRandomTopics = (arr: string[], num: number): string[] => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const SearchTool: React.FC = () => {
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Memoize the initial topics so they don't change on every render
  const initialTopics = useMemo(() => getRandomTopics(topics, 30), []);

  const itemsPerPage = 30;

  useEffect(() => {
    setCurrentPage(1);

    if (query.trim() === '') {
      setFilteredResults([]); // Clear results when query is empty, initialTopics will be shown instead
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const debouncer = setTimeout(() => {
      const results = topics.filter(topic => 
        topic.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(debouncer);
  }, [query]);

  const hasSearched = query.trim() !== '';
  
  const displayItems = hasSearched ? filteredResults : initialTopics;
  
  const totalPages = Math.ceil(displayItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = displayItems.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <section className="relative overflow-hidden">
      <div 
        aria-hidden="true" 
        className="absolute inset-0 -z-10 bg-[radial-gradient(40%_120%_at_50%_0%,rgba(234,56,76,0.1)_0%,rgba(0,0,0,0)_100%)]"
      ></div>
      <div className="container mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">
          Pinterest{' '}
          <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            Topic Generator
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          Get endless Pinterest topic ideas in a snap. Just type a keyword to find popular topics and the right tags to get your content noticed. It's the simple way to find your next content idea.
        </p>

        <div className="relative mx-auto mt-12 max-w-2xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="search"
            value={query}
            onChange={handleInputChange}
            placeholder="e.g., 'summer recipes', 'home decor', 'fashion'"
            className="w-full rounded-full border-2 border-slate-800 bg-slate-900/50 py-4 pl-14 pr-6 text-base text-gray-50 placeholder:text-slate-500 shadow-lg shadow-black/20 outline-none transition-all duration-300 focus:border-[#ea384c] focus:ring-2 focus:ring-[#ea384c]/50 backdrop-blur-sm"
            aria-label="Search for Pinterest topics"
          />
        </div>

        <div className="mt-12 text-left">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-[#ea384c]" role="status" aria-label="Loading results"></div>
              <p className="mt-4 text-slate-400">Searching topics...</p>
            </div>
          ) : (
            <>
              {currentItems.length > 0 && (
                <>
                  {!hasSearched && (
                    <h2 className="mb-6 text-center text-xl font-semibold text-white">
                      Try one of these popular topics
                    </h2>
                  )}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {currentItems.map((topic) => (
                      <ResultItem key={topic} topic={topic} />
                    ))}
                  </div>
                </>
              )}
              
              {hasSearched && !isLoading && filteredResults.length === 0 && (
                 <div className="flex flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-950/50 px-6 py-16 text-center">
                  <FileSearch2 className="h-16 w-16 text-slate-600" />
                  <h3 className="mt-6 text-xl font-semibold text-white">No Matches Found</h3>
                  <p className="mt-2 text-slate-400">
                    We couldn't find any topics for that keyword. Try a shorter search term!
                  </p>
                </div>
              )}
            </>
          )}
        </div>
        
        {!isLoading && displayItems.length > itemsPerPage && (
          <div className="mt-12 flex items-center justify-center space-x-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="rounded-full border border-slate-700 bg-slate-800/50 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Go to previous page"
            >
              Previous
            </button>
            <span className="text-sm font-medium text-slate-400">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="rounded-full border border-slate-700 bg-slate-800/50 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Go to next page"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchTool;