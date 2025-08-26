import React, { useState, useEffect } from 'react';
import ResultItem from './ResultItem';
import { Search } from 'lucide-react';
import { topics } from '../data/topics';

const SearchTool: React.FC = () => {
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 30;

  useEffect(() => {
    setCurrentPage(1);

    if (query.trim() === '') {
      setFilteredResults([]);
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

  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredResults.slice(startIndex, endIndex);

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
  
  const hasSearched = query.trim() !== '';

  return (
    <section className="container mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Pinterest <span className="text-[#ea384c]">Topic</span> Generator
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
        Get endless Pinterest topic ideas in a snap. Just type a keyword to find popular topics and the right tags to get your content noticed. It's the simple way to find what's trending.
      </p>

      <div className="relative mx-auto mt-10 max-w-2xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="search"
          value={query}
          onChange={handleInputChange}
          placeholder="input seed keyword"
          className="w-full rounded-full border border-slate-700 bg-slate-800 py-3.5 pl-11 pr-4 text-base text-gray-50 placeholder:text-slate-400 focus:border-[#ea384c] focus:ring-2 focus:ring-[#ea384c]/50 outline-none transition duration-200"
          aria-label="Search for Pinterest topics"
        />
      </div>

      <div className="mt-8 text-left">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-[#ea384c]" role="status" aria-label="Loading results"></div>
            <p className="mt-4 text-slate-400">Searching topics...</p>
          </div>
        ) : (
          <>
            {currentItems.length > 0 && (
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {currentItems.map((topic) => (
                  <ResultItem key={topic} topic={topic} />
                ))}
              </div>
            )}
            
            {hasSearched && !isLoading && filteredResults.length === 0 && (
               <div className="rounded-xl border border-slate-800 bg-slate-950 px-6 py-12 text-center">
                <h3 className="text-xl font-semibold text-white">No Matches Found</h3>
                <p className="mt-2 text-slate-400">
                  We couldn't find any topics for that keyword. Try a broader search term!
                </p>
              </div>
            )}
          </>
        )}
      </div>
      
      {!isLoading && filteredResults.length > itemsPerPage && (
        <div className="mt-8 flex items-center justify-center space-x-4">
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
    </section>
  );
};

export default SearchTool;