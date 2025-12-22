"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import logoWhite from "../images/logo-white.svg";
import Image from "next/image";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";
import x from "../images/x.svg";
import linkedin from "../images/linkedin.svg";
import tiktok from "../images/tiktok.svg";
import Link from "next/link";

const socialMedia = [
  {
    name: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/company/humanbacked",
  },
  {
    name: "Instagram",
    icon: instagram,
    url: "https://www.instagram.com/humanbacked/",
  },
  {
    name: "TikTok",
    icon: tiktok,
    url: "https://www.tiktok.com/@humanbacked",
  },
  {
    name: "Twitter",
    icon: x,
    url: "https://x.com/HumanBacked",
  },
  {
    name: "Facebook",
    icon: facebook,
    url: "https://www.facebook.com/humanbacked/",
  },
];
const Footer = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <footer
      ref={ref}
      className="bg-[#1D1D1B] py-[50px] relative flex w-full flex-col mx-auto max-w-[1512px] px-[16px] md:px-[24px] lg:px-[86px] xl:px-[126px]"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <Image src={logoWhite} alt="logo" width={206} height={30} />
      </motion.div>

      <div className="w-full h-[1px] bg-[#F1F1F1]/20 my-[16px] " />

      <motion.p
        className="text-white text-[14px] leading-[22px] font-normal font-roboto"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
      >
        The trusted solution for human verification in an AI-dominated world.
      </motion.p>

      <motion.div
        className="flex gap-[16px] pt-[16px]"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        {socialMedia.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.2 + idx * 0.05, ease: [0.4, 0, 0.2, 1] }}
          >
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              <Image src={item.icon} alt={item.name} width={20} height={20} />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="w-full h-[1px] bg-[#F1F1F1]/20 my-[16px] " />

      <motion.p
        className="text-white text-[14px] leading-[22px] font-normal font-roboto"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
      >
        © 2025 HumanBacked. All rights reserved.
      </motion.p>

      <motion.div
        className="flex gap-[8px] items-center pt-[16px]"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <Link
          href="/terms"
          className="text-white text-[14px] leading-[22px] hover:underline hover:opacity-90 font-normal font-roboto"
        >
          Terms & Conditions
        </Link>
        <div className="h-[2px] w-[2px] bg-[#22C55E] rounded-full" />

        <Link
          href="/privacy-policy"
          className="text-white text-[14px] hover:underline hover:opacity-90 transition-colors duration-200 leading-[22px] font-normal font-roboto"
        >
          Privacy Policy
        </Link>
        <div className="h-[2px] w-[2px] bg-[#22C55E] rounded-full" />

        <Link
          href="/privacy-policy"
          className="text-white text-[14px] hover:underline hover:opacity-90 transition-colors duration-200 leading-[22px] font-normal font-roboto"
        >
          Cookies
        </Link>
      </motion.div>
    </footer>
  );
};

export default Footer;
