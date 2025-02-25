import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Pricing from "./components/Pricing.jsx";
import Projects from "./components/Projects.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Projects />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
