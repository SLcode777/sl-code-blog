
export type Mood = {
  mood: string,
  emoji: string,
  
  
}

export const MOODS : Mood[] = [
  {mood: "content / contente", emoji: '/img/emoji_happy.png'}, 
  {mood: "triste", emoji : '/img/emoji_sad.png'}, 
  {mood: "fatigué / fatiguée", emoji : '/img/emoji_tired.png'}, 
  {mood: "en colère", emoji: '/img/emoji_angry.png'},
  {mood: "neutre", emoji: '/img/emoji_neutral.png'}
]



export type Child = {
  name: string,
  birthdate: string,
  mood: Mood,
  avatar: string,
  moodHistory: Mood[]
}

export function getAgeFromBirthdate(birthdate: string): number {
  const today = new Date();
  const birth = new Date(birthdate)



  let age = today.getFullYear() - birth.getFullYear()

  const hasBirthdayPassedThisYear = 
    today.getMonth() > birth.getMonth() || (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate())

    if (!hasBirthdayPassedThisYear) {
      age--
    }


    return age
}