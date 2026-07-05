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

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [bgColor, setBgColor] = useState("#1DB954");
  const [imageFile, setImageFile] = useState(null);

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

      alert("Album Added Successfully");

      setName("");
      setDesc("");
      setBgColor("#1DB954");
      setImageFile(null);

    } catch (error) {

      console.log(error);

      alert("Failed to add album");
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
                Admin Panel
              </p>

            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              Create A New <span className="text-green-400">Album</span>
            </h1>

            <p className="text-gray-400 text-lg mt-6 max-w-2xl leading-relaxed">
              Upload stunning album covers, add descriptions, and organize your music beautifully.
            </p>

          </div>

        </div>

        {/* Form Card */}
        <div className="max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-10">

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >

            {/* Album Name */}
            <div>

              <label className="flex items-center gap-2 text-lg font-semibold mb-3">

                <Disc3 className="text-green-400 w-5 h-5" />

                Album Name

              </label>

              <input
                type="text"
                placeholder="Enter album name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#181818] border border-[#2a2a2a] focus:border-green-500 outline-none text-white p-4 rounded-2xl transition-all duration-300"
                required
              />

            </div>

            {/* Description */}
            <div>

              <label className="flex items-center gap-2 text-lg font-semibold mb-3">

                <Sparkles className="text-green-400 w-5 h-5" />

                Album Description

              </label>

              <textarea
                placeholder="Write something about this album..."
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                rows="5"
                className="w-full bg-[#181818] border border-[#2a2a2a] focus:border-green-500 outline-none text-white p-4 rounded-2xl transition-all duration-300 resize-none"
                required
              />

            </div>

            {/* Color Picker */}
            <div>

              <label className="flex items-center gap-2 text-lg font-semibold mb-3">

                <Palette className="text-green-400 w-5 h-5" />

                Background Color

              </label>

              <div className="flex items-center gap-5 bg-[#181818] border border-[#2a2a2a] p-4 rounded-2xl">

                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-20 h-14 rounded-xl cursor-pointer border-none bg-transparent"
                />

                <div
                  className="w-20 h-14 rounded-xl shadow-lg border border-white/10"
                  style={{ backgroundColor: bgColor }}
                ></div>

                <p className="text-gray-400">
                  Selected Color: {bgColor}
                </p>

              </div>

            </div>

            {/* Image Upload */}
            <div>

              <label className="flex items-center gap-2 text-lg font-semibold mb-3">

                <ImagePlus className="text-green-400 w-5 h-5" />

                Album Cover

              </label>

              <div className="relative border-2 border-dashed border-[#2a2a2a] hover:border-green-500 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center justify-center bg-[#181818]">

                <Upload className="text-green-400 w-14 h-14 mb-5" />

                <p className="text-lg font-semibold mb-2">
                  Upload Album Image
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

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-bold py-5 rounded-2xl shadow-2xl hover:shadow-green-500/30 text-lg"
            >
              Add Album
            </button>

          </form>

        </div>

      </div>

    </Dashboard>
  );
};

export default AddAlbum;