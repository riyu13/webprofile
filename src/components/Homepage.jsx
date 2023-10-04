// if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { NavLink } from "react-router-dom";
import Type from "./partials/Type";
import Particle from "./partials/Particles";

const Homepage = () => {
  

  return (
    <div>
      <Particle/>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col">
          <div className="text-2xl text-center">
            <Type/>
          </div>
            <NavLink to="/resume" className="btn btn-ghost">
              Resume dan Portofolio
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Homepage