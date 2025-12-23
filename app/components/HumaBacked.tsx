"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import backedImage1 from "../images/BackedIcon1.svg";
import backedImage2 from "../images/BackedIcon2.svg";
import backedImage3 from "../images/BackedIcon3.svg";
import backedImage4 from "../images/BackedIcon4.svg";
import Image from "next/image";

const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-[#0c3ddf] to-[#b748be]";

const HumanBacked = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true, amount: 0.1 });

  const items = [
    {
      id: 0,
      title: "Verification",
      description: "Multi-layered verification ID + biometric + behavioural analysis",
      icon: backedImage1,
    },

    {
      id: 1,
      title: "Personal page",
      description: "Shareable verification page, profile & personal badge",
      icon: backedImage2,
    },

    {
      id: 2,
      title: "Get support",
      description: "Receive gifts & rewards. Dashboard with controllable content.",
      icon: backedImage3,
    },

    {
      id: 3,
      title: "Partner options",
      description: "API & platform integrations for partners and organizations",
      icon: backedImage4,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative pb-[80px] flex w-full flex-col gap-[40px] pt-[19px] pb-0  mx-auto  max-w-[1512px] px-[16px] md:px-[24px] lg:px-[86px] xl:px-[126px] xl:pt-[48px]`}
    >
      <div
        className={`flex w-full flex-col gap-[16px] m-auto max-w-[960px] pb-[24px] md:pb-[32px]`}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className={`font-poppins text-[#1D1D1B] text-center  text-[28px] font-bold leading-[36px] tracking-[0.28px] md:text-[#1D1D1B] md:text-center  md:text-[40px] md:font-semibold md:leading-[48px]
lg:text-[#1D1D1B] lg:text-center lg:text-[40px] lg:font-semibold lg:leading-[48px]
`}
        >
          <span className={gradientText}>HumanBacked = </span>{" "}
          <span>Verified Humanity. Real Rewards.</span>
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
          A global standard for Proof of Personhood – simple, ethical, verifiable. <br /> Creators
          who verify their identity can connect with brands, receive gifts, and get paid for genuine
          work. Built with biometric verification, blockchain records, and transparent
          certification.
        </motion.p>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-[24px]"
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isGridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="flex items-center flex-col justify-center rounded-[16px] p-10 bg-[#EFF5FF] xl:bg-transparent"
          >
            <Image src={item.icon} alt={item.title} width={56} height={56} />
            <h5 className="font-poppins text-[16px] font-medium leading-[24px] pt-[16px] text-[#1D1D1B] md:text-[18px] md:leading-[24px]">
              {item.title}
            </h5>
            <p className="font-sans text-[16px] font-normal leading-[24px] pt-[8px] text-[#1D1D1B] text-center">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HumanBacked;
