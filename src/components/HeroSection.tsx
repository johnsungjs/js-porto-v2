import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Direction, fadeIn } from "../utils/framerStyle";

export default forwardRef<HTMLDivElement>(function HeroSection(_props, ref) {
  return (
    <>
      {/* HERO SECTION START */}
      <section ref={ref} id="home" className="pt-36 bg-bgColor">
        <div className="container">
          <div className="flex flex-wrap">
            <motion.div
              variants={fadeIn(Direction.UP, 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }} className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-textColor md:text-xl">
                Hello I am,{" "}
                <span className="block font-bold text-primary text-4xl mt-1 lg:text-5xl">
                  John Sung
                </span>
              </h1>
              <p className="font-medium text-lg mt-1 mb-6 lg:text-lg">
                Mobile Developer | Fullstack Web Developer | AI Developer
              </p>
              <a
                target="blank"
                href="https://docs.google.com/document/d/1Aoq01HoBBjX1-nDmxhfsnbIkOwqk5GRhpofM2XIRoiM/edit?usp=sharing"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
              >
                View My Curriculum Vitae
              </a>
            </motion.div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <img
                  src={"/images/burungpretBgRemove.png"}
                  alt="burung"
                  className="max-w-full mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* HERO SECTION END */}
    </>
  );
});
