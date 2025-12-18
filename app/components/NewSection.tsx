"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import phone1 from "../images/iPhone-13-Pro-Front.png";
import phone2 from "../images/iPhone-13-Pro-Front2.png";
import phone3 from "../images/iPhone-13-Pro-Front3.png";
import Image from "next/image";

const NewSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-[#0c3ddf] to-[#b748be]";
  const phoneFrames = [
    {
      key: "phone-1",
      imageSrc: phone1.src,
      left: "1%",
      rotate: -6.412,
      top: "-3%",
      extraClass: "right-0",
    },
    {
      key: "phone-2",
      imageSrc: phone2.src,
      left: "21%",
      rotate: 3.809,
      top: "0%",
    },
    {
      key: "phone-3",
      imageSrc: phone3.src,
      left: "37%",
      rotate: 12.65,
      top: "5%",
    },
  ];

  return (
    <section className="bg-[#EFF5FF] w-full ">
      <div
        ref={sectionRef}
        className="relative w-full mx-auto max-w-[1512px] px-[16px] md:px-[24px] lg:px-[86px] xl:px-[126px] py-[32px] md:py-[48px] lg:py-[72px]"
      >
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] lg:gap-[48px] xl:gap-[64px] items-center">
            {/* Left side - Content */}
            <div className="flex flex-col gap-[20px] md:gap-[24px] lg:gap-[28px] max-w-[620px]">
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="font-poppins text-[#1D1D1B]  lg:text-left text-[28px] leading-[36px] font-bold tracking-[0.28px] lg:text-[40px] lg:leading-[48px] lg:font-semibold"
              >
                <span className="block">We’re Not Anti-AI.</span>
                <span className={`${gradientText} block`}>We’re Pro-Human.</span>
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="font-poppins text-[#1D1D1B]  lg:text-left text-[20px]  leading-[28px] font-medium lg:text-[26px] lg:leading-[38px] lg:tracking-[-0.52px]"
              >
                We’re building tools that let people prove their authenticity and stay human online.
              </motion.h3>

              <motion.h4
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.6, delay: 0.18, ease: [0.4, 0, 0.2, 1] }}
                className="font-poppins text-[#1D1D1B]  lg:text-left text-[18px] leading-[26px] font-medium md:text-[18px] md:leading-[28px] lg:text-[22px] lg:leading-[34px] lg:tracking-[-0.44px]"
              >
                HumanBacked stands for transparency, accountability, and authenticity in the digital
                age. We believe technology should serve humanity, not replace it. Join the movement
                shaping the ethical future of the internet.
              </motion.h4>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.6, delay: 0.26, ease: [0.4, 0, 0.2, 1] }}
                className="flex flex-col  sm:gap-[16px] flex-col gap-[10px] text-center lg:text-left"
              >
                <a className="inline-flex hover:translate-x-1 transition-all duration-300 cursor-pointer sm:justify-start gap-[8px] text-[#1D1D1B] font-medium text-[16px] leading-[22px] md:text-[16px] md:leading-[24px]">
                  <span>Read our white-paper</span>
                  <span aria-hidden>→</span>
                </a>
                <a className="inline-flex  hover:translate-x-1 transition-all duration-300 cursor-pointer sm:justify-start gap-[8px] text-[#1D1D1B] font-medium text-[16px] leading-[22px] md:text-[16px] md:leading-[24px]">
                  <span>Ask how you can help</span>
                  <span aria-hidden>→</span>
                </a>
              </motion.div>
            </div>

            {/* Right side - Placeholder for future animation */}
            <div className="h-full min-h-[290px] md:min-h-[476px] w-full mt-[64px] relative flex items-center justify-center">
              {phoneFrames.map((phone, index) => (
                <motion.div
                  key={phone.key}
                  className={`w-[144.577px] h-[292.537px] md:w-[235.249px] md:h-[476px] translate-x-[30%] absolute ${
                    phone.extraClass ?? ""
                  }`}
                  style={{ top: phone.top }}
                  initial={{ left: "20%", top: "0%", rotate: 0, opacity: 1 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          left: phone.left,
                          top: phone.top,
                          rotate: phone.rotate,
                        }
                      : { opacity: 0, y: 36, scale: 0.94, left: "50%", top: "0%", rotate: 0 }
                  }
                  whileHover={{ y: -12, scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.8, delay: 0.12 * index, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div
                    className=" w-full h-full relative"
                    style={{
                      backgroundImage: `url(${phone.imageSrc})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSection;
