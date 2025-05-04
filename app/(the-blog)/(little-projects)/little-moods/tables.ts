
export type Mood = {
  mood: string,
  emoji: string,
  color: string,
  
}

export const MOODS : Mood[] = [
  {mood: "content / contente", emoji: '/img/emoji_happy.png', color: "yellow"}, 
  {mood: "triste", emoji : '/img/emoji_sad.png', color: "blue"}, 
  {mood: "fatigué / fatiguée", emoji : '/img/emoji_tired.png', color: "gray"}, 
  {mood: "en colère", emoji: '/img/emoji_angry.png', color: "red"},
  {mood: "neutre", emoji: '/img/emoji_neutral.png', color: "white"}
]



export type Child = {
  name: string,
  age: number,
  mood: Mood,
  avatar: string,
  moodHistory: Mood[]
}
