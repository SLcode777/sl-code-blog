"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Page de vente",
      value: "page de vente",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white flex justify-center items-center ">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://spikes-hackaton-lp1.vercel.app/"
          >
            <Image
              className="rounded-2xl"
              src="/img/sell-mockup.webp"
              alt="banner"
              width={2560}
              height={1440}
            />
          </a>
        </div>
      ),
    },
    {
      title: "Application",
      value: "application de timers",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white ">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://timer-app-challenge.vercel.app/"
          >
            <Image
              className="rounded-2xl"
              src="/img/timer-mockup.webp"
              alt="banner"
              width={2560}
              height={1440}
            />
          </a>
        </div>
      ),
    },
    {
      title: "Blog",
      value: "blog",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  text-xl md:text-4xl font-bold text-white flex justify-center items-center  ">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.sl-code.dev/"
          >
            <Image
              className="rounded-2xl"
              src="/img/blog-mockup.webp"
              alt="banner"
              width={2560}
              height={1440}
            />
          </a>
        </div>
      ),
    },
    // {
    //   title: "Content",
    //   value: "content",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white flex justify-center items-center">
    //       <p>Content tab</p>
    //       <DummyContent />
    //     </div>
    //   ),
    // },
    // {
    //   title: "Random",
    //   value: "random",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
    //       <p>Random tab</p>
    //       <DummyContent />
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mb-40 mt-20">
      <Tabs tabs={tabs} />
    </div>
  );
}
