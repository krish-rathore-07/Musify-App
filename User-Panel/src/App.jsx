import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Songs from "./pages/Songs";
import Player from "./pages/Player";
import Search from "./pages/Search";

const App = () => {

  return (
    <Routes>

      {/* Auth Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<Search />} />

      {/* User Routes */}
      <Route path="/home" element={<Home />} />
      <Route path="/albums/:id" element={<Albums />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/player" element={<Player />} />

    </Routes>
  );
};

export default App;