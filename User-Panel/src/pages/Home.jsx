import { useEffect, useState } from "react";
import { Sparkles, Music2 } from "lucide-react";

import api from "../services/api";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const Home = () => {

  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  // Fetch Albums
  const fetchAlbums = async () => {

    try {

      const response = await api.get("/api/albums");

      setAlbums(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  // Fetch Songs
  const fetchSongs = async () => {

    try {

      const response = await api.get("/api/songs");

      setSongs(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchAlbums();
    fetchSongs();

  }, []);

  return (
    <div className="flex bg-black text-white min-h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gradient-to-b from-[#121212] via-[#181818] to-black">

        {/* Navbar */}
        <Navbar />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8">

          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-500/20 via-emerald-400/10 to-transparent border border-green-500/10 p-10 mb-12 shadow-2xl">

            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>

            <div className="relative z-10">

              <div className="flex items-center gap-3 mb-4">

                <Sparkles className="text-green-400 w-8 h-8" />

                <p className="uppercase tracking-[6px] text-green-400 text-sm font-semibold">
                  Musify Premium
                </p>

              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-4xl">
                Feel The <span className="text-green-400">Music</span> Like Never Before
              </h1>

              <p className="text-gray-400 text-lg mt-6 max-w-2xl leading-relaxed">
                Discover trending songs, immersive albums, and your favorite artists — all in one place.
              </p>

              <button className="mt-8 bg-green-500 hover:bg-green-400 transition duration-300 text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-green-500/40">
                Start Listening
              </button>

            </div>

          </div>

          {/* Albums Section */}
          <div className="mb-16">

            <div className="flex items-center justify-between mb-8">

              <div className="flex items-center gap-3">

                <Music2 className="text-green-400 w-8 h-8" />

                <h1 className="text-4xl font-bold">
                  Featured Albums
                </h1>

              </div>

              <button className="text-gray-400 hover:text-white transition">
                Show All
              </button>

            </div>

            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">

              {albums.map((album) => (
                <AlbumItem
                  key={album.id}
                  album={album}
                />
              ))}

            </div>

          </div>

          {/* Songs Section */}
          <div>

            <div className="flex items-center justify-between mb-8">

              <div className="flex items-center gap-3">

                <Music2 className="text-green-400 w-8 h-8" />

                <h1 className="text-4xl font-bold">
                  Trending Songs
                </h1>

              </div>

              <button className="text-gray-400 hover:text-white transition">
                Show All
              </button>

            </div>

            <div className="flex gap-6 overflow-x-auto pb-10 scrollbar-hide">

              {songs.map((song) => (
                <SongItem
                  key={song.id}
                  song={song}
                />
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;