"use client";

const scrollToServicesSection = () => {
  const targetElement = document.getElementById("services");
  if (targetElement) {
    const offset = 50;
    const elementPosition = targetElement.offsetTop - offset;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};
export const ButtonShimmerFreelance = () => {
  return (
    <button
      onClick={scrollToServicesSection}
      className="inline-flex h-10 animate-shimmer items-center justify-center rounded-full border border-stone-900 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6  text-sm font-medium text-orange-50 transition-colors focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      Je veux un site web
    </button>
  );
};
