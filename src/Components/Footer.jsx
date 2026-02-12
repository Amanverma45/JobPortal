import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <img src="/Images/JP.png" alt="Logo" className="w-32 mb-4" />
          <p className="text-sm leading-6">
            Our platform is designed to help you find the perfect job and
            achieve your professional dreams.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <div className="flex flex-col space-y-2 text-sm">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/about" className="hover:text-white transition">About</Link>
            <Link to="/job" className="hover:text-white transition">Jobs</Link>
            <Link to="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex flex-col space-y-3 text-sm">
            <a href="https://www.facebook.com/share/1FgD4EXF7h/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-500 transition">
              <FaFacebookF /> Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-pink-500 transition">
              <FaInstagram /> Instagram
            </a>
            <a href="https://www.linkedin.com/in/aman-verma-2b1216350" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition">
              <FaLinkedinIn /> LinkedIn
            </a>
            <a href="https://wa.me/8435856067" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-green-500 transition">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
          <div className="flex flex-col space-y-3 text-sm">
            <a href="https://wa.me/8435856067" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-green-500 transition">
              <FaWhatsapp /> 8435856067
            </a>
            <a href="mailto:av478136@gmail.com" className="flex items-center gap-2 hover:text-yellow-400 transition">
              <MdAlternateEmail /> av478136@gmail.com
            </a>
            <p className="flex items-center gap-2">
              <FaLocationDot /> Indore, India
            </p>
          </div>
        </div>

      </div>

      <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Job Portal | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
