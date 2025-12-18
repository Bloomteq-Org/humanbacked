"use client";

import { motion } from "framer-motion";

export const Divider = () => {
  return (
    <section className=" mx-auto max-w-[1512px] px-[16px] md:px-[24px] lg:px-[86px] xl:px-[126px]">
      <motion.div
        className="w-full h-[1px] bg-[#F1F1F1] mt-[56px] mb-[40px] md:mb-[80px]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
      />
    </section>
  );
};

export default Divider;
