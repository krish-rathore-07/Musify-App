import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Music2, ShieldCheck } from "lucide-react";

import api from "../services/api";

const Register = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    if (password !== confirmPassword) {

      alert("Passwords do not match");

      return;
    }

    try {
     
      await api.post("/api/auth/register", {
        email,
        password,
        role: "USER",
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
      <div className="absolute top-[-150px] left-[-120px] w-[450px] h-[450px] bg-green-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-120px] w-[450px] h-[450px] bg-emerald-400/10 blur-3xl rounded-full"></div>

      {/* Register Card */}
      <form
        onSubmit={handleRegister}
        className="relative z-10 w-full max-w-[450px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-10 flex flex-col gap-6"
      >

        {/* Logo */}
        <div className="flex flex-col items-center">

          <div className="bg-green-500 p-4 rounded-full shadow-lg shadow-green-500/30">

            <Music2 className="text-black w-10 h-10" />

          </div>

          <h1 className="text-4xl font-black text-white mt-5">
            Create Account
          </h1>

          <p className="text-gray-400 mt-3 text-center max-w-sm">
            Join Musify and experience your favorite music in a whole new way.
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
            className="bg-[#181818] border border-[#2a2a2a] focus:border-green-500 outline-none text-white p-4 rounded-2xl transition-all duration-300"
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
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#181818] border border-[#2a2a2a] focus:border-green-500 outline-none text-white p-4 rounded-2xl transition-all duration-300"
            required
          />

        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-2">

          <label className="text-gray-300 text-sm">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-[#181818] border border-[#2a2a2a] focus:border-green-500 outline-none text-white p-4 rounded-2xl transition-all duration-300"
            required
          />

        </div>

        {/* Security Badge */}
        <div className="flex items-center gap-3 bg-[#181818] border border-[#2a2a2a] rounded-2xl p-4">

          <ShieldCheck className="text-green-400 w-6 h-6" />

          <p className="text-gray-300 text-sm">
            Your account information is securely protected.
          </p>

        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-bold py-4 rounded-2xl shadow-lg hover:shadow-green-500/30 text-lg"
        >
          Create Account
        </button>

        {/* Login Link */}
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