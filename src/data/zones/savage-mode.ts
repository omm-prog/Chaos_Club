import { Prompt } from '../../types/game'

export const savageModePrompts: Prompt[] = [
  // Quick-Fire Questions
  {
    id: 'sm-01',
    zoneId: 'savage-mode',
    category: 'Quick-Fire Questions',
    text: 'You have 5 seconds: Name 3 things you would sacrifice before giving up WiFi. GO!',
    difficulty: 'mild',
    duration: 5,
    scoring: { points: 15, type: 'standard' },
    tags: ['fast', 'wifi']
  },
  {
    id: 'sm-02',
    zoneId: 'savage-mode',
    category: 'Quick-Fire Questions',
    text: 'Rapid fire: Name 4 red flags in a dating profile in under 6 seconds!',
    difficulty: 'mild',
    duration: 6,
    scoring: { points: 15, type: 'standard' },
    tags: ['fast', 'dating']
  },
  {
    id: 'sm-03',
    zoneId: 'savage-mode',
    category: 'Quick-Fire Questions',
    text: 'Name 3 fictional villains that you secretly think had a completely valid point in 5 seconds!',
    difficulty: 'spicy',
    duration: 5,
    scoring: { points: 20, type: 'standard' },
    tags: ['villains', 'speed']
  },
  {
    id: 'sm-04',
    zoneId: 'savage-mode',
    category: 'Quick-Fire Questions',
    text: '5-second countdown: Name 3 celebrity apologies that were worse than the crime itself!',
    difficulty: 'spicy',
    duration: 5,
    scoring: { points: 20, type: 'standard' },
    tags: ['celebrities', 'cringe']
  },
  {
    id: 'sm-05',
    zoneId: 'savage-mode',
    category: 'Quick-Fire Questions',
    text: 'Spit out 3 excuses you have used to get out of social plans in under 5 seconds!',
    difficulty: 'mild',
    duration: 5,
    scoring: { points: 15, type: 'standard' },
    tags: ['excuses', 'social']
  },
  {
    id: 'sm-06',
    zoneId: 'savage-mode',
    category: 'Quick-Fire Questions',
    text: 'You have 7 seconds: Name 4 things that cost less than $10 but bring immense joy!',
    difficulty: 'mild',
    duration: 7,
    scoring: { points: 15, type: 'standard' },
    tags: ['simple-joys', 'fast']
  },
  {
    id: 'sm-07',
    zoneId: 'savage-mode',
    category: 'Quick-Fire Questions',
    text: 'Name 3 foods that smell awful but taste incredible in 5 seconds flat!',
    difficulty: 'mild',
    duration: 5,
    scoring: { points: 15, type: 'standard' },
    tags: ['food', 'speed']
  },

  // Harmless Roasts
  {
    id: 'sm-08',
    zoneId: 'savage-mode',
    category: 'Harmless Roasts',
    text: 'Invent a funny, harmless superhero identity for yourself based on your most chaotic personality trait.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['superhero', 'self-roast']
  },
  {
    id: 'sm-09',
    zoneId: 'savage-mode',
    category: 'Harmless Roasts',
    text: 'Deliver a high-octane 15-second acceptance speech for winning an award for "Most Dramatic Sighs".',
    difficulty: 'mild',
    duration: 15,
    scoring: { points: 15, type: 'standard' },
    tags: ['awards', 'roast']
  },
  {
    id: 'sm-10',
    zoneId: 'savage-mode',
    category: 'Harmless Roasts',
    text: 'Roast your own fashion sense from high school in 3 devastating sentences.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['fashion', 'self-roast']
  },
  {
    id: 'sm-11',
    zoneId: 'savage-mode',
    category: 'Harmless Roasts',
    text: 'Let the group vote to assign you a harmless funny nickname that you must answer to for the next 3 turns.',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'vote' },
    tags: ['nickname', 'group']
  },
  {
    id: 'sm-12',
    zoneId: 'savage-mode',
    category: 'Harmless Roasts',
    text: 'What is the most hilariously unnecessary item you’ve ever bought that you will defend to the death?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['purchases', 'defense']
  },
  {
    id: 'sm-13',
    zoneId: 'savage-mode',
    category: 'Harmless Roasts',
    text: 'Give a 20-second motivational breakdown of why the person to your left is built like a main character.',
    difficulty: 'mild',
    duration: 20,
    scoring: { points: 15, type: 'standard' },
    tags: ['hype', 'main-character']
  },
  {
    id: 'sm-14',
    zoneId: 'savage-mode',
    category: 'Harmless Roasts',
    text: 'If your life was an overpriced reality TV show, what would the dramatic episode title for today be?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['reality-tv', 'humor']
  },

  // Reaction Battles
  {
    id: 'sm-15',
    zoneId: 'savage-mode',
    category: 'Reaction Battles',
    text: 'Showdown: You and the player to your right both count to 3. First to slap the table gently and yell "BOOM" wins 20 pts!',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['reaction', 'clash']
  },
  {
    id: 'sm-16',
    zoneId: 'savage-mode',
    category: 'Reaction Battles',
    text: 'Poker face challenge: Maintain a deadpan poker face while the group tries to make you break into laughter for 15s!',
    difficulty: 'spicy',
    duration: 15,
    scoring: { points: 20, type: 'standard' },
    tags: ['poker-face', 'laugh']
  },
  {
    id: 'sm-17',
    zoneId: 'savage-mode',
    category: 'Reaction Battles',
    text: 'Reflex test: Balance a pen horizontally on the back of your hand. Toss it in the air and catch it with the same hand!',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['reflex', 'balance']
  },
  {
    id: 'sm-18',
    zoneId: 'savage-mode',
    category: 'Reaction Battles',
    text: 'Blink battle: First to blink during a 20-second duel against the player with the lowest score owes them 10 points!',
    difficulty: 'spicy',
    duration: 20,
    scoring: { points: 20, type: 'standard' },
    tags: ['blink', 'duel']
  },
  {
    id: 'sm-19',
    zoneId: 'savage-mode',
    category: 'Reaction Battles',
    text: 'Rock-Paper-Scissors gauntlet: Play one quick round against 3 different players. You need at least 2 wins to pass!',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['rps', 'gauntlet']
  },

  // Mini Competitions
  {
    id: 'sm-20',
    zoneId: 'savage-mode',
    category: 'Mini Competitions',
    text: 'Stand on one leg with eyes closed. Can you survive 15 seconds without tipping over or touching down?',
    difficulty: 'mild',
    duration: 15,
    scoring: { points: 15, type: 'standard' },
    tags: ['balance', 'solo']
  },
  {
    id: 'sm-21',
    zoneId: 'savage-mode',
    category: 'Mini Competitions',
    text: 'Air guitar championship: Give 15 seconds of pure shredding face and guitar solo. Group rates the energy!',
    difficulty: 'spicy',
    duration: 15,
    scoring: { points: 20, type: 'vote' },
    tags: ['air-guitar', 'rockstar']
  },
  {
    id: 'sm-22',
    zoneId: 'savage-mode',
    category: 'Mini Competitions',
    text: 'Paper airplane duel: Fold a quick paper airplane in 30 seconds. Longest glide across the room wins 25 points!',
    difficulty: 'chaos',
    duration: 30,
    scoring: { points: 25, type: 'standard' },
    tags: ['airplane', 'craft']
  },
  {
    id: 'sm-23',
    zoneId: 'savage-mode',
    category: 'Mini Competitions',
    text: 'Bottle/Cup flip: You have 3 attempts to land a clean cup or bottle flip on the table. Nail it for instant legend status!',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['bottle-flip', 'skill']
  },
  {
    id: 'sm-24',
    zoneId: 'savage-mode',
    category: 'Mini Competitions',
    text: 'Riddle showdown: The active player has 30 seconds to solve: "What has keys but no locks, space but no room, you can enter but not go in?"',
    difficulty: 'mild',
    duration: 30,
    scoring: { points: 15, type: 'standard' },
    tags: ['riddle', 'brain']
  },

  // Risk-and-Reward Rounds
  {
    id: 'sm-25',
    zoneId: 'savage-mode',
    category: 'Risk-and-Reward Rounds',
    text: 'Gamble: Double or nothing! Either do 10 clean pushups/squats for +30 points, or pass and lose 10 points!',
    difficulty: 'chaos',
    scoring: { points: 30, type: 'bonus' },
    tags: ['gamble', 'fitness']
  },
  {
    id: 'sm-26',
    zoneId: 'savage-mode',
    category: 'Risk-and-Reward Rounds',
    text: 'High roller: Let someone in the room pick a song. You must dance enthusiastically for 20 seconds for +25 points!',
    difficulty: 'spicy',
    duration: 20,
    scoring: { points: 25, type: 'bonus' },
    tags: ['dance', 'high-roller']
  },
  {
    id: 'sm-27',
    zoneId: 'savage-mode',
    category: 'Risk-and-Reward Rounds',
    text: 'Take a blind taste test of two drinks or snacks with your eyes shut. Guess correctly for +25 points!',
    difficulty: 'spicy',
    scoring: { points: 25, type: 'bonus' },
    tags: ['taste', 'blind']
  },
  {
    id: 'sm-28',
    zoneId: 'savage-mode',
    category: 'Risk-and-Reward Rounds',
    text: 'Dare jackpot: Allow the player with the lowest score to give you any harmless dare. Complete it to steal 20 points!',
    difficulty: 'chaos',
    scoring: { points: 20, type: 'bonus' },
    tags: ['jackpot', 'dare']
  },

  // Challenge Cards
  {
    id: 'sm-29',
    zoneId: 'savage-mode',
    category: 'Random Challenge Cards',
    text: 'Shadow boxing: Perform an intense 15-second anime training montage shadow boxing against the air with sound effects!',
    difficulty: 'mild',
    duration: 15,
    scoring: { points: 15, type: 'standard' },
    tags: ['boxing', 'anime']
  },
  {
    id: 'sm-30',
    zoneId: 'savage-mode',
    category: 'Random Challenge Cards',
    text: 'Whisper challenge: The group gives you a sentence. You must mouth it silently until someone guesses every word!',
    difficulty: 'spicy',
    duration: 30,
    scoring: { points: 20, type: 'standard' },
    tags: ['whisper', 'reading-lips']
  },
  {
    id: 'sm-31',
    zoneId: 'savage-mode',
    category: 'Random Challenge Cards',
    text: 'Sell a useless superpower (like being able to turn invisible ONLY when no one is looking) like a luxury infomercial.',
    difficulty: 'mild',
    duration: 20,
    scoring: { points: 15, type: 'standard' },
    tags: ['superpower', 'pitch']
  },
  {
    id: 'sm-32',
    zoneId: 'savage-mode',
    category: 'Random Challenge Cards',
    text: 'Act like a sports referee issuing a dramatic yellow card to someone in the circle for a fake foul.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['referee', 'yellow-card']
  },
  {
    id: 'sm-33',
    zoneId: 'savage-mode',
    category: 'Quick-Fire Questions',
    text: 'You have 5 seconds: Name 3 animals that look cute but could definitely end you in the wild!',
    difficulty: 'mild',
    duration: 5,
    scoring: { points: 15, type: 'standard' },
    tags: ['animals', 'speed']
  },
  {
    id: 'sm-34',
    zoneId: 'savage-mode',
    category: 'Harmless Roasts',
    text: 'What is your most ridiculous irrational pet peeve that makes you sound totally unhinged to normal people?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['pet-peeve', 'funny']
  },
  {
    id: 'sm-35',
    zoneId: 'savage-mode',
    category: 'Reaction Battles',
    text: 'High-five clap: You and another player hold hands out. On 3, try to high-five without missing each other’s palms!',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['high-five', 'accuracy']
  },
  {
    id: 'sm-36',
    zoneId: 'savage-mode',
    category: 'Mini Competitions',
    text: 'Beatboxing battle: Drop a 10-second beat with mouth percussion. If the group bobs their head, claim 20 points!',
    difficulty: 'spicy',
    duration: 10,
    scoring: { points: 20, type: 'standard' },
    tags: ['beatbox', 'music']
  },
  {
    id: 'sm-37',
    zoneId: 'savage-mode',
    category: 'Risk-and-Reward Rounds',
    text: 'Blindfolded sketch: Close your eyes and draw a dog or cat on paper or in the air in 15 seconds. Group evaluates!',
    difficulty: 'spicy',
    duration: 15,
    scoring: { points: 20, type: 'vote' },
    tags: ['sketch', 'blind']
  },
  {
    id: 'sm-38',
    zoneId: 'savage-mode',
    category: 'Random Challenge Cards',
    text: 'Speak like an action hero whispering one-liners through a walkie-talkie for the remainder of this turn.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['hero', 'one-liner']
  },
  {
    id: 'sm-39',
    zoneId: 'savage-mode',
    category: 'Quick-Fire Questions',
    text: 'Name 3 apps on your phone that you should probably delete but refuse to part with in 6 seconds!',
    difficulty: 'mild',
    duration: 6,
    scoring: { points: 15, type: 'standard' },
    tags: ['apps', 'phone']
  },
  {
    id: 'sm-40',
    zoneId: 'savage-mode',
    category: 'Harmless Roasts',
    text: 'Describe what your mugshot would be for if you were arrested for doing something completely embarrassing.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['mugshot', 'cringe']
  },
  {
    id: 'sm-41',
    zoneId: 'savage-mode',
    category: 'Reaction Battles',
    text: 'Try to recite the days of the week in reverse order (Sunday to Monday) in under 4 seconds without faltering!',
    difficulty: 'mild',
    duration: 4,
    scoring: { points: 15, type: 'standard' },
    tags: ['reverse', 'brain']
  },
  {
    id: 'sm-42',
    zoneId: 'savage-mode',
    category: 'Mini Competitions',
    text: 'Stare down with the room: Look every single player in the eye one by one for 2 seconds each without cracking a grin!',
    difficulty: 'spicy',
    duration: 15,
    scoring: { points: 20, type: 'standard' },
    tags: ['staredown', 'focus']
  },
  {
    id: 'sm-43',
    zoneId: 'savage-mode',
    category: 'Risk-and-Reward Rounds',
    text: 'Truth gamble: Answer the most awkward question the group can come up with, or forfeit 15 points right now!',
    difficulty: 'chaos',
    scoring: { points: 25, type: 'bonus' },
    tags: ['truth', 'gamble']
  },
  {
    id: 'sm-44',
    zoneId: 'savage-mode',
    category: 'Random Challenge Cards',
    text: 'Imitate the sound of an exotic sports car accelerating down an open highway for 10 seconds.',
    difficulty: 'mild',
    duration: 10,
    scoring: { points: 15, type: 'standard' },
    tags: ['engine', 'sound']
  },
  {
    id: 'sm-45',
    zoneId: 'savage-mode',
    category: 'Quick-Fire Questions',
    text: 'Quick! Name 3 movies where the bad guy was way cooler than the boring protagonist in 6 seconds!',
    difficulty: 'mild',
    duration: 6,
    scoring: { points: 15, type: 'standard' },
    tags: ['movies', 'villains']
  },
  {
    id: 'sm-46',
    zoneId: 'savage-mode',
    category: 'Harmless Roasts',
    text: 'Roast your own cooking or meal-prep skills in 15 seconds of pure honest truth.',
    difficulty: 'mild',
    duration: 15,
    scoring: { points: 15, type: 'standard' },
    tags: ['cooking', 'humor']
  },
  {
    id: 'sm-47',
    zoneId: 'savage-mode',
    category: 'Reaction Battles',
    text: 'Count-off: The player across from you picks an odd number between 11 and 29. Count down to 0 in under 5s!',
    difficulty: 'mild',
    duration: 5,
    scoring: { points: 15, type: 'standard' },
    tags: ['countdown', 'speed']
  },
  {
    id: 'sm-48',
    zoneId: 'savage-mode',
    category: 'Mini Competitions',
    text: 'Silent mime challenge: Mime ordering a complicated iced coffee at a noisy coffee shop. Group must guess order!',
    difficulty: 'spicy',
    duration: 25,
    scoring: { points: 20, type: 'standard' },
    tags: ['mime', 'coffee']
  },
  {
    id: 'sm-49',
    zoneId: 'savage-mode',
    category: 'Risk-and-Reward Rounds',
    text: 'Show your most recent camera roll meme or funny screenshot. If it makes at least 2 people laugh, get 20 points!',
    difficulty: 'mild',
    scoring: { points: 20, type: 'vote' },
    tags: ['meme', 'cameraroll']
  },
  {
    id: 'sm-50',
    zoneId: 'savage-mode',
    category: 'Random Challenge Cards',
    text: 'Do your best runway strut across the room, turn dramatically at the end, and blow a kiss to the crowd.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['runway', 'strut']
  },
  {
    id: 'sm-51',
    zoneId: 'savage-mode',
    category: 'Quick-Fire Questions',
    text: 'Name 3 things you would take with you into a high-security bunker during an emergency in 5 seconds!',
    difficulty: 'mild',
    duration: 5,
    scoring: { points: 15, type: 'standard' },
    tags: ['bunker', 'speed']
  },
  {
    id: 'sm-52',
    zoneId: 'savage-mode',
    category: 'Harmless Roasts',
    text: 'Crown the player who has the most dramatic reactions to everyday minor inconveniences.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['crown', 'drama']
  }
]
