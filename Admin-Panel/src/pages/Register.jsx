
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
import toast from "react-hot-toast";

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
        role: "ADMIN",
      });

      toast.success("Registration Successful 🎉");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Registration Failed");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-8 sm:px-6">
      <div className="absolute -left-24 -top-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-green-500/20 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-emerald-400/10 blur-3xl"></div>

      <form
        onSubmit={handleRegister}
        className="relative z-10 w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-2xl"
      >
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-green-500 p-3 sm:p-4 shadow-lg shadow-green-500/30">
            <Music2 className="h-8 w-8 sm:h-10 sm:w-10 text-black" />
          </div>

          <div className="mt-5 flex items-center gap-2">
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              Admin Register
            </h1>
          </div>

          <p className="mt-3 max-w-sm text-sm sm:text-base text-gray-400">
            Create your Musify admin account and manage your music platform professionally.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">Full Name</label>
            <div className="flex items-center rounded-2xl border border-[#2a2a2a] bg-[#181818] px-4 focus-within:border-green-500">
              <User className="h-5 w-5 shrink-0 text-green-400"/>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter full name" className="w-full bg-transparent p-4 text-white outline-none" required/>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">Email Address</label>
            <div className="flex items-center rounded-2xl border border-[#2a2a2a] bg-[#181818] px-4 focus-within:border-green-500">
              <Mail className="h-5 w-5 shrink-0 text-green-400"/>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email address" className="w-full bg-transparent p-4 text-white outline-none" required/>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">Password</label>
            <div className="flex items-center rounded-2xl border border-[#2a2a2a] bg-[#181818] px-4 focus-within:border-green-500">
              <LockKeyhole className="h-5 w-5 shrink-0 text-green-400"/>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Create secure password" className="w-full bg-transparent p-4 text-white outline-none" required/>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-white/10 bg-[#181818] p-5">
            <div className="rounded-2xl bg-green-500/20 p-3">
              <ShieldCheck className="h-7 w-7 text-green-400"/>
            </div>
            <div>
              <h3 className="font-bold text-white">Secure Registration</h3>
              <p className="mt-1 text-sm text-gray-400">
                Your admin account will have full access to manage Musify content.
              </p>
            </div>
          </div>

          <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-2xl bg-green-500 py-4 text-base sm:text-lg font-bold text-black transition hover:bg-green-400">
            <UserPlus className="h-5 w-5"/>
            Create Admin Account
          </button>

          <p className="text-center text-sm sm:text-base text-gray-400">
            Already have an account?
            <Link to="/" className="ml-2 font-semibold text-green-400 hover:text-green-300">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
