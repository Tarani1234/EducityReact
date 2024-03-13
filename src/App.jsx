import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Navbar/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contacts/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero></Hero>
      <div className="container">
        <Title subtitle="Our Program" title="What we offer"></Title>
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subtitle="Gallery" title="Campus Photos"></Title>
        <Campus />
        <Title subtitle="TESTIMONIALS" title="What student says"></Title>
        <Testimonials />
        <Title subtitle="Contact us" title="Get in Touch"></Title>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};
export default App;
