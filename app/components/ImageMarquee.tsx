"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import artist from "../images/Artist.png";
import artist1 from "../images/Artist1.png";
import artist2 from "../images/Artist2.png";
import artist3 from "../images/Artist3.png";

type ImageMarqueeProps = {
  className?: string;
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  gradient?: boolean;
  gradientColor?: string;
  gradientWidth?: string;
};

const images = [artist, artist1, artist2, artist3] as unknown as string[];

const ImageMarquee = ({
  className = "",
  speed = 50,
  direction = "left",
  gradient = true,
  gradientColor = "#ffffff",
  gradientWidth = "0px",
}: ImageMarqueeProps) => {
  if (!images || images.length === 0) {
    return null;
  }

  // Dupliramo slike za seamless loop
  const duplicatedImages = [...images, ...images];
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [shouldStartMarquee, setShouldStartMarquee] = useState(false);

  // Izračunajmo vreme potrebno da se sve animacije završe
  const animationDelay = images.length * 0.15; // delay između svake slike
  const animationDuration = 0.7; // trajanje animacije
  const totalAnimationTime = animationDelay + animationDuration;

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(
        () => {
          setShouldStartMarquee(true);
        },
        totalAnimationTime * 1000 + 100,
      );
      return () => clearTimeout(timer);
    }
  }, [isInView, totalAnimationTime]);

  return (
    <div ref={containerRef} className={`relative w-full py-[40px] lg:py-[80px] ${className}`}>
      <Marquee
        speed={speed}
        direction={direction}
        pauseOnHover={false}
        gradient={gradient}
        gradientColor={gradientColor}
        gradientWidth={gradientWidth}
        play={shouldStartMarquee}
      >
        {duplicatedImages.map((src, index) => (
          <motion.div
            key={`${src}-${index}`}
            initial={{ opacity: 0 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0,
                  }
            }
            transition={{
              duration: 0.7,
              delay: (index % images.length) * 0.15,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="mx-4 flex-shrink-0 w-[320px] h-[320px] xl:w-[400px] xl:h-[400px] rounded-[24px] overflow-hidden bg-gray-100"
          >
            <Image
              src={src}
              alt={`Marquee image ${index + 1}`}
              width={400}
              height={400}
              className="object-cover object-top w-full h-full"
              sizes="(max-width: 1280px) 320px, 400px"
              loading="lazy"
              quality={75}
            />
          </motion.div>
        ))}
      </Marquee>
    </div>
  );
};

export default ImageMarquee;
