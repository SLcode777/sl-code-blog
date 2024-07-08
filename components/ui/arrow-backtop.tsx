"use client";

import { CircleArrowUp } from "lucide-react";

export const ArrowBackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <CircleArrowUp
        color="#C2410C"
        strokeWidth={1.5}
        className=" fixed bottom-10 right-10 z-[100] size-12 hover:cursor-pointer"
        onClick={scrollToTop}
      />
    </>
  );
};
