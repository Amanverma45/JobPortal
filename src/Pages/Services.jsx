import React from "react";
import { FaLaptopCode, FaMobileAlt, FaChartLine } from "react-icons/fa";

const Services = () => {
  const servicesList = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description:
        "We build responsive, high-performance websites tailored to your business needs.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description:
        "Custom mobile applications for iOS and Android that engage users effectively.",
    },
    {
      icon: <FaChartLine />,
      title: "Digital Marketing",
      description:
        "Boost your online presence with SEO, social media, and targeted campaigns.",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800">

      {/* Header Section */}
      <section className="py-24 px-6 bg-gray-50 text-center border-b">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-indigo-600">Services</span>
          </h2>

          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>

          <p className="text-gray-600 text-lg">
            We provide professional solutions designed to help your business grow
            and succeed in a competitive market.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">

          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md p-8 transition"
            >
              <div className="text-indigo-600 text-3xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Services;
