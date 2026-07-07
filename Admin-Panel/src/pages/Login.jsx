
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ShieldCheck, LockKeyhole, Music2, Sparkles } from "lucide-react";
import api from "../services/api";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/api/auth/login", { email, password });
      localStorage.setItem("user", JSON.stringify(response.data));
     toast.success("Login Successful 🎉");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
     toast.error("Invalid Email or Password");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-8 sm:px-6">
      <div className="absolute -left-24 -top-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-green-500/20 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-emerald-400/10 blur-3xl"></div>

      <form
        onSubmit={handleLogin}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-2xl"
      >
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-green-500 p-3 sm:p-4 shadow-lg shadow-green-500/30">
            <Music2 className="h-8 w-8 sm:h-10 sm:w-10 text-black" />
          </div>

          <div className="mt-5 flex items-center gap-2">
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              Admin Login
            </h1>
          </div>

          <p className="mt-3 max-w-sm text-sm sm:text-base text-gray-400">
            Access your Musify dashboard and manage songs, albums, and platform content.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Email Address
            </label>

            <div className="flex items-center rounded-2xl border border-[#2a2a2a] bg-[#181818] px-4 transition focus-within:border-green-500">
              <ShieldCheck className="h-5 w-5 shrink-0 text-green-400" />
              <input
                type="email"
                placeholder="Enter admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent p-4 text-white outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Password
            </label>

            <div className="flex items-center rounded-2xl border border-[#2a2a2a] bg-[#181818] px-4 transition focus-within:border-green-500">
              <LockKeyhole className="h-5 w-5 shrink-0 text-green-400" />
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent p-4 text-white outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-green-500 py-4 text-base sm:text-lg font-bold text-black transition-all duration-300 hover:bg-green-400 hover:shadow-green-500/30"
          >
            Login To Dashboard
          </button>

          <p className="text-center text-sm sm:text-base text-gray-400">
            Don't have an account?
            <Link
              to="/register"
              className="ml-2 font-semibold text-green-400 hover:text-green-300"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
