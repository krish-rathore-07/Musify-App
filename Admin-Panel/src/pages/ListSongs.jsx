import { useEffect, useState } from "react";
import { Music2, Trash2, Sparkles, Disc3, AudioLines } from "lucide-react";
import Dashboard from "./Dashboard";
import api from "../services/api";
import toast from "react-hot-toast";

const ListSongs = () => {
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    try {
      const response = await api.get("/api/songs");
      setSongs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSong = async (id) => {
    try {
      await api.delete(`/api/songs/${id}`);
     toast.success("Song Deleted 🗑️");
      fetchSongs();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete song");
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <Dashboard>
      <div className="min-h-screen text-white">
        <div className="relative mb-8 sm:mb-12 overflow-hidden rounded-3xl border border-green-500/10 bg-gradient-to-r from-green-500/20 via-emerald-400/10 to-transparent p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="absolute -top-20 -right-20 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-green-500/20 blur-3xl"></div>
          <div className="relative z-10">
            <div className="mb-5 flex items-center gap-3">
              <Sparkles className="h-7 w-7 sm:h-8 sm:w-8 text-green-400" />
              <p className="text-xs sm:text-sm uppercase tracking-[4px] sm:tracking-[6px] text-green-400 font-semibold">Song Management</p>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black">
              All <span className="text-green-400">Songs</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm sm:text-lg text-gray-400">
              Manage your music library, organize tracks, and remove songs from your Musify platform.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              <div className="flex items-center gap-4 rounded-2xl bg-[#181818] border border-white/10 px-5 py-4">
                <Music2 className="h-8 w-8 text-green-400"/>
                <div>
                  <h3 className="text-2xl font-bold">{songs.length}</h3>
                  <p className="text-sm text-gray-400">Total Songs</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-[#181818] border border-white/10 px-5 py-4">
                <AudioLines className="h-8 w-8 text-pink-500"/>
                <div>
                  <h3 className="text-2xl font-bold">HD</h3>
                  <p className="text-sm text-gray-400">Audio Quality</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-[#181818] border border-white/10 px-5 py-4">
                <Disc3 className="h-8 w-8 text-yellow-400"/>
                <div>
                  <h3 className="text-2xl font-bold">Musify</h3>
                  <p className="text-sm text-gray-400">Music Collection</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {songs.map((song) => (
            <div
              key={song.id}
              className="group flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-green-500/30 xl:flex-row xl:items-center xl:justify-between"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="relative shrink-0">
                  <img
                    src={`${import.meta.env.VITE_IMAGE_URL}${song.image}`}
                    alt={song.title}
                    className="h-28 w-28 sm:h-32 sm:w-32 rounded-2xl object-cover transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-green-500/10 blur-2xl opacity-0 transition group-hover:opacity-100"></div>
                </div>

                <div className="text-center sm:text-left">
                  <h2 className="break-words text-2xl sm:text-3xl font-black">{song.title}</h2>
                  <p className="mt-3 break-words text-base sm:text-lg text-gray-400">{song.artist}</p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#181818] px-4 py-2">
                    <Music2 className="h-4 w-4 text-green-400"/>
                    <span className="text-sm text-gray-300">Music Track</span>
                  </div>
                </div>
              </div>

              <div className="flex w-full xl:w-auto flex-col sm:flex-row items-center gap-4">
                <audio
                  controls
                  className="w-full sm:w-[320px] max-w-full"
                  src={`${import.meta.env.VITE_AUDIO_URL}${song.audio}`}
                />

                <button
                  onClick={() => deleteSong(song.id)}
                  className="flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 px-6 py-4 font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Trash2 className="h-5 w-5"/>
                  Delete Song
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Dashboard>
  );
};

export default ListSongs;
