import React from "react";
import { MdAccountCircle, MdManageSearch } from "react-icons/md";
import { FiUpload, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { IoBriefcase } from "react-icons/io5";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-30 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your <span className="text-teal-400">Dream Job</span> Today
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10">
            Connect with top companies, explore thousands of opportunities,
            and take the next step in your career journey.
          </p>

          <div className="flex justify-center gap-5 flex-wrap">
            
              <button className="bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 transition">
                Browse Jobs
              </button>
            

            <button className="border border-slate-500 text-slate-200 px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition flex items-center gap-2">
              For Employers
            </button>
          </div>
        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get Hired in <span className="text-indigo-600">4 Easy Steps</span>
        </h2>
        <p className="text-gray-600 mb-14">
          A simple and efficient process designed to land your perfect role.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            { icon: <MdAccountCircle />, title: "Create Account" },
            { icon: <MdManageSearch />, title: "Search Jobs" },
            { icon: <FiUpload />, title: "Upload Resume" },
            { icon: <IoBriefcase />, title: "Get Hired" },
          ].map((step, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-indigo-600 text-4xl mb-4 flex justify-center">
                {step.icon}
              </div>
              <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm">
                Start your journey with a quick and easy process tailored for success.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h3 className="text-3xl md:text-4xl font-bold">
            What We <span className="text-indigo-600">Offer</span>
          </h3>
          <p className="text-gray-600 mt-3">
            Powerful tools and services to enhance your job search experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            { img: "/Images/img1.jpeg", title: "Smart Job Matching" },
            { img: "/Images/img2.webp", title: "Professional Portfolio" },
            { img: "/Images/img3.webp", title: "Career Guidance" },
          ].map((card, i) => (
            <div key={i} className="bg-slate-50 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
              <img src={card.img} alt={card.title} className="h-52 w-full object-cover" />
              <div className="p-6">
                <h5 className="text-xl font-semibold mb-3">{card.title}</h5>
                <ul className="space-y-2 text-gray-600 text-sm mb-6">
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="text-indigo-600" />
                    Personalized job alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="text-indigo-600" />
                    Direct HR communication
                  </li>
                </ul>
                <Link to="/Register">
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>

      <footer className="py-8 text-center bg-slate-100 border-t">
        <p className="text-gray-600 text-sm">
          © 2026 JobPortal Inc. All rights reserved.
        </p>
      </footer>

    </div>
  );
};

export default Home;
