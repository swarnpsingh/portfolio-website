import React from "react";
import Back from "../../assets/Back.jpeg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="relative">
      <Header /> 
      <div
        style={{ backgroundImage: `url(${Back})` }}
        className="w-screen h-screen bg-cover bg-center flex justify-center items-center relative z-0"
      >
        <h1 className="text-8xl text-white font-metamorphous">
          Hi, I'm Swarn. <br />I am a Web Developer.
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
