import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlayCircle } from "lucide-react";

import api from "../services/api";

const Albums = () => {

  const { id } = useParams();

  const [album, setAlbum] = useState(null);
  const [songs, setSongs] = useState([]);

  // Fetch Album
  const fetchAlbum = async () => {

    try {

      const response = await api.get("/api/albums");

      const foundAlbum = response.data.find(
        (item) => item.id === id
      );

      setAlbum(foundAlbum);

    } catch (error) {

      console.log(error);
    }
  };

  // Fetch Songs
  const fetchSongs = async () => {

    try {

      const response = await api.get("/api/songs");

      const filteredSongs = response.data.filter(
        (song) => song.albumId === id
      );

      setSongs(filteredSongs);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchAlbum();
    fetchSongs();

  }, [id]);

  // Loading
  if (!album) {

    return (
      <div className="bg-black min-h-screen flex items-center justify-center">

        <h1 className="text-white text-3xl animate-pulse">
          Loading Album...
        </h1>

      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#1e1e1e] to-black min-h-screen text-white">

      {/* Album Header */}
      <div className="flex flex-col md:flex-row items-center md:items-end gap-10 p-10">

        {/* Album Image */}
        <div className="relative group">

          <img
            src={`${import.meta.env.VITE_IMAGE_URL}${album.image}`}
            alt={album.name}
            className="w-72 h-72 object-cover rounded-3xl shadow-2xl transition duration-500 group-hover:scale-105"
          />

          {/* Glow */}
          <div className="absolute inset-0 rounded-3xl bg-green-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

        </div>

        {/* Album Info */}
        <div className="flex flex-col">

          <p className="uppercase text-sm tracking-[5px] text-green-400 mb-3">
            Album
          </p>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            {album.name}
          </h1>

          <p className="text-gray-400 mt-5 text-lg max-w-2xl leading-relaxed">
            {album.desc}
          </p>

          <div className="flex items-center gap-4 mt-8">

            <button className="bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 transition duration-300 shadow-lg">

              <PlayCircle className="w-6 h-6" />

              Play Album

            </button>

            <p className="text-gray-400 text-sm">
              {songs.length} Songs
            </p>

          </div>

        </div>

      </div>

      {/* Songs Section */}
      <div className="px-5 md:px-10 pb-10">

        <div className="mb-6">

          <h2 className="text-3xl font-bold">
            Songs
          </h2>

        </div>

        <div className="flex flex-col gap-4">

          {songs.map((song, index) => (

            <div
              key={song.id}
              className="group bg-[#181818] hover:bg-[#252525] transition-all duration-300 rounded-2xl p-5 flex flex-col md:flex-row items-center gap-5 shadow-lg"
            >

              {/* Song Number */}
              <div className="text-gray-500 text-xl font-bold w-10">
                {index + 1}
              </div>

              {/* Song Image */}
              <div className="relative">

                <img
                  src={`${import.meta.env.VITE_IMAGE_URL}${song.image}`}
                  alt={song.title}
                  className="w-24 h-24 object-cover rounded-xl"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl flex items-center justify-center">

                  <PlayCircle className="text-white w-10 h-10" />

                </div>

              </div>

              {/* Song Info */}
              <div className="flex-1">

                <h2 className="text-2xl font-bold">
                  {song.title}
                </h2>

                <p className="text-gray-400 mt-2">
                  {song.artist}
                </p>

              </div>

              {/* Audio */}
              <div className="w-full md:w-[400px]">

                <audio
                  controls
                  className="w-full"
                  src={`${import.meta.env.VITE_AUDIO_URL}${song.audio}`}
                />

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Albums;