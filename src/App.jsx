import React from "react";
import Heading from "./Components/Heading";
import FirstHero from "./Components/FirstHero";
import QuickLinks from "./Components/QuickLinks";
import Footer from "./Components/Footer";
import SmoothScroll from "./Components/SmoothScroll";
import NamedSection from "./Components/NamedSection";

function App() {
  return (
    <div>
      <Heading />
      <FirstHero />
      <QuickLinks />
      <SmoothScroll />
      <NamedSection />
      <Footer />
    </div>
  )
}

export default App;