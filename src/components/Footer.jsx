import { Link } from "react-router-dom";
import { footerLinks } from "../data/footerData";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10">

      <div className="px-6 md:px-16 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold mb-4">SPLASH STORE</h2>
          <p className="text-gray-400 text-sm">
            Premium fragrances and luxury scents for every personality.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {footerLinks.quickLinks.map((item, i) => (
              <li key={i}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CUSTOMER CARE */}
        <div>
          <h3 className="font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2 text-gray-400">
            {footerLinks.customerCare.map((item, i) => (
              <li key={i}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <p className="text-gray-400 text-sm">
            {footerLinks.contact.location} <br />
            {footerLinks.contact.email} <br />
            {footerLinks.contact.phone}
          </p>

          <div className="flex gap-4 mt-4 text-xl">
            <i className="ri-instagram-line hover:text-orange-400 cursor-pointer"></i>
            <i className="ri-facebook-circle-line hover:text-orange-400 cursor-pointer"></i>
            <i className="ri-twitter-x-line hover:text-orange-400 cursor-pointer"></i>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} SPLASH STORE
      </div>

    </footer>
  );
};

export default Footer;