import { FaInfoCircle, FaBullseye, FaEye } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#51743D" }}
          >
            About Kaviya Ecoware
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded"
            style={{ backgroundColor: "#49714D" }}
          ></div>
        </div>

        {/* Content Cards with Images */}
        <div className="space-y-12">
          {/* ABOUT US CARD */}
          <div className="bg-white border-2 border-[#51743D] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="About Us"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-3/5 p-6">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#F3F7EE" }}
                  >
                    <FaInfoCircle
                      className="text-xl"
                      style={{ color: "#51743D" }}
                    />
                  </div>
                  <h2
                    className="text-xl font-bold ml-4"
                    style={{ color: "#51743D" }}
                  >
                    ABOUT US
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  KAVIYA ECOWARE is a leading manufacturer of high-quality
                  bagasse-based products. We specialize in the production of
                  eco-friendly tableware solutions made from bagasse, which is
                  the fibrous residue left behind after the extraction of juice
                  from sugarcane. With a commitment to sustainability and
                  innovation, we aim to revolutionize the tableware industry by
                  offering biodegradable and compostable alternatives to
                  traditional plastic & paper-based products.
                </p>
              </div>
            </div>
          </div>

          {/* OUR VISION CARD */}
          <div className="bg-white border-2 border-[#51743D] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Content Section */}
              <div className="md:w-3/5 p-6 order-1 md:order-0">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#F3F7EE" }}
                  >
                    <FaEye className="text-xl" style={{ color: "#51743D" }} />
                  </div>
                  <h2
                    className="text-xl font-bold ml-4"
                    style={{ color: "#51743D" }}
                  >
                    OUR VISION
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  At KAVIYA ECOWARE, our vision is to be the global leader in
                  bagasse-based tableware solutions, recognized for our
                  commitment to sustainability, product innovation, and customer
                  satisfaction. We envision a world where traditional plastic
                  and paper-based tableware are replaced by eco-friendly
                  alternatives, and where the circular economy thrives,
                  preserving our planet for future generations.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Through continuous research and development, strategic
                  thinking, and a customer-centric approach, we aim to shape a
                  sustainable future by enabling environmentally responsible
                  practices.
                </p>
              </div>
              {/* Image Section */}
              <div className="md:w-2/5 order-0 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Our Vision"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* OUR MISSION CARD */}
          <div className="bg-white border-2 border-[#51743D] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-3/5 p-6">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#F3F7EE" }}
                  >
                    <FaBullseye
                      className="text-xl"
                      style={{ color: "#51743D" }}
                    />
                  </div>
                  <h2
                    className="text-xl font-bold ml-4"
                    style={{ color: "#51743D" }}
                  >
                    OUR MISSION
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our mission is to provide innovative and sustainable
                  bagasse-based tableware solutions that meet the diverse needs
                  of our customers while minimizing the environmental impact. We
                  strive to promote a circular economy by utilising sugarcane
                  waste to create value-added products that contribute to a
                  greener future.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  We are committed to delivering products of the highest
                  quality. Our manufacturing processes adhere to rigorous
                  quality control standards, ensuring that our products meet or
                  exceed industry regulations and customer expectations. We
                  source the finest raw materials and employ state-of-the-art
                  machinery to ensure consistency, durability, and safety in
                  every product we manufacture. We are ISO certified, FDA
                  approved, and offer PFAS free products for our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
