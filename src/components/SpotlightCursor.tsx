"use client";

import { useEffect } from "react";

export function SpotlightCursor() {
  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--spotlight-x", `${x}%`);
      document.documentElement.style.setProperty("--spotlight-y", `${y}%`);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return null;
}
