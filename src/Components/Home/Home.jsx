import React from "react";
import Back from "../../assets/Back.jpeg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="relative min-h-screen">
      <Header /> 
      <div
        style={{ backgroundImage: `url(${Back})` }}
        className="w-screen min-h-screen bg-cover bg-center flex justify-center items-center relative z-0"
      >
        <h1 className="text-6xl sm:text-7xl mx-10 md:text-8xl lg:text-9xl xl:text-10xl 2xl:text-11xl text-white font-metamorphous">
          Hi, I'm Swarn. <br />I am a Web Developer.
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
