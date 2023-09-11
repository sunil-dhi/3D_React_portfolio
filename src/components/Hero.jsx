import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] mx-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-20 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Sunil</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I design and develop web application <br className="sm:block hidden"/> using javascript and its frameworks.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 items-center justify-center flex w-full">
      <a href="#about">
        <div className="w-[35px] h-[64px] justify-center items-start flex p-2 border-4 border-secondary rounded-3xl">
          <motion.dev 
             animate={{
              y:[0,25,0]
             }}
             transition={{
              duration:1.5,
              repeat:Infinity,
              repeatType:'loop'
             }}
             className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
        </div>
      </a>
      </div>
    </section>
  );
};

export default Hero;
