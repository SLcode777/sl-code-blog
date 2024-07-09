"use client";


export const ButtonShimmerAffiliate = () => {
  return (
    <button
      onClick={() => window.open("https://sl-code.dev/affiliate")}
      className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-stone-900 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6  text-sm font-medium text-[#FFFCDB] transition-colors focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      Apprendre à coder
    </button>
  );
};
