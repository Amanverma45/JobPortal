import React from "react";
import { FaUsers, FaBriefcase, FaBullseye } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* Header Section */}
      <section className="py-20 px-6 bg-gray-50 text-center border-b">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            About Our Job Portal
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our Job Portal connects talented professionals with trusted companies. 
            We make job searching and hiring simple, efficient, and reliable.
          </p>
        </div>
      </section>

      {/* 3 Info Cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white border rounded-lg p-8 shadow-sm hover:shadow-md transition">
            <FaBriefcase className="text-indigo-600 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-3">What We Do</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We simplify the hiring process with a user-friendly platform
              where candidates explore verified jobs and recruiters post openings easily.
            </p>
          </div>

          <div className="bg-white border rounded-lg p-8 shadow-sm hover:shadow-md transition">
            <FaUsers className="text-indigo-600 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-3">Who We Are</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A dedicated team of developers and HR professionals building 
              modern solutions for today’s workforce.
            </p>
          </div>

          <div className="bg-white border rounded-lg p-8 shadow-sm hover:shadow-md transition">
            <FaBullseye className="text-indigo-600 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To create equal opportunities for job seekers and help companies 
              find the right talent efficiently.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">
            Why Choose Us?
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            We offer smart job recommendations, seamless applications, and verified company listings.
            Whether you're starting your career or expanding your business, 
            our platform provides the tools and support you need.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;
