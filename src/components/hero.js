import React from "react";
import image from "../assests/image.jpg";
// import { FaLocationDot} from "react-icons/fa";


const Hero = () => {
  return (
    <div class="flex flex-col md:flex-row h-screen items-center justify-center">
      <div class="md:w-1/2 text-4xl font-bold text-center">
        Hi, I'm <span class="text-[#915EFF]">Chandresh Kumar</span>
        <br />
        <span class="text-3xl">
          B.Tech<span class="text-[#915EFF]"> NIT Jalandhar</span> IT '25
          <br />

        </span>
        <span class="text-3xl">
          <span class="text-[#915EFF]"> PATHSEEKERS, BEAS</span> '21
          <br />
          
        </span>
        <span class="text-2xl">
          I'm a full-stack developer exploring the field of cloud and devops.
        </span>
      </div>
      <div class="w-1/2 text-center">
        <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 mx-auto">
          <img
            class="rounded-full w-90 h-90"
            src={image}
            alt="Chandresh Kumar"
          />
        </figure>
        <br/>
        <div class="text-lg">Beas, Punjab<span class="text-[#915EFF]"> [INDIA]</span></div>

      </div>
    </div>
  );
};

export default Hero;
