import React from "react";
import HeroSection from "../components/HeroSection";
import InitiativesPreview from "../components/InitiativesPreview";
import Welcome from "../components/Welcome";
import WhoWeServe from "../components/WhoWeServe";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Welcome />
      <InitiativesPreview />
      <WhoWeServe />
    </>
  );
}

export default HomePage;
