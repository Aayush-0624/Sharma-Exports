import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Sharma Global Exports
          </h2>

          <p className="text-gray-400">
            We are a trusted export company supplying high quality
            products to international markets worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>

          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Export Products
          </h3>

          <ul className="space-y-2 text-gray-400">

            <li>Aluminium Scrap</li>
            <li>Agriculture Products</li>
            <li>Spices</li>
            <li>Poultry Products</li>
            <li>Engineering Products</li>
            <li>Handicrafts & Textiles</li>
            <li>Brass Scrap</li>
            <li>Copper Scrap</li>


          </ul>
        </div>

        {/* Contact */}
        <div>

          <h3 className="text-lg font-semibold mb-4">
            Contact
          </h3>

          <div className="space-y-3 text-gray-400">

            <p className="flex items-center gap-2">
              <FaMapMarkerAlt />
              India
            </p>
            
           

            <p className="flex items-center gap-2">
              <FaEnvelope />
              info@sharmaglobalexport.com
            </p>

            <p className="flex items-center gap-2">
              <FaPhone />
              +91 91739 82267
            </p>

             <div>
          <h2 className="text-xl font-bold mb-4">
            Our Location
          </h2>

          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1147.237711293992!2d72.63102866963705!3d23.054570198696982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87cc6428b671%3A0xc0e0ba9a82446569!2sSHARMA%20GLOBAL%20EXPORT!5e1!3m2!1sen!2sin!4v1773912975681!5m2!1sen!2sin"
              width="300"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
        </div>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">

        © {new Date().getFullYear()} Sharma Global Exports. All Rights Reserved.

      </div>

    </footer>
  );
}