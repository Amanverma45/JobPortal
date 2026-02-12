// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const token = localStorage.getItem("token");
//   const location = useLocation();

//   const navItems = ["Home", "About", "Job", "Services", "Contact"];

//   return (
//     <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-700">
//       <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex justify-between items-center">

//         {/* LOGO */}
//         <Link to="/" className="flex items-center gap-2">
//           <img
//             src="/Images/JP.png"
//             alt="logo"
//             className="w-8 h-8 md:w-10 md:h-10 brightness-0 invert"
//           />
//           <span className="text-lg md:text-2xl font-bold text-white">
//             JOB<span className="text-indigo-400">PORTAL</span>
//           </span>
//         </Link>

//         {/* DESKTOP NAV */}
//         <div className="hidden md:flex items-center gap-6">
//           {navItems.map((item) => {
//             const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
//             const active = location.pathname === path;

//             return (
//               <Link
//                 key={item}
//                 to={path}
//                 className={`px-3 py-2 rounded-md text-sm font-semibold transition ${
//                   active
//                     ? "bg-indigo-600 text-white"
//                     : "text-slate-300 hover:bg-slate-700 hover:text-white"
//                 }`}
//               >
//                 {item}
//               </Link>
//             );
//           })}
//         </div>

//         {/* AUTH */}
//         <div className="flex items-center gap-2 md:gap-4">
//           {!token ? (
//             <>
//               <Link
//                 to="/login"
//                 className="text-slate-300 text-sm md:text-base hover:text-indigo-400 font-medium"
//               >
//                 Login
//               </Link>

//               <Link to="/Register">
//                 <button className="bg-indigo-600 px-3 md:px-5 py-1.5 md:py-2 rounded-md text-white text-sm md:text-base font-semibold hover:bg-indigo-500 transition">
//                   Sign Up
//                 </button>
//               </Link>
//             </>
//           ) : (
//             <button
//               onClick={() => {
//                 localStorage.removeItem("token");
//                 window.location.href = "/login";
//               }}
//               className="px-3 md:px-5 py-1.5 md:py-2 rounded-md bg-red-500 text-white text-sm md:text-base font-semibold hover:bg-red-600 transition"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  // Mobile menu open/close state
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Job", "Services", "Contact"];

  return (
    <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex justify-between items-center">

        {/* ===== LOGO ===== */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/Images/JP.png"
            alt="logo"
            className="w-8 h-8 md:w-10 md:h-10 brightness-0 invert"
          />
          <span className="text-lg md:text-2xl font-bold text-white">
            JOB<span className="text-indigo-400">PORTAL</span>
          </span>
        </Link>

        {/* ===== DESKTOP NAV LINKS ===== */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const path =
              item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const active = location.pathname === path;

            return (
              <Link
                key={item}
                to={path}
                className={`px-3 py-2 rounded-md text-sm font-semibold transition ${
                  active
                    ? "bg-indigo-600 text-white"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* ===== AUTH + MOBILE MENU BUTTON ===== */}
        <div className="flex items-center gap-3">

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {!token ? (
              <>
                <Link
                  to="/login"
                  className="text-slate-300 hover:text-indigo-400 text-sm font-medium"
                >
                  Login
                </Link>

                <Link to="/register">
                  <button className="bg-indigo-600 px-4 py-2 rounded-md text-white text-sm font-semibold hover:bg-indigo-500 transition">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.href = "/login";
                }}
                className="px-4 py-2 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700 px-6 py-4 space-y-4">

          {navItems.map((item) => {
            const path =
              item === "Home" ? "/" : `/${item.toLowerCase()}`;

            return (
              <Link
                key={item}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="block text-slate-300 hover:text-white"
              >
                {item}
              </Link>
            );
          })}

          <hr className="border-slate-700" />

          {!token ? (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block text-slate-300 hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="block text-indigo-400 font-semibold"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                setMenuOpen(false);
                window.location.href = "/login";
              }}
              className="block text-red-400"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
