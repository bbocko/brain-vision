import React from "react";
import { useMediaQuery } from 'react-responsive';
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from 'particles-bg';

function App() {
  const isDesktop = useMediaQuery({ minDeviceWidth: 1024 });
  const numParticles = isDesktop ? 50 : 10;

  return (
    <div className="App">
      <ParticlesBg color="#FFFFFF" num={numParticles} type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  )
}

export default App