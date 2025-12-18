"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Input from "./Input";

const FormSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-[#0c3ddf] to-[#b748be]";

  return (
    <section
      ref={sectionRef}
      className={`relative flex w-full flex-col pt-[40px] pb-[64px] gap-[8px] mx-auto max-w-[1512px] px-[16px] md:px-[24px] lg:px-[86px] xl:px-[126px]`}
    >
      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="88"
          height="88"
          viewBox="0 0 88 88"
          fill="none"
        >
          <path
            d="M60.3753 27.5002C57.3576 15.5358 51.1573 7.3335 43.9999 7.3335C33.8763 7.3335 25.6666 23.7492 25.6666 44.0002C25.6666 64.2512 33.8763 80.6668 43.9999 80.6668C45.2539 80.6668 46.4823 80.4138 47.6666 79.9335M55.7113 50.2592L69.6959 57.0792L62.8759 71.0638M69.6666 57.0902C63.0519 60.3352 53.9953 62.3335 43.9999 62.3335C23.7489 62.3335 7.33325 54.1238 7.33325 44.0002C7.33325 33.8765 23.7489 25.6668 43.9999 25.6668C61.7393 25.6668 76.5343 31.9662 79.9333 40.3335"
            stroke="url(#paint0_linear_1_1303)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_1303"
              x1="7.33325"
              y1="44.0718"
              x2="79.9333"
              y2="44.0718"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0C3DDF" />
              <stop offset="1" stopColor="#B748BE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`font-poppins text-[#1D1D1B] text-center  text-[28px] font-bold leading-[36px] tracking-[0.28px] md:text-[#1D1D1B] md:text-center  md:text-[40px] md:font-semibold md:leading-[48px]
lg:text-[#1D1D1B] lg:text-center lg:text-[40px] lg:font-semibold lg:leading-[48px]
`}
      >
        <span>Be Part of the</span> <span className={gradientText}>Trust Layer.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        className="font-poppins text-[#1D1D1B] text-center text-[18px] font-medium leading-[26px]
md:text-[#1D1D1B] md:text-center  md:text-[22px] md:font-medium md:leading-[34px] md:tracking-[-0.44px]
lg:text-[#1D1D1B] lg:text-center  lg:text-[22px] lg:font-medium lg:leading-[34px] lg:tracking-[-0.44px]
"
      >
        We’re bringing together people who believe trust and identity still matter in the age of AI.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className="flex items-center flex-col justify-center w-full pt-[24px] lg:pt-[39px] gap-[8px]"
      >
        <Input />

        <p className="font-roboto text-[#1D1D1B] text-[16px] font-medium leading-[20px]">
          No spam, just human updates that matter.
        </p>
      </motion.div>
    </section>
  );
};

export default FormSection;
