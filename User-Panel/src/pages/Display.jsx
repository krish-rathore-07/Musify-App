import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import Home from "../pages/Home";
import Albums from "../pages/Albums";
import Songs from "../pages/Songs";
import Player from "../pages/Player";

const Display = () => {

  return (
    <div className="flex bg-black min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        {/* Navbar */}
        <Navbar />

        {/* Pages */}
        <div className="p-5">

          <Routes>

            <Route path="/home" element={<Home />} />

            <Route path="/albums/:id" element={<Albums />} />

            <Route path="/songs" element={<Songs />} />

            <Route path="/player" element={<Player />} />

          </Routes>

        </div>

      </div>

    </div>
  );
};

export default Display;