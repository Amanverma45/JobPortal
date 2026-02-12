import React from "react";
import { SiCssdesignawards } from "react-icons/si";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FcSalesPerformance } from "react-icons/fc";
import { GiMoneyStack } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";
import { IoCarSport } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="bg-gray-100 text-gray-800">

      {/* Top Welcome Section */}
      <section className="py-24 px-6 text-center bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Welcome to <span className="text-indigo-600">Your Dashboard</span>
          </h1>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            Start exploring opportunities and take your career to the next level.
          </p>
        </div>
      </section>

      {/* Career Options */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          <span className="text-indigo-600">Countless Career Options</span> Are Waiting
        </h2>
        <p className="text-gray-600 mb-12">
          Discover exciting opportunities and explore the perfect career path.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <SiCssdesignawards />, name: "Design" },
            { icon: <FcSalesPerformance />, name: "Sales" },
            { icon: <HiOutlineSpeakerphone />, name: "Marketing" },
            { icon: <GiMoneyStack />, name: "Finance" },
            { icon: <IoCarSport />, name: "Automobile" },
            { icon: <TbTruckDelivery />, name: "Logistics" },
            { icon: <RiAdminFill />, name: "Admin" },
            { icon: <FaRegBuilding />, name: "Construction" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-2xl text-indigo-600 mb-3 flex justify-center">
                {item.icon}
              </div>
              <h5 className="font-semibold">{item.name}</h5>
            </div>
          ))}
        </div>

        <button className="mt-10 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
          View All Categories
        </button>
      </section>

      {/* Latest Jobs Section */}
      <section className="py-20 px-6 bg-white border-t">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            <span className="text-indigo-600">Latest & Top</span> Job Openings
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-6">
            Discover new opportunities and high-demand positions available now.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <div
              key={index}
              className="bg-gray-50 border rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-indigo-600 font-semibold mb-1">Figma</h4>
              <h5 className="text-lg font-bold text-gray-900 mb-2">
                Senior Product Manager
              </h5>
              <p className="text-gray-600 text-sm mb-4">
                Lead the development of innovative product solutions.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="bg-white border px-3 py-1 rounded-full text-sm">
                  12 Positions
                </span>
                <span className="bg-white border px-3 py-1 rounded-full text-sm">
                  Full Time
                </span>
                <span className="bg-white border px-3 py-1 rounded-full text-sm">
                  $1,50,000/Year
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Welcome;
