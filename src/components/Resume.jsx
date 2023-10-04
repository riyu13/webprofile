import { useState } from "react";
import Navbars from "./partials/Navbars";
import {
  MdSunny,
  MdModeNight,
} from "react-icons/md";

import About from "./partials/About";
import Head from "./home/Head";
import Kontak from "./home/Kontak";
import Skill from "./home/Skill";
import Pengalaman from "./home/Pengalaman";
import Pendidikan from "./home/Pendidikan";

const Resume = () => {

     const [isDarkMode, setIsDarkMode] = useState(true);

     // Fungsi untuk mengganti mode
     const toggleDarkMode = () => {
       setIsDarkMode(!isDarkMode);
     };
     
  return (
    <div
      className={`${isDarkMode ? "bg-dark" : "bg-white"} ${
        isDarkMode ? "text-white" : "text-black"
      }  ${isDarkMode ? "shadow-black" : "shadow-neutral-100"}`}
    >
      <Navbars />
      <div className="container mx-auto flex justify-center items-center">
        {/* Tombol untuk mengganti mode */}
        <div className="flex flex-col md:flex-row space-x-5">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="p-4 rounded-lg">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />

                {/* sun icon */}
                <svg
                  className="swap-on fill-current w-10 h-10"
                  viewBox="0 0 36 36"
                >
                  <MdSunny />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-off fill-current w-10 h-10"
                  viewBox="0 0 36 36"
                >
                  <MdModeNight />
                </svg>
              </label>
              <Head/>
              <br />
              <Kontak/>
              <br />
              <Skill/>
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <div className="rounded ">
              <About/>
              <br />
              <Pengalaman/>
              <br />
              <Pendidikan/>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
