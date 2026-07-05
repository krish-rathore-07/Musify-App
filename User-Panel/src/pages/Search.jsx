import { useEffect, useState } from "react";
import {
  Search as SearchIcon,
  Music2,
  Disc3,
  Sparkles,
} from "lucide-react";

import api from "../services/api";

import SongItem from "./SongItem";
import AlbumItem from "./AlbumItem";

const Search = () => {

  const [query, setQuery] = useState("");

  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);

  const [filteredSongs, setFilteredSongs] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  // Fetch Songs
  const fetchSongs = async () => {

    try {

      const response = await api.get("/api/songs");

      setSongs(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  // Fetch Albums
  const fetchAlbums = async () => {

    try {

      const response = await api.get("/api/albums");

      setAlbums(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchSongs();
    fetchAlbums();

  }, []);

  // Search Filter
  useEffect(() => {

    const searchedSongs = songs.filter((song) =>
      song.title.toLowerCase().includes(query.toLowerCase())
    );

    const searchedAlbums = albums.filter((album) =>
      album.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredSongs(searchedSongs);
    setFilteredAlbums(searchedAlbums);

  }, [query, songs, albums]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] via-black to-[#0d0d0d] text-white px-6 md:px-10 py-10">

      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-500/20 via-emerald-400/10 to-transparent border border-green-500/10 p-10 mb-14 shadow-2xl">

        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>

        <div className="relative z-10">

          <div className="flex items-center gap-3 mb-5">

            <Sparkles className="text-green-400 w-8 h-8" />

            <p className="uppercase tracking-[6px] text-green-400 text-sm font-semibold">
              Explore Music
            </p>

          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-4xl">
            Search Your Favorite <span className="text-green-400">Songs</span> & Albums
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl leading-relaxed">
            Discover trending tracks, artists, and albums instantly with Musify.
          </p>

          {/* Search Input */}
          <div className="mt-10 flex items-center bg-[#181818] border border-[#2a2a2a] focus-within:border-green-500 transition rounded-full px-5 py-4 max-w-2xl shadow-2xl">

            <SearchIcon className="text-gray-400 w-6 h-6" />

            <input
              type="text"
              placeholder="Search songs or albums..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent text-white placeholder-gray-500 outline-none ml-4 w-full text-lg"
            />

          </div>

        </div>

      </div>

      {/* Songs Section */}
      <div className="mb-16">

        <div className="flex items-center gap-3 mb-8">

          <Music2 className="text-green-400 w-8 h-8" />

          <h1 className="text-4xl font-bold">
            Songs
          </h1>

          <span className="text-gray-400 text-lg">
            ({filteredSongs.length})
          </span>

        </div>

        {filteredSongs.length > 0 ? (

          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">

            {filteredSongs.map((song) => (
              <SongItem
                key={song.id}
                song={song}
              />
            ))}

          </div>

        ) : (

          <div className="bg-[#181818] border border-[#2a2a2a] rounded-3xl p-10 text-center text-gray-400 text-lg">
            No Songs Found
          </div>

        )}

      </div>

      {/* Albums Section */}
      <div>

        <div className="flex items-center gap-3 mb-8">

          <Disc3 className="text-green-400 w-8 h-8" />

          <h1 className="text-4xl font-bold">
            Albums
          </h1>

          <span className="text-gray-400 text-lg">
            ({filteredAlbums.length})
          </span>

        </div>

        {filteredAlbums.length > 0 ? (

          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">

            {filteredAlbums.map((album) => (
              <AlbumItem
                key={album.id}
                album={album}
              />
            ))}

          </div>

        ) : (

          <div className="bg-[#181818] border border-[#2a2a2a] rounded-3xl p-10 text-center text-gray-400 text-lg">
            No Albums Found
          </div>

        )}

      </div>

    </div>
  );
};

export default Search;