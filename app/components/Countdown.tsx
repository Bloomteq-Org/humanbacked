"use client";
import { Poppins } from "next/font/google";
import { useEffect, useMemo, useState } from "react";

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


const Countdown = ({
  items,
  className,
  targetDate,
}: CountdownProps) => {
  const fallbackTargetMs = useMemo(() => {
    // Default matches the design preview: 118d 17h 56m 32s from now.
    const seconds = ((118 * 24 + 17) * 60 + 56) * 60 + 32;
    return Date.now() + seconds * 1000;
  }, []);

  const targetMs = useMemo(() => {
    const parsed = parseTargetMs(targetDate);
    return Number.isFinite(parsed) ? parsed : fallbackTargetMs;
  }, [fallbackTargetMs, targetDate]);

  const [timeParts, setTimeParts] = useState<TimeParts>(() =>
    getParts(targetMs),
  );

  useEffect(() => {
    setTimeParts(getParts(targetMs));
    const timer = setInterval(() => {
      const next = getParts(targetMs);
      setTimeParts(next);
      if (
        next.days === 0 &&
        next.hours === 0 &&
        next.minutes === 0 &&
        next.seconds === 0
      ) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetMs]);

  const liveItems: CountdownItem[] = [
    { value: timeParts.days, label: "DAYS" },
    { value: timeParts.hours, label: "HOURS" },
    { value: timeParts.minutes, label: "MINUTES" },
    { value: timeParts.seconds, label: "SECONDS" },
  ];

  const containerClass = [
    "flex items-center justify-center gap-[12px] rounded-[20px] px-[16px] py-[10px]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={containerClass}
      data-name="Counter"
      data-node-id="1:1198"
    >
      {(items ?? liveItems).map((item) => (
        <div
          key={`${item.label}-${item.value}`}
          className="flex h-[72px] w-[72px] shrink-0 flex-col items-center justify-end gap-[4px] rounded-[16px] border border-[#f5e3f6] bg-white pb-[12px]"
        >
          <p
            className={[
              "bg-gradient-to-b from-[#3d7eff] to-[#b12cdf] bg-clip-text text-transparent",
              "text-[28px] leading-[36px] tracking-[0.28px]",
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
        </div>
      ))}
    </div>
  );
};

export default Countdown;

