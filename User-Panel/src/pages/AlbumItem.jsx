import { useNavigate } from "react-router-dom";
import { Music2 } from "lucide-react";

const AlbumItem = ({ album }) => {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/albums/${album.id}`)}
      className="group min-w-[240px] bg-gradient-to-b from-[#1e1e1e] to-[#121212] p-4 rounded-3xl cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:bg-[#1f1f1f] hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)] border border-[#2a2a2a]"
    >

      {/* Album Image */}
      <div className="relative overflow-hidden rounded-2xl">

        <img
          src={`http://localhost:8080/images/${album.image}`}
          alt={album.name}
          className="w-full h-60 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-300 rounded-2xl"></div>

        {/* Floating Music Icon */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-5 group-hover:translate-y-0">

          <div className="bg-green-500 p-3 rounded-full shadow-2xl">

            <Music2 className="text-black w-5 h-5" />

          </div>

        </div>

      </div>

      {/* Album Details */}
      <div className="mt-5">

        <h2 className="text-white text-xl font-bold truncate tracking-wide">
          {album.name}
        </h2>

        <p className="text-gray-400 text-sm mt-2 leading-relaxed line-clamp-2">
          {album.desc}
        </p>

      </div>

    </div>
  );
};

export default AlbumItem;