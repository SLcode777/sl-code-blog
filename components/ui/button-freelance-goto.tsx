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

export const ButtonGoToServices = () => {
  return (
    <div
      onClick={scrollToServicesSection}
      className="bg-stone-900 rounded-full px-8 py-2 text-orange-100 font-medium mt-20 select-none"
    >
      Je veux créer mon site web
    </div>
  );
};




const scrollToContactSection = () => {
  const targetElement = document.getElementById("contact");
  if (targetElement) {
    const offset = 50;
    const elementPosition = targetElement.offsetTop - offset;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};