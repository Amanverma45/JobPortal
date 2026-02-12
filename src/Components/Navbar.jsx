import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  const navItems = ["Home", "About", "Job", "Services", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-xl border-b border-slate-700/40">

      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/Images/JP.png"
            alt="logo"
            className="w-10 h-10 brightness-0 invert"
          />
          <span className="text-2xl font-extrabold text-white tracking-tight">
            JOB<span className="text-indigo-400">PORTAL</span>
          </span>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const active = location.pathname === path;

            return (
              <Link
                key={item}
                to={path}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  active
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* AUTH */}
        <div className="flex items-center gap-4">
          {!token ? (
            <>
              <Link
                to="/login"
                className="text-slate-300 hover:text-indigo-400 font-semibold transition"
              >
                Login
              </Link>

              <Link to="/Register">
                <button className="bg-indigo-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-indigo-500 transition shadow-lg shadow-indigo-500/20">
                  Get Started
                </button>
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
              className="px-6 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition font-semibold"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
