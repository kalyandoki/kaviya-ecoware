import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div
      className="min-h-screen flex flex-col font-sans"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <Header />
      <Home />
      <Footer />
      <ScrollToTop />
      <a
        href="https://wa.me/916305070487"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 rounded-full shadow-2xl px-3 py-3 font-semibold z-100 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white transition"
      >
        <FaWhatsapp size={42} />
        {/* <span>Chat on WhatsApp</span> */}
      </a>
    </div>
  );
}

export default App;
