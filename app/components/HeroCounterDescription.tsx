"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import Button from "./Button";

type HeroCounterDescriptionProps = {
  title?: string;
  titleHighlight?: string;
  description?: string;
  align?: "center" | "start";
  leadingSlot?: ReactNode;
  className?: string;
};

const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-[#0c3ddf] to-[#b748be]";

const HeroCounterDescription = ({
  title = "In a world filled with digital voices and faces, ",
  titleHighlight = "being human matters.",
  description = "HumanBacked is building the trust layer for the AI era, where verified creators can be trusted, celebrated, and financially rewarded for real human content.",
  align = "center",
  leadingSlot,
  className,
}: HeroCounterDescriptionProps) => {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className={`relative flex w-full flex-col gap-[40px] pt-[19px] pb-0 ${alignment} ${className ?? ""} mx-auto max-w-[1512px] px-[16px] md:px-[24px] lg:px-[86px] xl:px-[126px] xl:pt-[59px]`}
    >
      {leadingSlot}
      <div className={`flex w-full flex-col gap-[16px] max-w-[960px] ${alignment}`}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className={`font-bold text-[36px] md:text-[48px] lg:text-[56px] lg:leading-[69px] leading-[42px] md:leading-[56px] tracking-[-0.72px] md:tracking-[-1.44px] text-[#1d1d1b]`}
        >
          {title}
          {titleHighlight ? <span className={gradientText}>{titleHighlight}</span> : null}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className={`font-medium text-[18px] md:text-[22px] leading-[26px] md:leading-[34px] md:-tracking-[0.64px]  text-[#1d1d1b]`}
        >
          {description}
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        <Button
          href="#join-the-waitlist"
          className="xl:hidden"
          label="Join Our Waitlist"
          size="lg"
        />
      </motion.div>
    </section>
  );
};

export default HeroCounterDescription;
