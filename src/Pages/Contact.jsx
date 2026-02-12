import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, your message has been submitted!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-100 text-gray-800">

      {/* Header */}
      <section className="py-24 px-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-200 text-lg">
            We'd love to hear from you. Reach out and our team will respond shortly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Left Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600 leading-relaxed">
              Whether you have questions about features, pricing, or anything else,
              our team is ready to answer all your questions.
            </p>

            <div className="space-y-3 text-gray-700">
              <p><strong>Email:</strong> support@jobportal.com</p>
              <p><strong>Phone:</strong> +91 9876543210</p>
              <p><strong>Location:</strong> Indore, India</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-xl shadow-lg p-10">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
