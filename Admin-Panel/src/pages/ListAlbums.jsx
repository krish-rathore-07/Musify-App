import { useEffect, useState } from "react";
import { Disc3, Trash2, Sparkles, Music2 } from "lucide-react";
import Dashboard from "./Dashboard";
import api from "../services/api";
import toast from "react-hot-toast";

const ListAlbums = () => {
  const [albums, setAlbums] = useState([]);

  const fetchAlbums = async () => {
    try {
      const response = await api.get("/api/albums");
      setAlbums(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAlbum = async (id) => {
    try {
      await api.delete(`/api/albums/${id}`);
       toast.success("Album Deleted 🗑️");
      fetchAlbums();
    } catch (error) {
      console.log(error);
       toast.error("Failed to delete album");
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <Dashboard>
      <div className="min-h-screen text-white">
        <div className="relative mb-8 sm:mb-12 overflow-hidden rounded-3xl border border-green-500/10 bg-gradient-to-r from-green-500/20 via-emerald-400/10 to-transparent p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="absolute -top-20 -right-20 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-green-500/20 blur-3xl"></div>

          <div className="relative z-10">
            <div className="mb-5 flex items-center gap-3">
              <Sparkles className="h-7 w-7 sm:h-8 sm:w-8 text-green-400" />
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[4px] sm:tracking-[6px] text-green-400">
                Album Management
              </p>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight">
              All <span className="text-green-400">Albums</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm sm:text-lg leading-relaxed text-gray-400">
              Manage, organize, and delete albums from your Musify platform with ease.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#181818] px-5 py-4">
                <Disc3 className="h-8 w-8 text-green-400" />
                <div>
                  <h3 className="text-2xl font-bold">{albums.length}</h3>
                  <p className="text-sm text-gray-400">Total Albums</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#181818] px-5 py-4">
                <Music2 className="h-8 w-8 text-pink-500" />
                <div>
                  <h3 className="text-2xl font-bold">Musify</h3>
                  <p className="text-sm text-gray-400">Music Collection</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {albums.map((album) => (
            <div
              key={album.id}
              className="group flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-green-500/30 lg:flex-row lg:items-center lg:justify-between"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="relative shrink-0">
                  <img
                    src={`${import.meta.env.VITE_IMAGE_URL}${album.image}`}
                    alt={album.name}
                    className="h-28 w-28 sm:h-32 sm:w-32 rounded-2xl object-cover transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-green-500/10 blur-2xl opacity-0 transition group-hover:opacity-100"></div>
                </div>

                <div className="text-center sm:text-left">
                  <h2 className="break-words text-2xl sm:text-3xl font-black">
                    {album.name}
                  </h2>

                  <p className="mt-3 max-w-2xl break-words text-gray-400">
                    {album.desc}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#181818] px-4 py-2">
                    <Disc3 className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">Music Album</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => deleteAlbum(album.id)}
                className="flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 px-6 py-4 font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Trash2 className="h-5 w-5" />
                Delete Album
              </button>
            </div>
          ))}
        </div>
      </div>
    </Dashboard>
  );
};

export default ListAlbums;
