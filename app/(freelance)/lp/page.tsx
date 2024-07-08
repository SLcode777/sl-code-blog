import { ContactForm } from "@/components/freelance-contact-form";
import { Pricing } from "@/components/freelance-pricing";
import { TabsDemo } from "@/components/freelance-projects";
import { ServicesCards } from "@/components/freelance-services";
import { ArrowBackToTop } from "@/components/ui/arrow-backtop";
import { ButtonGoToServices } from "@/components/ui/button-freelance-goto";
import { ChevronDown } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "SL Code | Création de sites web",
  description: "SL Code | Création de sites web à Martigues",
};

export default async function PricingPage() {
  return (
    <>
      <section id="bg-hero" className="z-10">
        <div className="fixed -top-48 left-0 w-full bg-fixed bg-cover bg-center h-screen flex flex-col justify-start items-center bg-orange-200 ">
          <Image
            alt="banner"
            src="/img/lp-banner2.webp"
            width={2560}
            height={1440}
          />
        </div>
      </section>

      <section
        id="hero"
        className="sticky top-0 -mt-20 flex flex-col justify-start items-center h-screen"
      >
        <div className="z-20 h-5/6 "></div>
        <div className="z-20 h-1/6 ">
          <ButtonGoToServices />
          <div className="flex flex-row items-center justify-center pt-2">
            <ChevronDown className="animate-bounce" />
          </div>
        </div>
      </section>
      <section id="services">
        <div className="bg-stone-900  h-fit rounded-t-3xl relative pb-20 ">
          <h1 className="py-16 px-32 titre text-orange-200 text-6xl">
            Services
          </h1>
          <div className="flex flex-col px-32  justify-center items-center ">
            <ServicesCards />
            <div className="flex flex-col justify-center items-center rounded-xl overflow-hidden  w-fit mb-24">
              <Image
                src="/img/webdesign.webp"
                alt="services"
                width={2200}
                height={720}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="tarifs">
        <div className="bg-orange-50 h-fit rounded-t-3xl relative pb-40 -mt-20 ">
          <h1 className="py-16 px-32 titre text-stone-900 text-6xl">Tarifs</h1>
          <div className="flex flex-col px-32  justify-center items-center ">
            <Pricing />
          </div>
        </div>
      </section>
      <section id="projets" className="pb-20">
        <div className="bg-stone-900 h-fit rounded-t-3xl relative pb-20 -mt-10">
          <h1 className="pt-16 px-32 titre text-orange-200 text-6xl">
            Realisations
          </h1>
          <div className="flex flex-col px-32  justify-start">
            <TabsDemo />
          </div>
        </div>
      </section>
      <section id="avis">
        <div className="bg-orange-50 h-fit rounded-t-3xl relative pb-40 -mt-20 ">
          <h1 className="py-16 px-32 titre text-stone-900 text-6xl">
            Avis Clients
          </h1>
          <div className="flex flex-col px-32  justify-center items-center">
            <div
              id="avis"
              className="group flex flex-row px-4 border border-stone-300 hover:border-transparent rounded-xl text-center text-balance text-xl italic  bg-transparent hover:bg-white hover:shadow-xl  mb-16"
            >
              <div
                id="quote-line"
                className="bg-stone-400  w-3 my-3 ml-3 group-hover:bg-orange-200"
              ></div>
              <div className="py-8 text-start  pl-4 ">
                {" "}
                Si vous faites appel à moi, vous serez mon premier client, mais
                pas mon premier projet ! :) <br /> Je ferai tout mon possible
                pour que vous soyez satisfait(e) de ma prestation !{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="bg-white h-fit rounded-t-3xl relative pb-40 -mt-20 ">
          <h1 className="py-16 px-32 titre text-stone-900 text-6xl">Contact</h1>
          <div className="flex flex-col px-32  justify-center items-center">
            <ContactForm />
          </div>
        </div>
      </section>
      <ArrowBackToTop />
    </>
  );
}
