import { useEffect, useState } from "react";
import {
  Music2,
  Upload,
  Disc3,
  Mic2,
  ImagePlus,
  AudioLines,
  Sparkles,
} from "lucide-react";

import Dashboard from "./Dashboard";
import api from "../services/api";
import toast from "react-hot-toast";

const AddSong = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [albumId, setAlbumId] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [albums, setAlbums] = useState([]);

  const fetchAlbums = async () => {
    try {
      const response = await api.get("/api/albums");
      setAlbums(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("artist", artist);
      formData.append("albumId", albumId);
      formData.append("imageFile", imageFile);
      formData.append("audioFile", audioFile);

      await api.post("/api/songs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

     toast.success("Song Added Successfully 🎶");
      setTitle("");
      setArtist("");
      setAlbumId("");
      setImageFile(null);
      setAudioFile(null);
    } catch (error) {
      console.log(error);
   toast.error("Failed to add song");
    }
  };

  return (
    <Dashboard>
      <div className="min-h-screen bg-gradient-to-b from-[#121212] via-black to-[#0d0d0d] text-white px-4 py-6 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
          <div className="relative overflow-hidden rounded-3xl border border-green-500/10 bg-gradient-to-r from-green-500/20 via-emerald-400/10 to-transparent p-6 sm:p-8 lg:p-10 shadow-2xl">
            <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-green-500/20 blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <Sparkles className="w-7 h-7 text-green-400"/>
                <p className="uppercase tracking-[4px] text-xs sm:text-sm text-green-400 font-semibold">Admin Dashboard</p>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight">
                Upload A New <span className="text-green-400">Song</span>
              </h1>
              <p className="mt-5 max-w-xl text-base sm:text-lg text-gray-400">
                Add tracks, upload cover images, and organize music into albums with a beautiful experience.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-8 lg:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label className="mb-3 flex items-center gap-2 font-semibold"><Music2 className="w-5 h-5 text-green-400"/>Song Title</label>
                <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" required className="w-full rounded-2xl bg-[#181818] border border-[#2a2a2a] p-4 outline-none focus:border-green-500"/>
              </div>

              <div>
                <label className="mb-3 flex items-center gap-2 font-semibold"><Mic2 className="w-5 h-5 text-green-400"/>Artist Name</label>
                <input value={artist} onChange={(e)=>setArtist(e.target.value)} type="text" required className="w-full rounded-2xl bg-[#181818] border border-[#2a2a2a] p-4 outline-none focus:border-green-500"/>
              </div>

              <div>
                <label className="mb-3 flex items-center gap-2 font-semibold"><Disc3 className="w-5 h-5 text-green-400"/>Select Album</label>
                <select value={albumId} onChange={(e)=>setAlbumId(e.target.value)} required className="w-full rounded-2xl bg-[#181818] border border-[#2a2a2a] p-4 outline-none focus:border-green-500">
                  <option value="">Choose Album</option>
                  {albums.map((album)=>(
                    <option key={album.id} value={album.id}>{album.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-3 flex items-center gap-2 font-semibold"><ImagePlus className="w-5 h-5 text-green-400"/>Song Cover Image</label>
                <div className="rounded-3xl border-2 border-dashed border-[#2a2a2a] bg-[#181818] hover:border-green-500 p-6 sm:p-10 text-center">
                  <Upload className="mx-auto w-12 h-12 text-green-400 mb-4"/>
                  <input type="file" accept="image/*" onChange={(e)=>setImageFile(e.target.files[0])} required className="w-full text-sm"/>
                  {imageFile && <img src={URL.createObjectURL(imageFile)} alt="preview" className="mx-auto mt-6 h-36 w-36 sm:h-44 sm:w-44 object-cover rounded-2xl"/>}
                </div>
              </div>

              <div>
                <label className="mb-3 flex items-center gap-2 font-semibold"><AudioLines className="w-5 h-5 text-green-400"/>Upload Audio File</label>
                <div className="rounded-3xl border-2 border-dashed border-[#2a2a2a] bg-[#181818] hover:border-green-500 p-6 sm:p-10 text-center">
                  <AudioLines className="mx-auto w-12 h-12 text-green-400 mb-4"/>
                  <input type="file" accept="audio/*" onChange={(e)=>setAudioFile(e.target.files[0])} required className="w-full text-sm"/>
                  {audioFile && (
                    <div className="mt-5 rounded-2xl border border-white/10 bg-[#101010] px-4 py-3 break-all">
                      <p className="font-semibold text-green-400">{audioFile.name}</p>
                    </div>
                  )}
                </div>
              </div>

              <button type="submit" className="w-full rounded-2xl bg-green-500 py-4 text-lg font-bold text-black transition hover:bg-green-400">
                Add Song
              </button>
            </form>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default AddSong;
