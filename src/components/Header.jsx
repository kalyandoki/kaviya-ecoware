import { useState, useEffect } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaStar,
  FaCertificate,
  FaShoppingBag,
} from "react-icons/fa";
import kavLogo from "../assets/images/kav-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const navigation = [
    { id: "home", label: "Home", icon: <FaHome className="mr-2" /> },
    { id: "about", label: "About Us", icon: <FaInfoCircle className="mr-2" /> },
    {
      id: "why-choose",
      label: "Why Choose Us",
      icon: <FaStar className="mr-2" />,
    },
    {
      id: "certificates",
      label: "Certificates",
      icon: <FaCertificate className="mr-2" />,
    },
    {
      id: "products",
      label: "Products",
      icon: <FaShoppingBag className="mr-2" />,
    },
  ];

  // Effect to handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      // Find all sections
      const sections = navigation
        .map((item) => {
          const element = document.getElementById(item.id);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            return {
              id: item.id,
              offsetTop,
              offsetHeight,
              offsetBottom: offsetTop + offsetHeight,
            };
          }
          return null;
        })
        .filter(Boolean);

      // Determine active section
      for (const section of sections) {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetBottom
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navigation]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/">
            <img
              src={kavLogo}
              alt="Kaviya Ecoware Logo"
              className="md:pl-4 h-10 md:h-14"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg flex items-center transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-white font-medium shadow-md transform scale-105"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                style={{
                  backgroundColor:
                    activeSection === item.id ? "#51743D" : "transparent",
                }}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-9 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 rounded-lg flex items-center text-left transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-white font-medium shadow-md transform scale-[1.02]"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  style={{
                    backgroundColor:
                      activeSection === item.id ? "#51743D" : "transparent",
                  }}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
