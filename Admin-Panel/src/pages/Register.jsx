import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Music2,
  ShieldCheck,
  UserPlus,
  Sparkles,
  User,
  Mail,
  LockKeyhole,
} from "lucide-react";

import api from "../services/api";
import { meta } from "@eslint/js";
// import { meta } from "eslint-plugin-react-hooks";

const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();
   
    try {
      
      await api.post("/api/auth/register", {
        name,
        email,
        password,
        role: "ADMIN"
      });

      alert("Registration Successful");

      navigate("/");

    } catch (error) {

      console.log(error);

      alert("Registration Failed");
    }
  };

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden px-4">

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-green-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-emerald-400/10 blur-3xl rounded-full"></div>

      {/* Register Card */}
      <form
        onSubmit={handleRegister}
        className="relative z-10 w-full max-w-[500px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-10 flex flex-col gap-6"
      >

        {/* Logo */}
        <div className="flex flex-col items-center">

          <div className="bg-green-500 p-4 rounded-full shadow-lg shadow-green-500/30">

            <Music2 className="text-black w-10 h-10" />

          </div>

          <div className="flex items-center gap-2 mt-5">

            <Sparkles className="text-green-400 w-6 h-6" />

            <h1 className="text-4xl font-black text-white">
              Admin Register
            </h1>

          </div>

          <p className="text-gray-400 mt-3 text-center max-w-sm">
            Create your Musify admin account and manage your music platform professionally.
          </p>

        </div>

        {/* Name */}
        <div className="flex flex-col gap-2">

          <label className="text-gray-300 text-sm font-medium">
            Full Name
          </label>

          <div className="flex items-center bg-[#181818] border border-[#2a2a2a] focus-within:border-green-500 rounded-2xl px-4 transition-all duration-300">

            <User className="text-green-400 w-5 h-5" />

            <input
              type="text"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent outline-none text-white p-4"
              required
            />

          </div>

        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">

          <label className="text-gray-300 text-sm font-medium">
            Email Address
          </label>

          <div className="flex items-center bg-[#181818] border border-[#2a2a2a] focus-within:border-green-500 rounded-2xl px-4 transition-all duration-300">

            <Mail className="text-green-400 w-5 h-5" />

            <input
              type="email"
              placeholder="Enter email address"
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
              placeholder="Create secure password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none text-white p-4"
              required
            />

          </div>

        </div>

        {/* Security Card */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-5 flex items-center gap-4">

          <div className="bg-green-500/20 p-3 rounded-2xl">

            <ShieldCheck className="text-green-400 w-7 h-7" />

          </div>

          <div>

            <h3 className="font-bold text-white">
              Secure Registration
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              Your admin account will have full access to manage Musify content.
            </p>

          </div>

        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-bold py-4 rounded-2xl shadow-2xl hover:shadow-green-500/30 text-lg flex items-center justify-center gap-3"
        >

          <UserPlus className="w-5 h-5" />

          Create Admin Account

        </button>

        {/* Login */}
        <p className="text-gray-400 text-center">

          Already have an account?

          <Link
            to="/"
            className="text-green-400 hover:text-green-300 ml-2 font-semibold"
          >
            Login
          </Link>

        </p>

      </form>

    </div>
  );
};

export default Register;