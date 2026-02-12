import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const demoJobs = [
  {
    title: "Frontend Developer",
    company: "TechSolutions Pvt Ltd",
    location: "Indore, Onsite",
    type: "Full-time",
  },
  {
    title: "Java Backend Developer",
    company: "Innovatech Systems",
    location: "Indore, Onsite",
    type: "Full-time",
  },
  {
    title: "UI/UX Designer",
    company: "Creative Minds",
    location: "Indore, Onsite",
    type: "Contract",
  },
  {
    title: "Digital Marketing Executive",
    company: "GrowthHackers",
    location: "Indore, Onsite",
    type: "Part-time",
  },
];

const Job = () => {
  return (
    <div className="bg-gray-100 text-gray-800">

      {/* Header Section */}
      <section className="py-24 px-6 bg-gray-50 text-center border-b">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Find Your <span className="text-indigo-600">Dream Job</span> in Indore
          </h2>

          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>

          <p className="text-gray-600 text-lg">
            Explore verified onsite opportunities and apply easily with top companies.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-6 max-w-5xl mx-auto">

        {demoJobs.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-200 p-6 mb-6 transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">

              <div>
                <h3 className="text-2xl font-bold text-indigo-600 hover:text-indigo-900 transition cursor-pointer">
                  {job.title}
                </h3>


                <p className="text-gray-600 mb-1 flex items-center gap-2">
                  <FaBriefcase className="text-gray-500" />
                  {job.company}
                </p>

                <p className="text-gray-600 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-gray-500" />
                  {job.location}
                </p>
              </div>

              <div className="mt-4 md:mt-0">
                <span className="inline-flex items-center gap-2 bg-gray-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold">
                  <FaClock />
                  {job.type}
                </span>
              </div>

            </div>
          </div>
        ))}

      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-white border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl text-indigo-600 font-bold mb-6">
            Why Use Our Job Portal?
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Get verified job opportunities, personalized recommendations, and an easy
            application process. Whether you are starting your career or growing professionally,
            our platform provides everything you need to succeed.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Job;
