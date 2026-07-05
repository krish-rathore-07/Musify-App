import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";

const SongItem = ({ song }) => {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/player", { state: { song } })}
      className="group min-w-[220px] bg-[#181818] hover:bg-[#282828] p-4 rounded-2xl cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2"
    >

      {/* Image Container */}
      <div className="relative overflow-hidden rounded-xl">

        <img
          src={`http://localhost:8080/images/${song.image}`}
          alt={song.title}
          className="w-full h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
        />

        {/* Play Button */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition duration-300">

          <div className="bg-green-500 hover:bg-green-400 p-3 rounded-full shadow-xl">

            <Play
              fill="black"
              className="text-black w-5 h-5"
            />

          </div>

        </div>

      </div>

      {/* Song Details */}
      <div className="mt-4">

        <h2 className="text-white text-lg font-bold truncate">
          {song.title || "Unknown Song"}
        </h2>

        <p className="text-gray-400 text-sm mt-1 line-clamp-2">
          {song.artist || "No Description"}
        </p>

      </div>

    </div>
  );
};

export default SongItem;