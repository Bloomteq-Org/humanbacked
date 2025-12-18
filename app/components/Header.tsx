"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import logo from "@/public/LogoV2.svg";
import Countdown from "./Countdown";
import Button from "./Button";
import Link from "next/link";

const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-[#0c3ddf] to-[#b748be]";

type EyebrowProps = {
  text?: string;
  highlight?: string;
  align?: "center" | "start";
  className?: string;
};

const HeroEyebrow = ({
  text = "Our journey has begun ✨ ",
  highlight = "Stay Tuned.",
  align = "center",
  className,
}: EyebrowProps) => {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <p
      className={`${alignment} text-[15px] md:text-[18px] leading-[22px] md:leading-[26px] text-[#1d1d1b] text-nowrap whitespace-pre ${className ?? ""}`}
    >
      <span>{text}</span>
      {highlight ? <span className={gradientText}>{highlight}</span> : null}
    </p>
  );
};

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="mx-auto max-w-[1512px] px-[16px] md:px-[24px] lg:px-[86px] xl:px-[126px]"
    >
      <div className="flex flex-col items-center justify-center gap-4 py-[21px]">
        <div className="flex items-center justify-center xl:justify-between w-full pb-[10px] md:pb-[24px] xl:pb-0">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={206}
                height={30}
                className="md:w-[330px] md:h-[44px] xl:h-[27px] xl:w-[257px]"
              />
            </Link>
          </motion.div>
          <motion.div
            className="hidden xl:block"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <Countdown className="" targetDate={new Date("2026-10-18T23:59:59Z")} />
          </motion.div>
          <motion.div
            className="hidden xl:block"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <Button label="Join Our Waitlist" size="lg" />
          </motion.div>
        </div>
        <motion.div
          className="xl:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          <Countdown targetDate={new Date("2026-10-18T23:59:59Z")} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <HeroEyebrow />
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
