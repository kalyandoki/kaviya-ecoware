import { FaCertificate } from "react-icons/fa";

const Certificates = () => {
  const certifications = [
    { name: "ISO 14001", description: "Environmental Management" },
    { name: "FSC Certified", description: "Responsible Forestry" },
    { name: "B Corp", description: "Social & Environmental Performance" },
    { name: "Green Seal", description: "Sustainability Leadership" },
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#51743D" }}
          >
            Our Certifications
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded"
            style={{ backgroundColor: "#49714D" }}
          ></div>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            We're proud to have received numerous certifications that validate
            our commitment to sustainability and quality.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg border-2"
              style={{ borderColor: "#F3F7EE" }}
            >
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#F3F7EE" }}
              >
                <FaCertificate
                  className="text-4xl"
                  style={{ color: "#51743D" }}
                />
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "#49714D" }}
              >
                {cert.name}
              </h3>
              <p className="text-gray-700">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
