// import { Routes, Route } from "react-router-dom";

// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";

// import Home from "../pages/Home";
// import Albums from "../pages/Albums";
// import Songs from "../pages/Songs";
// import Player from "../pages/Player";

// const Display = () => {

//   return (
//     <div className="flex bg-black min-h-screen">

//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1">

//         {/* Navbar */}
//         <Navbar />

//         {/* Pages */}
//         <div className="p-5">

//           <Routes>

//             <Route path="/home" element={<Home />} />

//             <Route path="/albums/:id" element={<Albums />} />

//             <Route path="/songs" element={<Songs />} />

//             <Route path="/player" element={<Player />} />

//           </Routes>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default Display;


import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import Home from "../pages/Home";
import Albums from "../pages/Albums";
import Songs from "../pages/Songs";
import Player from "../pages/Player";

const Display = () => {
  return (
    <div className="min-h-screen flex bg-black text-white overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Navbar */}
        <Navbar />

        {/* Pages */}
        <main className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 md:px-8 lg:px-10">
          <Routes>

            <Route path="/home" element={<Home />} />

            <Route path="/albums/:id" element={<Albums />} />

            <Route path="/songs" element={<Songs />} />

            <Route path="/player" element={<Player />} />

          </Routes>
        </main>

      </div>

    </div>
  );
};

export default Display;