import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.dev variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 w-full sm:w-[360px] rounded-2xl"
      >
        <div className="w-full relative h-[230px]">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover  rounded-2xl"
          />
        </div>
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            className="w-10 h-10 black-gradient rounded-full flex
          justify-center items-center cursor-pointer"
            onClick={() => window.open(source_code_link, "_blank")}
          >
            <img
              src={github}
              alt="github"
              className="h-1/2 w-1/2 object-contain"
            />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className=" mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name}
            className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.dev>
  );
};
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>My Work</p>
        <h1 className={styles.sectionHeadText}>Projects.</h1>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          the links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage project effectively.
        </motion.p>
      </div>
      <div className="flex mt-20 flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
