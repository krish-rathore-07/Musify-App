// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   Heart,
//   PlayCircle,
//   Music2,
//   Disc3,
// } from "lucide-react";

// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";

// const Player = () => {

//   const navigate = useNavigate();

//   const location = useLocation();

//   const song = location.state?.song;

//   // No song selected
//   if (!song) {

//     return (
//       <div className="bg-black text-white min-h-screen flex items-center justify-center">

//         <div className="text-center">

//           <h1 className="text-4xl font-bold mb-6">
//             No Song Selected
//           </h1>

//           <button
//             onClick={() => navigate("/home")}
//             className="bg-green-500 hover:bg-green-400 transition px-6 py-3 rounded-full font-bold shadow-lg"
//           >
//             Go Back
//           </button>

//         </div>

//       </div>
//     );
//   }

//   return (
//     <div className="flex bg-black text-white min-h-screen overflow-hidden">

//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main */}
//       <div className="flex-1 flex flex-col bg-gradient-to-b from-[#1a1a1a] via-[#121212] to-black">

//         {/* Navbar */}
//         <Navbar />

//         {/* Player Content */}
//         <div className="flex-1 overflow-y-auto">

//           {/* Hero Section */}
//           <div className="relative flex flex-col lg:flex-row items-center lg:items-end gap-12 px-8 md:px-16 py-14 overflow-hidden">

//             {/* Background Glow */}
//             <div className="absolute top-0 left-0 w-full h-full bg-green-500/5 blur-3xl"></div>

//             {/* Album Cover */}
//             <div className="relative group z-10">

//               {/* Glow */}
//               <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>

//               <img
//                 src={`${import.meta.env.VITE_IMAGE_URL}${song.image}`}
//                 alt={song.title}
//                 className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-3xl object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
//               />

//             </div>

//             {/* Song Info */}
//             <div className="relative z-10 flex flex-col">

//               <div className="flex items-center gap-3 mb-5">

//                 <Disc3 className="text-green-400 w-8 h-8 animate-spin slow-spin" />

//                 <p className="uppercase tracking-[6px] text-green-400 text-sm font-semibold">
//                   Now Playing
//                 </p>

//               </div>

//               <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-4xl">
//                 {song.title}
//               </h1>

//               <p className="text-gray-400 text-xl mt-5">
//                 {song.artist}
//               </p>

//               {/* Stats */}
//               <div className="flex items-center gap-5 mt-8 text-gray-400">

//                 <div className="flex items-center gap-2">

//                   <Music2 className="w-5 h-5 text-green-400" />

//                   <span>High Quality Audio</span>

//                 </div>

//                 <div className="flex items-center gap-2">

//                   <Heart className="w-5 h-5 text-pink-500" />

//                   <span>Liked Track</span>

//                 </div>

//               </div>

//               {/* Play Button */}
//               <div className="mt-10">

//                 <button className="bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition duration-300 shadow-2xl hover:shadow-green-500/40">

//                   <PlayCircle className="w-7 h-7" />

//                   Playing Now

//                 </button>

//               </div>

//             </div>

//           </div>

//           {/* Audio Section */}
//           <div className="px-8 md:px-16 pb-16">

//             <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

//               <h2 className="text-2xl font-bold mb-6">
//                 Music Controls
//               </h2>

//               <audio
//                 controls
//                 autoPlay
//                 className="w-full custom-audio"
//                 src={`${import.meta.env.VITE_AUDIO_URL}${song.audio}`}
//               />

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default Player;




import { useLocation, useNavigate } from "react-router-dom";
import {
  Heart,
  PlayCircle,
  Music2,
  Disc3,
} from "lucide-react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Player = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const song = location.state?.song;

  // No song selected
  if (!song) {

    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center px-4">

        <div className="text-center">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            No Song Selected
          </h1>

          <button
            onClick={() => navigate("/home")}
            className="bg-green-500 hover:bg-green-400 transition px-6 py-3 rounded-full font-bold shadow-lg"
          >
            Go Back
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-black text-white overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col bg-gradient-to-b from-[#1a1a1a] via-[#121212] to-black">

        {/* Navbar */}
        <Navbar />

        {/* Player Content */}
        <div className="flex-1 overflow-y-auto">

          {/* Hero Section */}
          <div className="relative flex flex-col xl:flex-row items-center xl:items-end gap-8 lg:gap-12 px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-12 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-green-500/5 blur-3xl"></div>

            {/* Album Cover */}
            <div className="relative group z-10 shrink-0">

              {/* Glow */}
              <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <img
                src={`${import.meta.env.VITE_IMAGE_URL}${song.image}`}
                alt={song.title}
                className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-[400px] xl:h-[400px] rounded-3xl object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />

            </div>

            {/* Song Info */}
            <div className="relative z-10 flex flex-col text-center xl:text-left">

              <div className="flex items-center justify-center xl:justify-start gap-3 mb-5">

                <Disc3 className="text-green-400 w-6 h-6 sm:w-8 sm:h-8 animate-spin slow-spin" />

                <p className="uppercase tracking-[4px] sm:tracking-[6px] text-green-400 text-xs sm:text-sm font-semibold">
                  Now Playing
                </p>

              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight break-words">
                {song.title}
              </h1>

              <p className="text-gray-400 text-base sm:text-lg lg:text-xl mt-5 break-words">
                {song.artist}
              </p>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row items-center xl:items-start gap-4 sm:gap-6 mt-8 text-gray-400">

                <div className="flex items-center gap-2">

                  <Music2 className="w-5 h-5 text-green-400" />

                  <span className="text-sm sm:text-base">
                    High Quality Audio
                  </span>

                </div>

                <div className="flex items-center gap-2">

                  <Heart className="w-5 h-5 text-pink-500" />

                  <span className="text-sm sm:text-base">
                    Liked Track
                  </span>

                </div>

              </div>

              {/* Play Button */}
              <div className="mt-10 flex justify-center xl:justify-start">

                <button className="bg-green-500 hover:bg-green-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg flex items-center gap-3 transition duration-300 shadow-2xl hover:shadow-green-500/40">

                  <PlayCircle className="w-6 h-6 sm:w-7 sm:h-7" />

                  Playing Now

                </button>

              </div>

            </div>

          </div>

          {/* Audio Section */}
          <div className="px-4 sm:px-6 md:px-10 lg:px-16 pb-10 md:pb-16">

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-6 lg:p-8 shadow-2xl">

              <h2 className="text-xl sm:text-2xl font-bold mb-6">
                Music Controls
              </h2>

              <audio
                controls
                autoPlay
                className="w-full custom-audio"
                src={`${import.meta.env.VITE_AUDIO_URL}${song.audio}`}
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Player;