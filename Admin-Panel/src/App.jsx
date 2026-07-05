import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import AddAlbum from "./pages/AddAlbum";
import AddSong from "./pages/AddSong";

import ListAlbums from "./pages/ListAlbums";
import ListSongs from "./pages/ListSongs";

const App = () => {

  return (
    <Routes>

      {/* Auth Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Album Routes */}
      <Route path="/add-album" element={<AddAlbum />} />
      <Route path="/list-albums" element={<ListAlbums />} />

      {/* Song Routes */}
      <Route path="/add-song" element={<AddSong />} />
      <Route path="/list-songs" element={<ListSongs />} />

    </Routes>
  );
};

export default App;