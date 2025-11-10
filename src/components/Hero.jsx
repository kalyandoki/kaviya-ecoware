import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen py-8 md:py-8 lg:py-8 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F3F7EE 0%, #E8F5E9 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#51743D"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Decorative circles */}
        <div
          className="absolute -top-20 -right-20 w-80 h-80 md:w-96 md:h-96 rounded-full opacity-15 blur-xl"
          style={{ backgroundColor: "#51743D" }}
        ></div>
        <div
          className="absolute bottom-10 left-10 w-60 h-60 md:w-72 md:h-72 rounded-full opacity-15 blur-xl"
          style={{ backgroundColor: "#51743D" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-40 h-40 md:w-56 md:h-56 rounded-full opacity-10 blur-xl"
          style={{ backgroundColor: "#51743D" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh]">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-8 xl:pr-16">
            {/* Tagline */}
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full mb-6 md:mb-8 backdrop-blur-sm transform transition-all duration-700 ${
                isMounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                backgroundColor: "rgba(81, 116, 61, 0.1)",
                border: "1px solid rgba(81, 116, 61, 0.2)",
              }}
            >
              <div
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: "#51743D" }}
              ></div>
              <span
                className="text-xs md:text-sm font-semibold uppercase tracking-wider"
                style={{ color: "#51743D" }}
              >
                ECO-FRIENDLY SOLUTIONS
              </span>
            </div>

            {/* Main heading */}
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight transform transition-all duration-700 delay-100 ${
                isMounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ color: "#49714D" }}
            >
              Sustainable Solutions for a{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Greener Tomorrow</span>
                <span
                  className="absolute bottom-2 left-0 w-full h-4 rounded-full opacity-20 z-0"
                  style={{ backgroundColor: "#51743D" }}
                ></span>
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-base md:text-lg lg:text-xl mb-8 md:mb-12 text-gray-700 max-w-2xl leading-relaxed transform transition-all duration-700 delay-200 ${
                isMounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Kaviya Ecoware provides innovative, eco-friendly products that
              help reduce environmental impact without compromising on quality
              or convenience.
            </p>

            {/* Buttons */}
            <div
              className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 transform transition-all duration-700 delay-300 ${
                isMounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <button
                onClick={() => scrollToSection("products")}
                className="px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group relative overflow-hidden"
                style={{ backgroundColor: "#51743D" }}
              >
                <span className="relative z-10 flex items-center">
                  Explore Products
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold border-2 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group relative overflow-hidden"
                style={{ borderColor: "#51743D", color: "#51743D" }}
              >
                <span className="relative z-10 flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>
                <span className="absolute inset-0 bg-[#51743D] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </button>
            </div>

            {/* Trust indicators */}
            <div
              className={`mt-10 md:mt-16 flex flex-col sm:flex-row flex-wrap gap-4 md:gap-8 transform transition-all duration-700 delay-400 ${
                isMounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex items-center group">
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-3 md:mr-4 transition-all duration-300 group-hover:scale-110 backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(81, 116, 61, 0.1)",
                    border: "1px solid rgba(81, 116, 61, 0.2)",
                  }}
                >
                  <svg
                    className="w-5 h-5 md:w-7 md:h-7"
                    style={{ color: "#51743D" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-700 font-medium block text-sm md:text-base">
                    100% Biodegradable
                  </span>
                  <span className="text-xs text-gray-500">
                    Eco-friendly materials
                  </span>
                </div>
              </div>
              <div className="flex items-center group">
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-3 md:mr-4 transition-all duration-300 group-hover:scale-110 backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(81, 116, 61, 0.1)",
                    border: "1px solid rgba(81, 116, 61, 0.2)",
                  }}
                >
                  <svg
                    className="w-5 h-5 md:w-7 md:h-7"
                    style={{ color: "#51743D" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-700 font-medium block text-sm md:text-base">
                    PFAS Free
                  </span>
                  <span className="text-xs text-gray-500">
                    No harmful chemicals
                  </span>
                </div>
              </div>
              <div className="flex items-center group">
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-3 md:mr-4 transition-all duration-300 group-hover:scale-110 backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(81, 116, 61, 0.1)",
                    border: "1px solid rgba(81, 116, 61, 0.2)",
                  }}
                >
                  <svg
                    className="w-5 h-5 md:w-7 md:h-7"
                    style={{ color: "#51743D" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-700 font-medium block text-sm md:text-base">
                    FDA Approved
                  </span>
                  <span className="text-xs text-gray-500">
                    Meets safety standards
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main image - Using the provided image */}
              <div
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-105 relative"
                style={{
                  boxShadow: "0 25px 50px -12px rgba(81, 116, 61, 0.25)",
                  background: "#51743D",
                }}
              >
                {/* Decorative pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                  <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="productGrid"
                        width="30"
                        height="30"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 30 0 L 0 0 0 30"
                          fill="none"
                          stroke="#51743D"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#productGrid)" />
                  </svg>
                </div>

                {/* Subtle colored border accent */}
                <div
                  className="absolute inset-0 rounded-3xl border-2"
                  style={{ borderColor: "rgba(81, 116, 61, 0.2)" }}
                ></div>

                <img
                  src="https://z-cdn-media.chatglm.cn/files/a89dd559-c43c-4ea5-b838-4591b260a658_kav-img-hero.png?auth_key=1862773825-0f055a4e4e844060a6a69f323db92f87-0-b9a7f94664f60a05c1f29d275ab283da"
                  alt="Eco-friendly disposable tableware"
                  className="w-full h-full object-contain p-4 md:p-6 lg:p-8 relative z-10"
                />

                {/* Eco badge */}
                <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg transform transition-transform duration-300 hover:scale-110">
                  <div
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#51743D" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      mdWidth="20"
                      mdHeight="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>

                {/* Subtle gradient overlay with brand color */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(81,116,61,0.1)] to-transparent opacity-30"></div>

                {/* Bottom accent bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-2 rounded-b-3xl"
                  style={{ backgroundColor: "#51743D" }}
                ></div>
              </div>

              {/* Floating product highlight 1 */}
              <div
                className="absolute -bottom-6 -left-6 w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-700 hover:scale-105 backdrop-blur-sm bg-[#51743D]"
                style={{
                  boxShadow:
                    "0 20px 25px -5px rgba(81, 116, 61, 0.1), 0 10px 10px -5px rgba(81, 116, 61, 0.04)",
                }}
              >
                <div className="w-full h-full flex items-center justify-center p-2 md:p-4">
                  <img
                    src="https://z-cdn-media.chatglm.cn/files/a89dd559-c43c-4ea5-b838-4591b260a658_kav-img-hero.png?auth_key=1862773825-0f055a4e4e844060a6a69f323db92f87-0-b9a7f94664f60a05c1f29d275ab283da"
                    alt="Eco-friendly plates"
                    className="w-full h-full object-contain"
                    style={{ objectPosition: "center left" }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating product highlight 2 */}
              <div
                className="absolute -top-6 -right-6 w-32 h-32 md:w-48 md:h-48 rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-700 hover:scale-105 backdrop-blur-sm bg-[#51743D]"
                style={{
                  boxShadow:
                    "0 20px 25px -5px rgba(81, 116, 61, 0.1), 0 10px 10px -5px rgba(81, 116, 61, 0.04)",
                }}
              >
                <div className="w-full h-full flex items-center justify-center p-2 md:p-4">
                  <img
                    src="https://z-cdn-media.chatglm.cn/files/a89dd559-c43c-4ea5-b838-4591b260a658_kav-img-hero.png?auth_key=1862773825-0f055a4e4e844060a6a69f323db92f87-0-b9a7f94664f60a05c1f29d275ab283da"
                    alt="Eco-friendly bowls"
                    className="w-full h-full object-contain"
                    style={{ objectPosition: "center right" }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -bottom-16 right-16 w-16 h-16 md:w-24 md:h-24 rounded-full opacity-20 blur-xl"
                style={{ backgroundColor: "#51743D" }}
              ></div>
              <div
                className="absolute top-16 -left-16 w-12 h-12 md:w-20 md:h-20 rounded-full opacity-20 blur-xl"
                style={{ backgroundColor: "#51743D" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
