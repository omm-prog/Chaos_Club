import { Prompt } from '../../../types/game'

export const savageMode18Prompts: Prompt[] = [
  // Quick-Fire Questions 18+
  {
    id: 'sm18-01',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Quick-Fire Questions',
    text: 'You have 5 seconds: Name 3 immediate romantic turn-offs in the bedroom. GO!',
    difficulty: 'mild',
    duration: 5,
    scoring: { points: 15, type: 'standard' },
    tags: ['fast', 'turn-offs']
  },
  {
    id: 'sm18-02',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Quick-Fire Questions',
    text: 'Rapid fire: Name 3 dating app red flags that scream "run away immediately" in 6 seconds!',
    difficulty: 'mild',
    duration: 6,
    scoring: { points: 15, type: 'standard' },
    tags: ['fast', 'red-flags']
  },
  {
    id: 'sm18-03',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Quick-Fire Questions',
    text: '5 seconds: Name 3 adult celebrity crushes you would let break your heart without hesitation!',
    difficulty: 'spicy',
    duration: 5,
    scoring: { points: 20, type: 'standard' },
    tags: ['celebrities', 'crushes']
  },
  {
    id: 'sm18-04',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Quick-Fire Questions',
    text: 'Name 3 places you should NEVER attempt a risky hookup in under 5 seconds flat!',
    difficulty: 'mild',
    duration: 5,
    scoring: { points: 15, type: 'standard' },
    tags: ['places', 'speed']
  },
  {
    id: 'sm18-05',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Quick-Fire Questions',
    text: 'Spit out 3 excuses people use when leaving in the morning in under 5 seconds!',
    difficulty: 'mild',
    duration: 5,
    scoring: { points: 15, type: 'standard' },
    tags: ['excuses', 'fast']
  },
  {
    id: 'sm18-06',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Quick-Fire Questions',
    text: 'Name 3 physical traits that instantly grab your attention across a crowded bar in 5 seconds!',
    difficulty: 'mild',
    duration: 5,
    scoring: { points: 15, type: 'standard' },
    tags: ['attraction', 'speed']
  },

  // Harmless Adult Roasts 18+
  {
    id: 'sm18-07',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Harmless Roasts',
    text: 'Roast your own flirting style when you’ve had one too many espresso martinis.',
    difficulty: 'mild',
    duration: 15,
    scoring: { points: 15, type: 'standard' },
    tags: ['self-roast', 'martini']
  },
  {
    id: 'sm18-08',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Harmless Roasts',
    text: 'What was your most pathetic attempt at acting seductive that completely backfired?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['fails', 'seduction']
  },
  {
    id: 'sm18-09',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Harmless Roasts',
    text: 'Let the group vote: Who in this room would fall for an obvious scammer if they were extremely attractive?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'vote' },
    tags: ['scammer', 'attraction']
  },
  {
    id: 'sm18-10',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Harmless Roasts',
    text: 'Deliver a 15-second acceptance speech for winning the award of "Most Delusional Rom-Com Expectation".',
    difficulty: 'mild',
    duration: 15,
    scoring: { points: 15, type: 'standard' },
    tags: ['speech', 'delusion']
  },
  {
    id: 'sm18-11',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Harmless Roasts',
    text: 'Roast the concept of situationships in 3 merciless sentences.',
    difficulty: 'spicy',
    scoring: { points: 15, type: 'standard' },
    tags: ['situationships', 'roast']
  },

  // Reaction Battles 18+
  {
    id: 'sm18-12',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Reaction Battles',
    text: 'Showdown: You and the player to your left have 10 seconds to deliver your smoothest bedroom line. Group votes winner!',
    difficulty: 'spicy',
    duration: 20,
    scoring: { points: 20, type: 'vote' },
    tags: ['duel', 'smooth']
  },
  {
    id: 'sm18-13',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Reaction Battles',
    text: 'Poker face challenge: Look at the player who has the wildest dating history while they describe a spicy encounter for 15s!',
    difficulty: 'spicy',
    duration: 15,
    scoring: { points: 20, type: 'standard' },
    tags: ['poker-face', 'spicy']
  },
  {
    id: 'sm18-14',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Reaction Battles',
    text: 'Blink battle: Maintain an unbroken seductive gaze with your chosen rival. First to blink loses 10 points!',
    difficulty: 'spicy',
    duration: 20,
    scoring: { points: 20, type: 'standard' },
    tags: ['blink', 'gaze']
  },
  {
    id: 'sm18-15',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Reaction Battles',
    text: 'Rapid draw: On 3, you and a rival must both strike a famous movie pinup pose. Most dramatic pose wins 20 points!',
    difficulty: 'mild',
    scoring: { points: 20, type: 'vote' },
    tags: ['pinup', 'pose']
  },

  // Mini Competitions 18+
  {
    id: 'sm18-16',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Mini Competitions',
    text: 'Slow motion crawl: Do a dramatic movie action hero crawl for 8 seconds without laughing!',
    difficulty: 'mild',
    duration: 8,
    scoring: { points: 15, type: 'standard' },
    tags: ['crawl', 'action']
  },
  {
    id: 'sm18-17',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Mini Competitions',
    text: 'Whisper game: Mouth a spicy sentence silently to the room. The first player to decode all 4 words gets 20 points!',
    difficulty: 'spicy',
    duration: 25,
    scoring: { points: 20, type: 'standard' },
    tags: ['whisper', 'lips']
  },
  {
    id: 'sm18-18',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Mini Competitions',
    text: 'Bartender flair: Mime creating an elaborate, fiery $30 cocktail with dramatic shaker tosses in 15 seconds.',
    difficulty: 'mild',
    duration: 15,
    scoring: { points: 15, type: 'standard' },
    tags: ['cocktail', 'flair']
  },
  {
    id: 'sm18-19',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Mini Competitions',
    text: 'Strut showdown: Do your best high-fashion Victoria’s Secret or runway model strut across the room!',
    difficulty: 'mild',
    duration: 10,
    scoring: { points: 15, type: 'standard' },
    tags: ['runway', 'model']
  },

  // Risk-and-Reward Rounds 18+
  {
    id: 'sm18-20',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Risk-and-Reward Rounds',
    text: 'Gamble: Reveal your most recent flirty DM or text message for +30 points, or pass and forfeit 10 points!',
    difficulty: 'chaos',
    scoring: { points: 30, type: 'bonus' },
    tags: ['gamble', 'texts']
  },
  {
    id: 'sm18-21',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Risk-and-Reward Rounds',
    text: 'High roller: Let the player with the lowest score ask you any raw adult question with 100% honesty for +25 points!',
    difficulty: 'chaos',
    scoring: { points: 25, type: 'bonus' },
    tags: ['gamble', 'honesty']
  },
  {
    id: 'sm18-22',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Risk-and-Reward Rounds',
    text: 'Double down: Take a sip of everyone’s drink (or do 10 squats) while singing an R&B hook for +25 points!',
    difficulty: 'spicy',
    scoring: { points: 25, type: 'bonus' },
    tags: ['rnb', 'squats']
  },
  {
    id: 'sm18-23',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Risk-and-Reward Rounds',
    text: 'Dare jackpot: Allow the group to assign you a harmless 20-second adult dare. Complete it to steal 25 points!',
    difficulty: 'chaos',
    duration: 20,
    scoring: { points: 25, type: 'bonus' },
    tags: ['jackpot', 'dare']
  },

  // Random Challenge Cards 18+
  {
    id: 'sm18-24',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Random Challenge Cards',
    text: 'Read the description of your favorite cocktail or perfume in your most breathy French accent.',
    difficulty: 'mild',
    duration: 15,
    scoring: { points: 15, type: 'standard' },
    tags: ['accent', 'sensual']
  },
  {
    id: 'sm18-25',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Random Challenge Cards',
    text: 'Describe what your dream adult escape cabin in Aspen or Tulum looks like in 20 seconds.',
    difficulty: 'mild',
    duration: 20,
    scoring: { points: 15, type: 'standard' },
    tags: ['cabin', 'fantasy']
  },
  {
    id: 'sm18-26',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Random Challenge Cards',
    text: 'Give a 15-second seductive sales pitch for an ordinary ballpoint pen.',
    difficulty: 'mild',
    duration: 15,
    scoring: { points: 15, type: 'standard' },
    tags: ['pitch', 'pen']
  },
  {
    id: 'sm18-27',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Quick-Fire Questions',
    text: 'You have 5 seconds: Name 3 songs that are permanently banned from any romantic bedroom playlist!',
    difficulty: 'mild',
    duration: 5,
    scoring: { points: 15, type: 'standard' },
    tags: ['music', 'playlist']
  },
  {
    id: 'sm18-28',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Harmless Roasts',
    text: 'What is a romantic mistake you made in college that you can now laugh about with relief?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['college', 'mistakes']
  },
  {
    id: 'sm18-29',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Reaction Battles',
    text: 'Rock-Paper-Scissors spicy duel: Loser must reveal their worst first date story to the group!',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['rps', 'first-date']
  },
  {
    id: 'sm18-30',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Mini Competitions',
    text: 'Air guitar solo to a classic rock love ballad: 10 seconds of pure facial commitment!',
    difficulty: 'mild',
    duration: 10,
    scoring: { points: 15, type: 'standard' },
    tags: ['air-guitar', 'passion']
  },
  {
    id: 'sm18-31',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Risk-and-Reward Rounds',
    text: 'Truth gamble: Reveal the last romantic thought you had about someone not present, or forfeit 15 pts!',
    difficulty: 'chaos',
    scoring: { points: 25, type: 'bonus' },
    tags: ['gamble', 'secrets']
  },
  {
    id: 'sm18-32',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Random Challenge Cards',
    text: 'Perform an over-the-top slow motion dramatic romantic fainting swoon onto a cushion.',
    difficulty: 'mild',
    duration: 8,
    scoring: { points: 15, type: 'standard' },
    tags: ['faint', 'drama']
  },
  {
    id: 'sm18-33',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Quick-Fire Questions',
    text: 'Name 3 things someone can wear on a first date that immediately make you think "they have great taste" in 6s!',
    difficulty: 'mild',
    duration: 6,
    scoring: { points: 15, type: 'standard' },
    tags: ['taste', 'first-date']
  },
  {
    id: 'sm18-34',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Harmless Roasts',
    text: 'What was your most questionable dating app opening line that you actually thought was clever at the time?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['dating-apps', 'lines']
  },
  {
    id: 'sm18-35',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Reaction Battles',
    text: 'Fast compliment clash: Give escalating flirty compliments back and forth with a chosen rival until someone hesitates!',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['compliments', 'duel']
  },
  {
    id: 'sm18-36',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Mini Competitions',
    text: 'Balance an empty plastic cup on your head and do 3 slow sensual hip sways without dropping it!',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['balance', 'hip-sway']
  },
  {
    id: 'sm18-37',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Risk-and-Reward Rounds',
    text: 'Blindfolded whisper: Close your eyes. A player whispers a spicy secret word; guess the word for +20 pts!',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'bonus' },
    tags: ['whisper', 'blind']
  },
  {
    id: 'sm18-38',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Random Challenge Cards',
    text: 'Speak like an action movie spy transmitting adult secrets over an encrypted radio for 15 seconds.',
    difficulty: 'mild',
    duration: 15,
    scoring: { points: 15, type: 'standard' },
    tags: ['spy', 'encrypted']
  },
  {
    id: 'sm18-39',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Quick-Fire Questions',
    text: 'Name 3 adult romantic tropes in movies that are completely unrealistic in real life in 6 seconds!',
    difficulty: 'mild',
    duration: 6,
    scoring: { points: 15, type: 'standard' },
    tags: ['tropes', 'movies']
  },
  {
    id: 'sm18-40',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Harmless Roasts',
    text: 'Roast someone’s hypothetical matchmaking ability: Who in this circle would set you up on the worst blind date?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['blind-date', 'matchmaker']
  },
  {
    id: 'sm18-41',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Reaction Battles',
    text: 'High-five with style: Give a slow, seductive high five that takes 8 seconds from start to contact!',
    difficulty: 'mild',
    duration: 8,
    scoring: { points: 15, type: 'standard' },
    tags: ['high-five', 'slow']
  },
  {
    id: 'sm18-42',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Mini Competitions',
    text: 'Beatboxing battle: Drop a 10-second sultry R&B groove beat using mouth percussion. Group votes on vibe!',
    difficulty: 'mild',
    duration: 10,
    scoring: { points: 15, type: 'vote' },
    tags: ['rnb', 'beatbox']
  },
  {
    id: 'sm18-43',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Risk-and-Reward Rounds',
    text: 'Confess your biggest physical guilty pleasure (e.g. scalp massage, back tickles) for +20 points!',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'bonus' },
    tags: ['pleasure', 'confession']
  },
  {
    id: 'sm18-44',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Random Challenge Cards',
    text: 'Give your best seductive wink to the camera or mirror and freeze in that pose for 5 seconds.',
    difficulty: 'mild',
    duration: 5,
    scoring: { points: 15, type: 'standard' },
    tags: ['wink', 'pose']
  },
  {
    id: 'sm18-45',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Quick-Fire Questions',
    text: 'Name 3 late-night foods that hit 10x harder after midnight in under 5 seconds flat!',
    difficulty: 'mild',
    duration: 5,
    scoring: { points: 15, type: 'standard' },
    tags: ['food', 'late-night']
  },
  {
    id: 'sm18-46',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Harmless Roasts',
    text: 'Give your bed’s current state (unmade, 14 pillows, laundry mountain) a rating from 1 to 10.',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['bed', 'rating']
  },
  {
    id: 'sm18-47',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Reaction Battles',
    text: 'Stare into the eyes of the player across from you and describe their romantic aesthetic in 3 words in under 4s!',
    difficulty: 'spicy',
    duration: 4,
    scoring: { points: 20, type: 'standard' },
    tags: ['aesthetic', 'fast']
  },
  {
    id: 'sm18-48',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Mini Competitions',
    text: 'Mime putting on an invisible luxury fur coat and strutting into an exclusive VIP lounge for 15s.',
    difficulty: 'mild',
    duration: 15,
    scoring: { points: 15, type: 'standard' },
    tags: ['mime', 'vip']
  },
  {
    id: 'sm18-49',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Risk-and-Reward Rounds',
    text: 'Name the one player in this room you would trust with your unlocked phone for 60 seconds for +25 points!',
    difficulty: 'spicy',
    scoring: { points: 25, type: 'bonus' },
    tags: ['unlocked-phone', 'trust']
  },
  {
    id: 'sm18-50',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Random Challenge Cards',
    text: 'Propose an imaginary toast to everyone’s future wildest romantic adventures!',
    difficulty: 'mild',
    duration: 15,
    scoring: { points: 15, type: 'standard' },
    tags: ['toast', 'future']
  },
  {
    id: 'sm18-51',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Quick-Fire Questions',
    text: 'Name 3 things that instantly make a date feel 10x more romantic in under 5 seconds!',
    difficulty: 'mild',
    duration: 5,
    scoring: { points: 15, type: 'standard' },
    tags: ['dating', 'speed']
  },
  {
    id: 'sm18-52',
    zoneId: 'savage-mode',
    vibeMode: '18+',
    category: 'Harmless Roasts',
    text: 'Crown the player who has the most effortlessly seductive charisma in the room.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['crown', 'charisma']
  }
]
