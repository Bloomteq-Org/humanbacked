"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useDeviceType } from "../hooks/useDeviceType";

import avatar11 from "../images/Avatar1.png";
import avatar12 from "../images/Avatar2.png";
import avatar1 from "../images/Avatar3.png";
import avatar2 from "../images/Avatar4.png";
import avatar3 from "../images/Avatar5.png";
import avatar4 from "../images/Avatar6.png";
import avatar5 from "../images/Avatar7.png";
import avatar6 from "../images/Avatar8.png";
import avatar7 from "../images/Avatar9.png";

const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-[#0c3ddf] to-[#b748be]";

interface Avatar {
  id: number;
  image: any;
  name?: string;
  title?: string;
}

const tabletAvatars: Avatar[] = [
  { id: 0, image: avatar1, name: "Avatar 1", title: "Avatar 1" },
  { id: 1, image: avatar2, name: "Avatar 2", title: "Avatar 2" },
  { id: 2, image: avatar3, name: "Avatar 3", title: "Avatar 3" },
  { id: 3, image: avatar4, name: "Avatar 4", title: "Avatar 4" },
  { id: 4, image: avatar5, name: "Avatar 5", title: "Avatar 5" },
  { id: 7, image: avatar6, name: "Avatar 6", title: "Avatar 6" },
];

const desktopAvatars: Avatar[] = [
  { id: 0, image: avatar11, name: "Avatar 1-1", title: "Avatar 1-1" },
  { id: 1, image: avatar12, name: "Avatar 1-2", title: "Avatar 1-2" },
  { id: 2, image: avatar1, name: "Avatar 1", title: "Avatar 1" },
  { id: 3, image: avatar2, name: "Avatar 2", title: "Avatar 2" },
  { id: 4, image: avatar3, name: "Avatar 3", title: "Avatar 3" },
  { id: 5, image: avatar4, name: "Avatar 4", title: "Avatar 4" },
  { id: 6, image: avatar5, name: "Avatar 5", title: "Avatar 5" },
  { id: 7, image: avatar6, name: "Avatar 6", title: "Avatar 6" },
  { id: 8, image: avatar7, name: "Avatar 7", title: "Avatar 7" },
];

const ImageShowcase = () => {
  const { isTablet, isDesktop } = useDeviceType();
  const visibleAvatars = useMemo(() => {
    if (isDesktop) return desktopAvatars;
    if (isTablet) return tabletAvatars;
    return tabletAvatars; // fallback za mobile
  }, [isTablet, isDesktop]);

  const defaultActiveIndex = useMemo(() => {
    if (isDesktop) return 5;
    if (isTablet) return 3;
    return 3; // fallback za mobile
  }, [isTablet, isDesktop]);

  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    setActiveIndex(defaultActiveIndex);
  }, [defaultActiveIndex]);

  return (
    <motion.div
      ref={ref}
      className="flex items-center justify-center min-h-[116px] md:min-w-[212px] xl:min-h-[220px]"
      onMouseLeave={() => {
        setActiveIndex(defaultActiveIndex);
        setHoveredIndex(null);
      }}
    >
      {visibleAvatars.map((avatar, index) => {
        const isActive = activeIndex === avatar.id;
        const isHovered = hoveredIndex === avatar.id;

        return (
          <motion.div
            key={avatar.id}
            initial={{ opacity: 0, scale: 0.5, y: 60, zIndex: 0 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    zIndex: isHovered ? 999 : index + 0.1,
                    filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
                  }
                : {
                    opacity: 0,
                    scale: 0.5,
                    y: 60,
                  }
            }
            whileHover={{
              scale: 1.05,
              zIndex: 999,
              filter: "grayscale(0%)",
            }}
            layout
            transition={{
              opacity: { duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] },
              scale: { duration: 0.6, delay: index * 0.1, ease: [0.34, 1.56, 0.64, 1] },
              y: { duration: 0.7, delay: index * 0.1, ease: [0.34, 1.56, 0.64, 1] },
              filter: { duration: 0.3 },
              zIndex: { duration: 0 },
              layout: { duration: 0.4, ease: "easeOut" },
            }}
            onMouseEnter={() => {
              setActiveIndex(avatar.id);
              setHoveredIndex(avatar.id);
            }}
            className={`${index > 0 ? "ml-[-42px] md:ml-[-50px]" : "ml-0"}  rounded-full overflow-hidden relative ${
              isActive
                ? "w-[116px] grayscale-0 h-[116px] min-w-[116px] min-h-[116px] md:w-[212px] md:h-[212px] md:min-w-[212px] md:min-h-[212px] lg:w-[220px] lg:h-[220px] lg:min-w-[220px] lg:min-h-[220px]"
                : "w-[92px] grayscale h-[92px] min-w-[92px] min-h-[92px] md:w-[156px] md:h-[156px] md:min-w-[156px] md:min-h-[156px] lg:w-[180px] lg:h-[180px] lg:min-w-[180px] lg:min-h-[180px]"
            }`}
          >
            <Image
              src={avatar.image}
              alt={avatar.name || `Avatar ${avatar.id}`}
              fill
              className="object-cover"
              loading="lazy"
              quality={75}
              sizes="(max-width: 768px) 116px, (max-width: 1024px) 212px, 220px"
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

const RealSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className={`relative flex w-full flex-col gap-[40px] pt-[19px] pb-0  mx-auto  max-w-[1512px] px-[16px] md:px-[24px] lg:px-[86px] xl:px-[126px] xl:pt-[59px]`}
    >
      <div className={`flex w-full flex-col gap-[16px] m-auto max-w-[960px] pb-[32px]`}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className={`font-poppins text-[#1D1D1B] text-center  text-[28px] font-bold leading-[36px] tracking-[0.28px] md:text-[#1D1D1B] md:text-center  md:text-[40px] md:font-semibold md:leading-[48px]
lg:text-[#1D1D1B] lg:text-center lg:text-[40px] lg:font-semibold lg:leading-[48px]
`}
        >
          <span>The Internet Forgot</span> <span className={gradientText}>What's Real.</span>
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
          AI can write, draw, mimic, and pretend. Identities blur, trust fades. Humanity needs a way
          to know who we're interacting with, not to exclude technology, but to protect humanity
          within it.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="font-poppins text-[#1D1D1B] text-center text-[18px] font-medium leading-[26px]
md:text-[#1D1D1B] md:text-center  md:text-[22px] md:font-medium md:leading-[34px] md:tracking-[-0.44px]
lg:text-[#1D1D1B] lg:text-center  lg:text-[22px] lg:font-medium lg:leading-[34px] lg:tracking-[-0.44px]
"
        >
          <i>The future of the internet isn't synthetic, it's human.</i>
        </motion.p>
      </div>
      <ImageShowcase />
    </section>
  );
};

export default RealSection;
