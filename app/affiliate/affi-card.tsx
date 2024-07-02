"use client";

import Image from "next/image";

export const AffiCard = ({ title , link, description, image, tag }) => {

  const handleClick = () => {
    window.open(link, "_blank");
  }

  return (

    <>
  

  <div className="border rounded-lg flex flex-col items-centergap-2 gap-2 pt-2 bg-black/30">
    <h1 className="text-xl font-bold text-white text-center">{title}</h1>
    <p className="italic text-sm pl-4 ">{description}</p>
    <Image src={image} alt="affi-beginjs" width={400} height={400} onClick={handleClick} className="hover:cursor-pointer rounded-b-lg"/> 
    {tag === "gratuit" ? <div className="ml-4 mb-2 text-sm font-bold bg-lime-500 max-w-fit px-2 rounded-md text-black">Cours gratuits</div> : <div className="ml-4 mb-2 text-sm font-medium bg-yellow-500 max-w-fit px-2 rounded-md text-black">Formation complète</div> }
  </div>
  
  
  </>);
};
