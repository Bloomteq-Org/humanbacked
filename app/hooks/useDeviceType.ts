"use client";

import { useState, useEffect } from "react";

/**
 * Hook za detekciju tipa uređaja baziran na Tailwind breakpointima
 *
 * Tailwind breakpoints:
 * - Mobile: < 768px (ispod md)
 * - Tablet: >= 768px i < 1024px (md do ispod lg)
 * - Desktop: >= 1024px (lg i više)
 */
export const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Funkcija za određivanje tipa uređaja
    const determineDeviceType = () => {
      if (typeof window === "undefined") return;

      const width = window.innerWidth;

      // Tailwind breakpoints
      // md: 768px, lg: 1024px
      const md = 768;
      const xl = 1280;

      setIsMobile(width < md);
      setIsTablet(width >= md && width < xl);
      setIsDesktop(width >= xl);
    };

    // Postavi inicijalne vrednosti
    determineDeviceType();

    // Dodaj event listener za promenu veličine prozora
    window.addEventListener("resize", determineDeviceType);

    // Cleanup
    return () => {
      window.removeEventListener("resize", determineDeviceType);
    };
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};



