import { SectionWrapper } from "../../hoc";
import { BallCanvas } from "./canvas";

import { technologies } from "../constants";
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 justify-center ">
      {technologies.map((tech) => (
        <div key={tech.name} 
        className="h-28 w-28">
          <BallCanvas icon = {tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
