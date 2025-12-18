"use client";
import { Poppins } from "next/font/google";
import { useEffect, useMemo, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

type CountdownItem = {
  value: string | number;
  label: string;
};

type CountdownProps = {
  items?: CountdownItem[];
  className?: string;
  /**
   * Target date/time to count down to. Accepts Date, timestamp, or ISO string.
   * Defaults to ~118d 17h 56m 32s from now to match the design snapshot.
   */
  targetDate?: Date | string | number;
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

type TimeParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const clampNonNegative = (value: number) => (value < 0 ? 0 : value);

const parseTargetMs = (target?: Date | string | number) => {
  if (!target) return NaN;
  const ms =
    target instanceof Date
      ? target.getTime()
      : typeof target === "number"
        ? target
        : Date.parse(target);
  return Number.isFinite(ms) ? ms : NaN;
};

const getParts = (targetMs: number): TimeParts => {
  const now = Date.now();
  const diff = clampNonNegative(targetMs - now);
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
};

const Countdown = ({ items, className, targetDate }: CountdownProps) => {
  const [mounted, setMounted] = useState(false);

  const fallbackTargetMs = useMemo(() => {
    // Default matches the design preview: 118d 17h 56m 32s from now.
    // Only calculate on client to avoid hydration mismatch
    if (typeof window === "undefined") return NaN;
    const seconds = ((118 * 24 + 17) * 60 + 56) * 60 + 32;
    return Date.now() + seconds * 1000;
  }, []);

  const targetMs = useMemo(() => {
    if (!mounted) return NaN;
    const parsed = parseTargetMs(targetDate);
    return Number.isFinite(parsed) ? parsed : fallbackTargetMs;
  }, [mounted, fallbackTargetMs, targetDate]);

  // Initialize with zeros to avoid hydration mismatch
  const [timeParts, setTimeParts] = useState<TimeParts>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !Number.isFinite(targetMs)) return;

    const updateTime = () => {
      const next = getParts(targetMs);
      setTimeParts(next);
      return next;
    };

    // Set initial time immediately
    updateTime();

    const timer = setInterval(() => {
      const next = updateTime();
      if (next.days === 0 && next.hours === 0 && next.minutes === 0 && next.seconds === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [mounted, targetMs]);

  const liveItems: CountdownItem[] = [
    { value: timeParts.days, label: "DAYS" },
    { value: timeParts.hours, label: "HOURS" },
    { value: timeParts.minutes, label: "MINUTES" },
    { value: timeParts.seconds, label: "SECONDS" },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const containerClass = [
    "flex items-center justify-center gap-[12px] rounded-[20px] px-[16px]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={containerRef} className={containerClass} data-name="Counter" data-node-id="1:1198">
      {(items ?? liveItems).map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  scale: 0.5,
                  y: 30,
                }
          }
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          transition={{
            opacity: { duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] },
            scale: { duration: 0.6, delay: index * 0.1, ease: [0.34, 1.56, 0.64, 1] },
            y: { duration: 0.6, delay: index * 0.1, ease: [0.34, 1.56, 0.64, 1] },
          }}
          className="flex h-[72px] w-[72px] md:w-[90px] md:h-[90px] shrink-0 flex-col items-center justify-end gap-[4px] rounded-[16px] border border-[#f5e3f6] bg-white pb-[12px]"
        >
          <p
            className={[
              "bg-gradient-to-r from-[#0C3DDF] to-[#B748BE] bg-clip-text text-transparent",
              "text-[28px] md:text-[40px] md:leading-[48px] md:-tracking-[0.8px] leading-[36px] tracking-[0.28px]",
              "font-bold",
              poppins.className,
            ].join(" ")}
          >
            {item.value}
          </p>
          <p
            className={[
              "text-[10px] leading-[10px] tracking-[0.28px] text-[#1d1d1b]",
              "font-medium uppercase",
              poppins.className,
            ].join(" ")}
          >
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Countdown;
