import { useState } from "react";
import { FaRuler, FaExpand, FaArrowDown, FaShoppingCart } from "react-icons/fa";
import img6 from "../assets/images/kav-img-hero.png";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      title: `12" ROUND PLATE`,
      image: img6,
      size: "12 Inch",
      diameter: "302 mm",
      depth: "24 mm",
    },
    {
      title: `9"3 Compartment PLATE`,
      image: img6,
      size: "9 Inch",
      diameter: "225 mm",
      depth: "20 mm",
    },
    {
      title: `10"3 Compartment PLATE`,
      image: img6,
      size: "10 Inch",
      diameter: "250 mm",
      depth: "19 mm",
    },
    {
      title: `11"4 Compartment PLATE`,
      image: img6,
      size: "11 Inch",
      diameter: "275 mm",
      depth: "30 mm",
    },
    {
      title: `12" ROUND PLATE`,
      image: img6,
      size: "12 Inch",
      diameter: "302 mm",
      depth: "24 mm",
    },
    {
      title: `9"3 Compartment PLATE`,
      image: img6,
      size: "9 Inch",
      diameter: "225 mm",
      depth: "20 mm",
    },
  ];

  const openProductModal = (product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section
      id="products"
      className="py-20"
      style={{ backgroundColor: "#F3F7EE" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#51743D" }}
          >
            Our Eco-Friendly Products
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded"
            style={{ backgroundColor: "#49714D" }}
          ></div>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Discover our range of sustainable products designed to reduce
            environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Image Container with Hover Effect */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#F3F7EE] to-[#E8F5E9] flex items-center justify-center">
                {/* Eco-friendly Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Eco-Friendly
                  </span>
                </div>

                {/* Product Image with Zoom Effect */}
                <div className="w-full h-full flex items-center justify-center p-6 transition-transform duration-700 group-hover:scale-110 z-10">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Quick View Button (Appears on Hover) */}
                <div className="absolute inset-0 bg-[#51743D] bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center transition-all duration-300">
                  <button
                    onClick={() => openProductModal(product)}
                    className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-6 py-3 rounded-full bg-white text-[#51743D] font-medium shadow-lg hover:bg-[#51743D] hover:text-white flex items-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3
                    className="text-xl font-bold mb-2 text-center"
                    style={{ color: "#49714D" }}
                  >
                    {product.title}
                  </h3>
                  <div className="w-16 h-1 bg-[#51743D] rounded-full mx-auto"></div>
                </div>

                {/* Product Specifications */}
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-center p-3 bg-[#F8F7F5] rounded-lg">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                      style={{ backgroundColor: "rgba(81, 116, 61, 0.1)" }}
                    >
                      <FaRuler
                        className="text-sm"
                        style={{ color: "#51743D" }}
                      />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Size</span>
                      <span className="text-gray-700 font-medium">
                        {product.size}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center p-3 bg-[#F8F7F5] rounded-lg">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                      style={{ backgroundColor: "rgba(81, 116, 61, 0.1)" }}
                    >
                      <FaExpand
                        className="text-sm"
                        style={{ color: "#51743D" }}
                      />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        Diameter
                      </span>
                      <span className="text-gray-700 font-medium">
                        {product.diameter}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center p-3 bg-[#F8F7F5] rounded-lg">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                      style={{ backgroundColor: "rgba(81, 116, 61, 0.1)" }}
                    >
                      <FaArrowDown
                        className="text-sm"
                        style={{ color: "#51743D" }}
                      />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Depth</span>
                      <span className="text-gray-700 font-medium">
                        {product.depth}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-auto">
                  <button
                    onClick={() => openProductModal(product)}
                    className="w-full py-3 rounded-xl font-medium text-white transition-all duration-300 flex items-center justify-center transform hover:scale-[1.02] shadow-md hover:shadow-lg"
                    style={{ backgroundColor: "#51743D" }}
                  >
                    <FaShoppingCart className="mr-2" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold" style={{ color: "#51743D" }}>
                  {selectedProduct.title}
                </h3>
                <button
                  onClick={closeProductModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-64">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>

                <div className="md:w-1/2">
                  <div className="mb-6">
                    <h4
                      className="text-lg font-semibold mb-3"
                      style={{ color: "#49714D" }}
                    >
                      Product Specifications
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <FaRuler
                          className="mr-3 text-lg"
                          style={{ color: "#51743D" }}
                        />
                        <div>
                          <p className="text-sm text-gray-500">Size</p>
                          <p className="font-medium">{selectedProduct.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <FaExpand
                          className="mr-3 text-lg"
                          style={{ color: "#51743D" }}
                        />
                        <div>
                          <p className="text-sm text-gray-500">Diameter</p>
                          <p className="font-medium">
                            {selectedProduct.diameter}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <FaArrowDown
                          className="mr-3 text-lg"
                          style={{ color: "#51743D" }}
                        />
                        <div>
                          <p className="text-sm text-gray-500">Depth</p>
                          <p className="font-medium">{selectedProduct.depth}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4
                      className="text-lg font-semibold mb-3"
                      style={{ color: "#49714D" }}
                    >
                      Eco-Friendly Features
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>100% Biodegradable & Compostable</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Made from Sustainable Bagasse</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Microwave & Freezer Safe</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Oil & Water Resistant</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    className="w-full py-3 rounded-lg font-medium text-white transition-all duration-300 hover:opacity-90 flex items-center justify-center"
                    style={{ backgroundColor: "#51743D" }}
                  >
                    <FaShoppingCart className="mr-2" />
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
