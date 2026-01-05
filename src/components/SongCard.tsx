import React from 'react';
import type { BharathiyarSong } from '../data/bharathiyar-songs';

interface SongCardProps {
  song: BharathiyarSong;
  index: number;
}

const SongCard: React.FC<SongCardProps> = ({ song, index }) => {
  return (
    <div 
      className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-card-hover 
                 hover:bg-card-hover transition-all duration-300 transform hover:-translate-y-1
                 animate-in fade-in slide-in-from-bottom-4"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Song Title */}
      <div className="mb-4">
        <h3 className="text-xl font-bold font-tamil text-saffron mb-1">
          🏷️ {song.title_ta}
        </h3>
        <div className="h-0.5 w-12 bg-gradient-saffron rounded"></div>
      </div>

      {/* Tamil Verses */}
      <div className="mb-5 p-4 bg-verse-bg rounded-lg border border-border">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-tamil-gold">📜</span>
          <span className="text-sm font-medium text-muted-foreground">Bharathiyar's Verses</span>
        </div>
        <p className="font-tamil text-base leading-relaxed text-foreground whitespace-pre-line">
          {song.lines_ta}
        </p>
      </div>

      {/* English Meaning */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-saffron-light"></span>
          <span className="text-sm font-medium text-muted-foreground">English Meaning</span>
        </div>
        <p className="font-english text-sm leading-relaxed text-secondary-foreground italic">
          "{song.meaning_en}"
        </p>
      </div>

      {/* Tamil Meaning */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-tamil-gold"></span>
          <span className="text-sm font-medium text-muted-foreground">Tamil Meaning</span>
        </div>
        <p className="font-tamil text-sm leading-relaxed text-secondary-foreground">
          {song.meaning_ta}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {song.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full
                       font-english font-medium border border-border hover:border-saffron
                       transition-colors duration-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SongCard;