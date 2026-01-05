import React, { useState, useEffect } from 'react';
import { Search, Sparkles, Heart } from 'lucide-react';
import { useSemanticSearch } from '../hooks/useSemanticSearch';
import SongCard from './SongCard';
import type { BharathiyarSong } from '../data/bharathiyar-songs';

const SearchInterface: React.FC = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<BharathiyarSong[]>([]);
  const { searchSongs, isLoading } = useSemanticSearch();

  // Initialize with all songs on first load
  useEffect(() => {
    const initializeResults = async () => {
      const initialResults = await searchSongs('');
      setSearchResults(initialResults);
    };
    initializeResults();
  }, [searchSongs]);

  const handleSearch = async (searchQuery: string) => {
    const results = await searchSongs(searchQuery);
    setSearchResults(results);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  const quickSearchTerms = ['freedom', 'love', 'courage', 'Krishna', 'women', 'knowledge'];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-dark border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            {/* Title */}
            <div className="flex items-center justify-center gap-3 mb-4">
              
              <h1 className="text-4xl md:text-6xl font-bold font-english">
                <span className="text-foreground">Bharathiyar</span>
                <span className="text-saffron"> AI</span>
              </h1>
              <Sparkles className="w-8 h-8 text-tamil-gold" />
            </div>
            
            {/* Subtitle */}
            <p className="text-lg text-muted-foreground font-english mb-2">
              Semantic Song Finder
            </p>
            <p className="text-sm text-secondary-foreground font-tamil mb-8">
              மகாகவி பாரதியாரின் பாடல்களை செமாண்டிக் தேடலுடன் கண்டறியுங்கள்
            </p>

            {/* Search Box */}
            <div className="max-w-2xl mx-auto mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={query}
                  onChange={handleInputChange}
                  placeholder="Search by theme (e.g., freedom, love, courage, Krishna)..."
                  className="w-full pl-12 pr-4 py-4 bg-input border border-border rounded-lg
                           text-foreground placeholder-muted-foreground font-english
                           focus:outline-none focus:ring-2 focus:ring-saffron focus:border-saffron
                           transition-all duration-200 text-lg"
                />
                {isLoading && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-5 h-5 border-2 border-saffron border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Search */}
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
              <span className="text-sm text-muted-foreground font-english mr-2">Quick search:</span>
              {quickSearchTerms.map((term) => (
                <button
                  key={term}
                  onClick={() => {
                    setQuery(term);
                    handleSearch(term);
                  }}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full
                           hover:bg-saffron hover:text-saffron-foreground transition-all duration-200
                           border border-border hover:border-saffron font-english"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {searchResults.length > 0 ? (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground font-english">
                {query ? `Search results for "${query}"` : 'All Bharathiyar Songs'}
              </h2>
              <span className="text-muted-foreground font-english text-sm">
                {searchResults.length} song{searchResults.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((song, index) => (
                <SongCard key={song.id} song={song} index={index} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-foreground mb-2 font-english">
              No songs found
            </h3>
            <p className="text-muted-foreground font-english">
              Try searching for themes like "freedom", "love", or "courage"
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground font-english text-sm">
            Built with ❤️ for Mahakavi Bharathiyar's eternal verses
          </p>
          <p className="text-muted-foreground font-tamil text-xs mt-1">
            மகாகவி பாரதியாரின் நித்திய பாடல்களுக்காக ❤️ உடன் உருவாக்கப்பட்டது
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SearchInterface;