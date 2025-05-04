import { Button } from "@/components/ui/button"
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Card, CardDescription, CardTitle } from "@/components/ui/card-hover-effect"
import Image from 'next/image'
import { Child, getAgeFromBirthdate, Mood, MOODS } from "../utils"



export const MoodCard = ({child, onMoodSelect, onResetHistory}: {child: Child; onMoodSelect: (mood: Mood) => void; onResetHistory: () => void}) => {


  return (
    <Card className="bg-foreground text-background flex flex-col">

      
      <CardHeader >
      <Image className="rounded-full self-center" src={child.avatar} alt={child.name} width={128} height={128} />
        <CardTitle className="text-background">{child.name}</CardTitle>
        <CardDescription>
          
  {child.birthdate ? `${getAgeFromBirthdate(child.birthdate)} ans` : "Âge inconnu"}
</CardDescription>

      </CardHeader>
      <CardContent className="flex flex-1 flex-col items-center gap-2 h-full">
        <div>Mon humeur du moment !</div>
        
      {child.mood ? 
      
      <Image
      className="rounded-lg"
      src={child.mood.emoji}
      alt={child.mood.mood}
      width={96}
      height={96}
    />

    
    
    
    
    : <p>no mood found</p>}
    <div className="text-xl font-bold">{child.mood.mood}</div>

    <div className="flex flex-col gap-2 mt-8">
      <p>Je sélectionne ma nouvelle humeur : </p>
      <div className="flex flex-row gap-2 justify-center">
 

      {MOODS.map((mood, index) => (
        <Button variant={"link"} size={"icon"} onClick={() => onMoodSelect(mood)}  key={mood.mood}><Image src={mood.emoji} alt={mood.mood} width={40} height={40}/></Button>
      ))}
      </div>
    </div>
    <div className="text-sm mt-10">Ces derniers temps je me suis senti : </div>
    <div className="gap-1 mt-4 justify-center grid grid-cols-10">
      {[...child.moodHistory].slice(-100).reverse().map((mood, idx) => (
        <Image key={idx} src={mood.emoji} alt={mood.mood} width={20} height={20} />
      ))}

    </div>

        
      </CardContent>
      <CardFooter className=" flex flex-col ">
        <div className="h-full">

      {child.moodHistory.length > 1 && (
    <button onClick={onResetHistory} className="text-xs  hover:underline ">
      Remettre mes humeurs à zéro
      </button>
      )}
        </div>
     </CardFooter>
    </Card>
  )
}