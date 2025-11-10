import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import kavLogo from "../assets/images/kav-logo.png";

const Footer = () => {
  const navigation = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "why-choose", label: "Why Choose Us" },
    { id: "certificates", label: "Certificates" },
    { id: "products", label: "Products" },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Social media links with brand colors
  const socialLinks = [
    {
      icon: <FaFacebook className="text-xl" />,
      href: "#",
      label: "Facebook",
      color: "#1877F2", // Facebook brand color
    },
    {
      icon: <FaTwitter className="text-xl" />,
      href: "#",
      label: "Twitter",
      color: "#1DA1F2", // Twitter brand color
    },
    {
      icon: <FaInstagram className="text-xl" />,
      href: "#",
      label: "Instagram",
      color: "#E4405F", // Instagram brand color
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      href: "#",
      label: "LinkedIn",
      color: "#0077B5", // LinkedIn brand color
    },
  ];

  return (
    <footer className="py-12 text-white" style={{ backgroundColor: "#51743D" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <a href="/">
              <img
                src={kavLogo}
                alt="Kaviya Ecoware Logo"
                className="pl-4 h-10 md:h-14 bg-white rounded-md p-2 mb-4"
              />
            </a>
            <p className="mb-6 text-gray-100">
              Providing sustainable solutions for a greener planet since 2010.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md transition-all duration-300 transform hover:scale-110"
                  style={{ color: social.color }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center text-gray-100 hover:text-white transition-colors duration-300 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white bg-opacity-30 mr-2 group-hover:bg-opacity-100 transition-all duration-300"></span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-white" />
                <span className="text-gray-100">
                  123 Eco Street, Green City
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-white" />
                <span className="text-gray-100">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-white" />
                <span className="text-gray-100">info@kaviyaecoware.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-100">
              Subscribe to get updates on new products and eco-friendly tips.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 border-2 border-gray-300"
              />
              <button
                className="px-4 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:bg-opacity-90 flex items-center justify-center border-2 border-gray-300"
                style={{ backgroundColor: "#49714D" }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}

        <div
          className="border-t text-center text-gray-200"
          style={{ borderColor: "#49714D" }}
        >
          <hr className="mt-12 pt-8" />
          <p>
            &copy; {new Date().getFullYear()} Kaviya Ecoware. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
