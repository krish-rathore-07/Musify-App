
import toast from "react-hot-toast";
import { useState } from "react";
import {
  ImagePlus,
  Palette,
  Disc3,
  Sparkles,
  Upload,
} from "lucide-react";

import Dashboard from "./Dashboard";
import api from "../services/api";

const AddAlbum = () => {
  // Keep your existing useState declarations here exactly as they are.
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [bgColor, setBgColor] = useState("#1DB954");
  const [imageFile, setImageFile] = useState(null);

  // Keep your existing handleSubmit exactly as it is.
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const formData = new FormData();

      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("bgColor", bgColor);
      formData.append("imageFile", imageFile);

      await api.post("/api/albums", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Album Added Successfully 🎵");

      setName("");
      setDesc("");
      setBgColor("#1DB954");
      setImageFile(null);

    } catch (error) {

      console.log(error);

      toast.error("Failed to add album");
    }
  };

  return (
    <Dashboard>
      <div className="min-h-screen bg-gradient-to-b from-[#121212] via-black to-[#0d0d0d] text-white px-4 py-6 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
          <div className="relative overflow-hidden rounded-3xl border border-green-500/10 bg-gradient-to-r from-green-500/20 via-emerald-400/10 to-transparent p-6 sm:p-8 lg:p-10 shadow-2xl">
            <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-green-500/20 blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-green-400 w-7 h-7" />
                <p className="uppercase tracking-[4px] text-green-400 text-xs sm:text-sm font-semibold">
                  Admin Panel
                </p>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight">
                Create A New <span className="text-green-400">Album</span>
              </h1>

              <p className="mt-5 max-w-xl text-gray-400 text-base sm:text-lg leading-relaxed">
                Upload stunning album covers, add descriptions, and organize your music beautifully.
              </p>
            </div>
          </div>

          <div className="w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-5 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label className="mb-3 flex items-center gap-2 font-semibold">
                  <Disc3 className="w-5 h-5 text-green-400" />
                  Album Name
                </label>

                <input
                  type="text"
                  placeholder="Enter album name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  className="w-full rounded-2xl border border-[#2a2a2a] bg-[#181818] p-4 outline-none focus:border-green-500"
                  required
                />
              </div>

              <div>
                <label className="mb-3 flex items-center gap-2 font-semibold">
                  <Sparkles className="w-5 h-5 text-green-400" />
                  Album Description
                </label>

                <textarea
                  rows="5"
                  value={desc}
                  onChange={(e)=>setDesc(e.target.value)}
                  className="w-full rounded-2xl border border-[#2a2a2a] bg-[#181818] p-4 resize-none outline-none focus:border-green-500"
                  required
                />
              </div>

              <div>
                <label className="mb-3 flex items-center gap-2 font-semibold">
                  <Palette className="w-5 h-5 text-green-400" />
                  Background Color
                </label>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-[#2a2a2a] bg-[#181818] p-4">
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e)=>setBgColor(e.target.value)}
                    className="h-14 w-full sm:w-20 cursor-pointer rounded-xl bg-transparent"
                  />

                  <div
                    className="h-14 w-full sm:w-20 rounded-xl border border-white/10"
                    style={{backgroundColor:bgColor}}
                  />

                  <p className="text-gray-400 break-all">{bgColor}</p>
                </div>
              </div>

              <div>
                <label className="mb-3 flex items-center gap-2 font-semibold">
                  <ImagePlus className="w-5 h-5 text-green-400" />
                  Album Cover
                </label>

                <div className="rounded-3xl border-2 border-dashed border-[#2a2a2a] bg-[#181818] p-6 sm:p-10 text-center hover:border-green-500 transition">
                  <Upload className="mx-auto mb-4 h-12 w-12 text-green-400" />

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e)=>setImageFile(e.target.files[0])}
                    className="w-full text-sm text-gray-300"
                    required
                  />

                  {imageFile && (
                    <img
                      src={URL.createObjectURL(imageFile)}
                      alt="preview"
                      className="mx-auto mt-6 h-36 w-36 sm:h-44 sm:w-44 rounded-2xl object-cover"
                    />
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-green-500 py-4 font-bold text-black transition hover:bg-green-400"
              >
                Add Album
              </button>
            </form>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default AddAlbum;
