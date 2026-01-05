import { useState, useCallback } from "react";
import type { BharathiyarSong } from "../data/bharathiyar-songs";

export const useSemanticSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<BharathiyarSong[]>([]);

  const searchSongs = useCallback(async (query: string): Promise<BharathiyarSong[]> => {
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) throw new Error("Failed to fetch search results");

      const data = await response.json();
      setResults(data.results);
      return data.results;
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { searchSongs, results, isLoading };
};
