"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Stelar TM" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Welcome to the{" "}
        <span className="font-extrabold text-white">Stelar </span>universe,
        where time management meets intergalactic adventure! Dive into a
        captivating universe-themed web application that transforms mundane task
        management into an exhilarating journey through the cosmos. Chart your
        course amidst stars and galaxies,{" "}
        <span className="font-extrabold text-white">
          gamify your productivity
        </span>
        , and soar towards your goals with an immersive blend of interactive
        planning and celestial wonder. Join us in redefining productivity and
        embark on a cosmic quest to conquer your to-do list like never before!
        <span className="font-extrabold text-white"></span>
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0, 3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[18px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
