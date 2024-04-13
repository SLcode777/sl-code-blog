"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function RevealPage() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  function startAnimation() {
    setTimeout(() => {
      const element = document.getElementById("animatedImage");
      if (element) {
        let opacity = 1;
        const duration = 2000;
        const end = performance.now() + duration;

        const fadeOut = function () {
          const now = performance.now();
          const remaining = end - now;

          if (remaining <= 0) {
            element.style.opacity = "0";
            window.location.href =
              "https://sl-code-blog.vercel.app/blog/013-un-echec";
          } else {
            opacity = remaining / duration;
            element.style.opacity = opacity.toString();
            requestAnimationFrame(fadeOut);
          }
        };

        requestAnimationFrame(fadeOut);
      }
    }, 500);
  }

  return (
    <>
      <div className="md-flex justify-center relative overflow-hidden">
        <Image
          src={"/img/framer-bye.png"}
          alt={"old-blog-image"}
          width={2460}
          height={1440}
          className={`flex w-full h-full object-cover`}
          id="animatedImage"
          onLoad={startAnimation}
          style={{
            position: "fixed",
            top: 0,
            zIndex: 1000,
          }}
        />
      </div>
    </>
  );
}
