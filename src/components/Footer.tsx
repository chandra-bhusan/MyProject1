import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Subramanyam Boys PG</h3>
            <p className="text-sm text-gray-400 mb-4">
              Premium accommodation services for students and professionals in Bangalore.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm flex flex-col items-center md:items-start">
              <a
                href="tel:+919353773283"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Phone className="w-4 h-4" />
                +91 9353773283
              </a>
              <a
                href="mailto:juisch20220010845@gmail.com"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Mail className="w-4 h-4" />
                juisch20220010845@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>BTM Layout, Bangalore – 560076</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="hidden md:block">
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm flex flex-col items-center md:items-start">
              <li><a href="#rooms" className="hover:text-white transition">Rooms</a></li>
              <li><a href="#food" className="hover:text-white transition">Food Menu</a></li>
              <li><a href="#facilities" className="hover:text-white transition">Facilities</a></li>
              <li><a href="#location" className="hover:text-white transition">Location</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 mb-6" />

        {/* Bottom Section */}
        <div className="flex justify-center md:justify-between items-center flex-col gap-2 text-sm">
          <p className="text-gray-500"><span style={{ color: '#fbbf24' }}>★★★</span> Developer: <span className="font-medium text-gray-300">Chandra Kumar</span></p>
          <p className="text-gray-500 mt-2">© 2025 Subramanyam Boys PG. All rights reserved.</p>
          <div className="flex gap-6 mt-2">
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
