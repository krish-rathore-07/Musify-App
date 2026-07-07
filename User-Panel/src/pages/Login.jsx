// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Music2 } from "lucide-react";

// import api from "../services/api";

// const Login = () => {

//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {

//     e.preventDefault();

//     try {

//       const response = await api.post("/api/auth/login", {
//         email,
//         password,
//       });

//       localStorage.setItem("user", JSON.stringify(response.data));

//       alert("Login Successful");

//       navigate("/home");

//     } catch (error) {

//       console.log(error);

//       alert("Invalid Email or Password");
//     }
//   };

//   return (
//     <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-green-500/20 blur-3xl rounded-full"></div>

//       <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-emerald-400/10 blur-3xl rounded-full"></div>

//       {/* Login Card */}
//       <form
//         onSubmit={handleLogin}
//         className="relative z-10 w-[420px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-10 flex flex-col gap-6"
//       >

//         {/* Logo */}
//         <div className="flex flex-col items-center">

//           <div className="bg-green-500 p-4 rounded-full shadow-lg shadow-green-500/30">

//             <Music2 className="text-black w-10 h-10" />

//           </div>

//           <h1 className="text-4xl font-black text-white mt-5">
//             Musify
//           </h1>

//           <p className="text-gray-400 mt-2 text-center">
//             Stream your favorite music anytime
//           </p>

//         </div>

//         {/* Email */}
//         <div className="flex flex-col gap-2">

//           <label className="text-gray-300 text-sm">
//             Email Address
//           </label>

//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="bg-[#181818] border border-[#2a2a2a] focus:border-green-500 outline-none text-white p-4 rounded-xl transition"
//             required
//           />

//         </div>

//         {/* Password */}
//         <div className="flex flex-col gap-2">

//           <label className="text-gray-300 text-sm">
//             Password
//           </label>

//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="bg-[#181818] border border-[#2a2a2a] focus:border-green-500 outline-none text-white p-4 rounded-xl transition"
//             required
//           />

//         </div>

//         {/* Login Button */}
//         <button
//           type="submit"
//           className="mt-2 bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-bold py-4 rounded-xl shadow-lg hover:shadow-green-500/30"
//         >
//           Login
//         </button>

//         {/* Register */}
//         <p className="text-gray-400 text-center">

//           Don’t have an account?

//           <Link
//             to="/register"
//             className="text-green-400 hover:text-green-300 ml-2 font-semibold"
//           >
//             Register
//           </Link>

//         </p>

//       </form>

//     </div>
//   );
// };

// export default Login;




import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Music2 } from "lucide-react";
import toast from "react-hot-toast";
import api from "../services/api";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

  e.preventDefault();

  const loadingToast = toast.loading("Signing you in...");

  try {

    const response = await api.post("/api/auth/login", {
      email,
      password,
    });

    localStorage.setItem("user", JSON.stringify(response.data));

    toast.success("Login Successful 🎉", {
      id: loadingToast,
    });

    navigate("/home");

  } catch (error) {

    console.log(error);

    toast.error("Invalid Email or Password", {
      id: loadingToast,
    });

  }
};
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden px-4 py-8">

      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] bg-green-500/20 blur-3xl rounded-full"></div>

      <div className="absolute -bottom-24 -right-24 w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] bg-emerald-400/10 blur-3xl rounded-full"></div>

      {/* Login Card */}
      <form
        onSubmit={handleLogin}
        className="relative z-10 w-full max-w-[420px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col gap-6"
      >

        {/* Logo */}
        <div className="flex flex-col items-center">

          <div className="bg-green-500 p-3 sm:p-4 rounded-full shadow-lg shadow-green-500/30">

            <Music2 className="text-black w-8 h-8 sm:w-10 sm:h-10" />

          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white mt-5">
            Musify
          </h1>

          <p className="text-gray-400 mt-2 text-center text-sm sm:text-base">
            Stream your favorite music anytime
          </p>

        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">

          <label className="text-gray-300 text-sm">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#181818] border border-[#2a2a2a] focus:border-green-500 outline-none text-white p-3 sm:p-4 rounded-xl transition"
            required
          />

        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">

          <label className="text-gray-300 text-sm">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#181818] border border-[#2a2a2a] focus:border-green-500 outline-none text-white p-3 sm:p-4 rounded-xl transition"
            required
          />

        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="mt-2 bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-bold py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-green-500/30"
        >
          Login
        </button>

        {/* Register */}
        <p className="text-gray-400 text-center text-sm sm:text-base">

          Don’t have an account?

          <Link
            to="/register"
            className="text-green-400 hover:text-green-300 ml-2 font-semibold"
          >
            Register
          </Link>

        </p>

      </form>

    </div>
  );
};

export default Login;