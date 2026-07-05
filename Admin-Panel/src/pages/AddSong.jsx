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

const AddSong = () => {

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [albumId, setAlbumId] = useState("");

  const [imageFile, setImageFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);

  const [albums, setAlbums] = useState([]);

  // Load Albums
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

  // Submit Song
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

      alert("Song Added Successfully");

      setTitle("");
      setArtist("");
      setAlbumId("");

      setImageFile(null);
      setAudioFile(null);

    } catch (error) {

      console.log(error);

      alert("Failed to add song");
    }
  };

  return (
    <Dashboard>

      <div className="min-h-screen bg-gradient-to-b from-[#121212] via-black to-[#0d0d0d] text-white p-6 md:p-10">

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-500/20 via-emerald-400/10 to-transparent border border-green-500/10 p-10 mb-12 shadow-2xl">

          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>

          <div className="relative z-10">

            <div className="flex items-center gap-3 mb-5">

              <Sparkles className="text-green-400 w-8 h-8" />

              <p className="uppercase tracking-[6px] text-green-400 text-sm font-semibold">
                Admin Dashboard
              </p>

            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              Upload A New <span className="text-green-400">Song</span>
            </h1>

            <p className="text-gray-400 text-lg mt-6 max-w-2xl leading-relaxed">
              Add tracks, upload cover images, and organize music into albums with a beautiful experience.
            </p>

          </div>

        </div>

        {/* Form Card */}
        <div className="max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-10">

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >

            {/* Song Title */}
            <div>

              <label className="flex items-center gap-2 text-lg font-semibold mb-3">

                <Music2 className="text-green-400 w-5 h-5" />

                Song Title

              </label>

              <input
                type="text"
                placeholder="Enter song title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-[#181818] border border-[#2a2a2a] focus:border-green-500 outline-none text-white p-4 rounded-2xl transition-all duration-300"
                required
              />

            </div>

            {/* Artist Name */}
            <div>

              <label className="flex items-center gap-2 text-lg font-semibold mb-3">

                <Mic2 className="text-green-400 w-5 h-5" />

                Artist Name

              </label>

              <input
                type="text"
                placeholder="Enter artist name"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                className="w-full bg-[#181818] border border-[#2a2a2a] focus:border-green-500 outline-none text-white p-4 rounded-2xl transition-all duration-300"
                required
              />

            </div>

            {/* Select Album */}
            <div>

              <label className="flex items-center gap-2 text-lg font-semibold mb-3">

                <Disc3 className="text-green-400 w-5 h-5" />

                Select Album

              </label>

              <select
                value={albumId}
                onChange={(e) => setAlbumId(e.target.value)}
                className="w-full bg-[#181818] border border-[#2a2a2a] focus:border-green-500 outline-none text-white p-4 rounded-2xl transition-all duration-300"
                required
              >

                <option value="">
                  Choose Album
                </option>

                {albums.map((album) => (
                  <option
                    key={album.id}
                    value={album.id}
                  >
                    {album.name}
                  </option>
                ))}

              </select>

            </div>

            {/* Upload Image */}
            <div>

              <label className="flex items-center gap-2 text-lg font-semibold mb-3">

                <ImagePlus className="text-green-400 w-5 h-5" />

                Song Cover Image

              </label>

              <div className="bg-[#181818] border-2 border-dashed border-[#2a2a2a] hover:border-green-500 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center justify-center">

                <Upload className="text-green-400 w-14 h-14 mb-5" />

                <p className="text-lg font-semibold mb-2">
                  Upload Song Cover
                </p>

                <p className="text-gray-400 text-sm mb-5">
                  PNG, JPG or JPEG supported
                </p>

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files[0])}
                  className="text-gray-300"
                  required
                />

                {imageFile && (

                  <div className="mt-6">

                    <img
                      src={URL.createObjectURL(imageFile)}
                      alt="preview"
                      className="w-40 h-40 object-cover rounded-2xl shadow-2xl"
                    />

                  </div>

                )}

              </div>

            </div>

            {/* Upload Audio */}
            <div>

              <label className="flex items-center gap-2 text-lg font-semibold mb-3">

                <AudioLines className="text-green-400 w-5 h-5" />

                Upload Audio File

              </label>

              <div className="bg-[#181818] border-2 border-dashed border-[#2a2a2a] hover:border-green-500 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center justify-center">

                <AudioLines className="text-green-400 w-14 h-14 mb-5" />

                <p className="text-lg font-semibold mb-2">
                  Upload Song Audio
                </p>

                <p className="text-gray-400 text-sm mb-5">
                  MP3, WAV supported
                </p>

                <input
                  type="file"
                  accept="audio/*"
                  onChange={(e) => setAudioFile(e.target.files[0])}
                  className="text-gray-300"
                  required
                />

                {audioFile && (

                  <div className="mt-5 bg-[#101010] px-5 py-3 rounded-2xl border border-white/10">

                    <p className="text-green-400 font-semibold">
                      {audioFile.name}
                    </p>

                  </div>

                )}

              </div>

            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-bold py-5 rounded-2xl shadow-2xl hover:shadow-green-500/30 text-lg"
            >
              Add Song
            </button>

          </form>

        </div>

      </div>

    </Dashboard>
  );
};

export default AddSong;