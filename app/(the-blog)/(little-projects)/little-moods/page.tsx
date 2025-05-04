"use client"

import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { MoodCard } from "./components/mood-card";
import { Child, Mood, MOODS } from "./utils";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Little Moods",
//   description: "A little mood tracker for my children",
// };

export default function LittleMoods() {

  const initialMood = MOODS.find((m) => m.mood === "content / contente");

  if (!initialMood) {
    throw new Error("Mood 'content / contente' not found in MOODS");
  }

const [children, setChildren] = useState<Child[]>([
  {
  name: "Ellie", 
  birthdate: "2020-11-04" , 
  mood: initialMood, 
  avatar: '/img/ellie-avatar.png', 
  moodHistory: [initialMood]}, 
  {
  name: "Liam", 
   birthdate: "2019-04-06" , 
   mood: initialMood, 
   avatar: "/img/liam-avatar.png", 
   moodHistory: [initialMood]}
])



const updateMood = (index: number, newMood: Mood) => {
  setChildren((prev) => {
    const updated = [...prev];
    const child = updated[index]; 

    updated[index] = {
      ...child,
      mood: newMood,
      moodHistory: [...child.moodHistory, newMood]
    }
      return updated
  })

}

const resetMoodHistory = (index: number) => {
  setChildren((prev) => {
    const updated = [...prev]
    const child = updated[index]

    updated[index] = {
      ...child, 
      moodHistory: [child.mood],
    }

    return updated
  })

}

useEffect(() => {
  const saved = localStorage.getItem("children");
  if (saved) {
    setChildren(JSON.parse(saved))
  }
}, [])

useEffect(() => {
  localStorage.setItem("children", JSON.stringify(children))
}, [children])

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ">
       <div className="flex flex-row text-center gap-4 md:flex-row md:justify-between md:gap-8 h-[100%]">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block titre text-4xl lg:text-5xl">
              LITTLE MOODS
            </h1>
              </div>
    </div>
    <div className="flex flex-row mt-16 text-center justify-center gap-4  md:justify-center md:gap-8 h-[100%] ">
      <div className="flex flex-col md:flex-row gap-4">
    {children.map((child, index) => (
      <MoodCard key={index} 
                child={child} 
                onMoodSelect={(mood) => updateMood(index, mood)} onResetHistory={() => resetMoodHistory(index)} />
    )
  )}
      </div>
    </div >
    <div className="flex flex-row w-full justify-center">

    <a className="text-xs mt-4 text-muted-foreground italic " href="http://www.freepik.com">Emojis designed by rawpixel.com / Freepik</a>
    </div>
    </div>

  )}