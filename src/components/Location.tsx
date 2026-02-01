export default function Location() {
  return (
    <section id="location" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
          <img src="/location/cylocation1.png" alt="Location" className="w-8 h-8 md:w-10 md:h-10" />
          <h2 className="text-2xl md:text-4xl font-bold text-gray-700">Location</h2>
        </div>
      </div>
      <div className="px-8">
        <hr className="border-t-2 border-gray-300 mb-8" />
      </div>
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 order-2 lg:order-1">

            <div className="flex items-start gap-4">
              <img src="/location/cylocation2.png" alt="Address" className="w-5 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Luxury PG & Accodomation<br />
                  Plot No. 29, Jubilee Enclave,<br />
                  Jain College Opposite Road,<br />
                  Bangalore – 560069<br />
                  Karnataka, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl sm:text-3xl flex-shrink-0">🚉</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-2">Nearest Metro Station</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li className="text-base sm:text-lg text-gray-600">HITEC City Metro Station (Blue Line)</li>
                  <li className="text-base sm:text-lg text-gray-600">Durgam Cheruvu Metro Station</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl sm:text-3xl flex-shrink-0">🚌</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-2">Nearby Bus Stops</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li className="text-base sm:text-lg text-gray-600">HITEC City Bus Stop</li>
                  <li className="text-base sm:text-lg text-gray-600">Jubilee Enclave Bus Stop</li>
                  <li className="text-base sm:text-lg text-gray-600">Cyber Towers Bus Stop</li>
                  <li className="text-base sm:text-lg text-gray-600">Madhapur Bus Stop</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl sm:text-3xl flex-shrink-0">🏢</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-2">Nearby Colleges & Institutions</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li className="text-base sm:text-lg text-gray-600">IIIT Bangalore</li>
                  <li className="text-base sm:text-lg text-gray-600">International School of Business (ISB), Gachibowli</li>
                  <li className="text-base sm:text-lg text-gray-600">Jain University</li>
                  <li className="text-base sm:text-lg text-gray-600">Dayanand Sagar College</li>
                </ul>
              </div>
            </div>

            <p className="text-base sm:text-lg text-gray-600 font-bold text-center sm:text-left">
              Well connected by metro, bus, auto, cab, and bike taxi services.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-4 order-1 lg:order-2 max-w-sm mx-auto sm:max-w-none lg:mt-16">
            <div className="bg-gray-200 rounded-xl overflow-hidden h-44 sm:h-72 lg:h-72 flex items-center justify-center relative">
              <img
                src="/location/cylocation3.png"
                alt="Map Location"
                className="w-full h-full object-cover"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/WVoUbBSbpMAGgd5t7"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold py-2 px-4 sm:py-4 sm:px-8 lg:py-3 lg:px-6 lg:text-lg rounded-full text-base sm:text-xl shadow-lg hover:shadow-xl transition">
                Check here
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
