import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ShieldCheck,
  LockKeyhole,
  Music2,
  Sparkles,
} from "lucide-react";

import api from "../services/api";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await api.post("/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("user", JSON.stringify(response.data));

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden px-4">

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-green-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-emerald-400/10 blur-3xl rounded-full"></div>

      {/* Login Card */}
      <form
        onSubmit={handleLogin}
        className="relative z-10 w-full max-w-[450px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-10 flex flex-col gap-6"
      >

        {/* Logo */}
        <div className="flex flex-col items-center">

          <div className="bg-green-500 p-4 rounded-full shadow-lg shadow-green-500/30">

            <Music2 className="text-black w-10 h-10" />

          </div>

          <div className="flex items-center gap-2 mt-5">

            <Sparkles className="text-green-400 w-6 h-6" />

            <h1 className="text-4xl font-black text-white">
              Admin Login
            </h1>

          </div>

          <p className="text-gray-400 mt-3 text-center max-w-sm">
            Access your Musify dashboard and manage songs, albums, and platform content.
          </p>

        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">

          <label className="text-gray-300 text-sm font-medium">
            Email Address
          </label>

          <div className="flex items-center bg-[#181818] border border-[#2a2a2a] focus-within:border-green-500 rounded-2xl px-4 transition-all duration-300">

            <ShieldCheck className="text-green-400 w-5 h-5" />

            <input
              type="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent outline-none text-white p-4"
              required
            />

          </div>

        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">

          <label className="text-gray-300 text-sm font-medium">
            Password
          </label>

          <div className="flex items-center bg-[#181818] border border-[#2a2a2a] focus-within:border-green-500 rounded-2xl px-4 transition-all duration-300">

            <LockKeyhole className="text-green-400 w-5 h-5" />

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none text-white p-4"
              required
            />

          </div>

        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-bold py-4 rounded-2xl shadow-2xl hover:shadow-green-500/30 text-lg"
        >
          Login To Dashboard
        </button>

        {/* Register */}
        <p className="text-gray-400 text-center">

          Don't have an account?

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