import React from "react";

const demoClients = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },
  { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
];

const Client = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* Header */}
      <section className="py-24 px-6 text-center bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto">

          <span className="inline-block text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-1 rounded-full mb-4">
            Trusted Partners
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Companies We Work With
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We proudly collaborate with globally recognized organizations
            and innovative companies across industries.
          </p>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center">

          {demoClients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}

        </div>
      </section>

      {/* Bottom Trust Line */}
      <section className="py-12 bg-gray-50 text-center border-t">
        <p className="text-gray-600 text-sm">
          Join thousands of professionals and companies who trust our platform.
        </p>
      </section>

    </div>
  );
};

export default Client;
