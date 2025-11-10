import {
  FaLeaf,
  FaMedal,
  FaRecycle,
  FaTag,
  FaLightbulb,
  FaSmile,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Sustainable Materials",
      description:
        "All our products are made from renewable, biodegradable materials that minimize environmental impact.",
      icon: <FaLeaf className="text-4xl mb-4" style={{ color: "#51743D" }} />,
    },
    {
      title: "High Quality",
      description:
        "We never compromise on quality. Our products are durable, functional, and designed to last.",
      icon: <FaMedal className="text-4xl mb-4" style={{ color: "#51743D" }} />,
    },
    {
      title: "Eco-Friendly Production",
      description:
        "Our manufacturing processes are designed to minimize waste and reduce carbon footprint.",
      icon: (
        <FaRecycle className="text-4xl mb-4" style={{ color: "#51743D" }} />
      ),
    },
    {
      title: "Affordable Pricing",
      description:
        "We believe sustainability should be accessible. Our products are competitively priced.",
      icon: <FaTag className="text-4xl mb-4" style={{ color: "#51743D" }} />,
    },
    {
      title: "Innovative Designs",
      description:
        "Our team constantly innovates to create products that are both eco-friendly and stylish.",
      icon: (
        <FaLightbulb className="text-4xl mb-4" style={{ color: "#51743D" }} />
      ),
    },
    {
      title: "Customer Satisfaction",
      description:
        "We prioritize customer satisfaction and offer excellent after-sales support.",
      icon: <FaSmile className="text-4xl mb-4" style={{ color: "#51743D" }} />,
    },
  ];

  return (
    <section
      id="why-choose"
      className="py-20"
      style={{ backgroundColor: "#F3F7EE" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#51743D" }}
          >
            Why Choose Kaviya Ecoware
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded"
            style={{ backgroundColor: "#49714D" }}
          ></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "#49714D" }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
