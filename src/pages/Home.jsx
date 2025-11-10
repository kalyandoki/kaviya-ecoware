import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Certificates from "../components/Certificates";
import Products from "../components/Products";

const Home = () => {
  return (
    <main className="flex-grow">
      <Hero />
      <About />
      <WhyChooseUs />
      <Certificates />
      <Products />
    </main>
  );
};

export default Home;
