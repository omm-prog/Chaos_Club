import { Prompt } from '../../types/game'

export const bestieWarsPrompts: Prompt[] = [
  // Who Is Most Likely To?
  {
    id: 'bw-01',
    zoneId: 'bestie-wars',
    category: 'Who Is Most Likely To?',
    text: 'On the count of three, everyone point: Who is most likely to survive the longest in a zombie apocalypse?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['vote', 'apocalypse']
  },
  {
    id: 'bw-02',
    zoneId: 'bestie-wars',
    category: 'Who Is Most Likely To?',
    text: 'Everyone point: Who is most likely to accidentally become famous on TikTok for something completely ridiculous?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['vote', 'tiktok']
  },
  {
    id: 'bw-03',
    zoneId: 'bestie-wars',
    category: 'Who Is Most Likely To?',
    text: 'Count of 3 point: Who would lose their phone inside a 10-foot studio apartment and search for 45 minutes?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['vote', 'clumsy']
  },
  {
    id: 'bw-04',
    zoneId: 'bestie-wars',
    category: 'Who Is Most Likely To?',
    text: 'Everyone point: Who is most likely to befriend the pilot, flight crew, and entire row on a cross-country flight?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['vote', 'social']
  },
  {
    id: 'bw-05',
    zoneId: 'bestie-wars',
    category: 'Who Is Most Likely To?',
    text: 'Point to the player most likely to start a passionate debate over whether cereal is technically a cold soup.',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'vote' },
    tags: ['vote', 'debate']
  },
  {
    id: 'bw-06',
    zoneId: 'bestie-wars',
    category: 'Who Is Most Likely To?',
    text: 'Count of three point: Who is most likely to buy $200 worth of specialty hobby gear and quit 4 days later?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['vote', 'hobbies']
  },
  {
    id: 'bw-07',
    zoneId: 'bestie-wars',
    category: 'Who Is Most Likely To?',
    text: 'Everyone point: Who is most likely to accidentally insult a villain without realizing they are in danger?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'vote' },
    tags: ['vote', 'danger']
  },
  {
    id: 'bw-08',
    zoneId: 'bestie-wars',
    category: 'Who Is Most Likely To?',
    text: 'Point: Who would cry during an animated Disney or Pixar movie intro within the first 6 minutes?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['vote', 'emotional']
  },

  // Guess Who
  {
    id: 'bw-09',
    zoneId: 'bestie-wars',
    category: 'Guess Who',
    text: 'The active player thinks of one person in the room. Everyone takes turns asking yes/no questions to guess who it is!',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['guess', 'deduction']
  },
  {
    id: 'bw-10',
    zoneId: 'bestie-wars',
    category: 'Guess Who',
    text: 'Say 3 obscure facts about your own teenage years. The first person to identify which one is a fake gets bonus points!',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['facts', 'trivia']
  },
  {
    id: 'bw-11',
    zoneId: 'bestie-wars',
    category: 'Guess Who',
    text: 'Describe someone in the room as a coffee beverage (e.g. triple espresso, oat milk iced latte). Group guesses who!',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['coffee', 'vibes']
  },
  {
    id: 'bw-12',
    zoneId: 'bestie-wars',
    category: 'Guess Who',
    text: 'Pick one player silently. Hum their favorite song or anthem until someone shouts their name and song title!',
    difficulty: 'spicy',
    duration: 30,
    scoring: { points: 20, type: 'standard' },
    tags: ['humming', 'music']
  },
  {
    id: 'bw-13',
    zoneId: 'bestie-wars',
    category: 'Guess Who',
    text: 'Describe someone in this circle using only 3 emoji titles. The group has 15 seconds to identify the player!',
    difficulty: 'mild',
    duration: 15,
    scoring: { points: 15, type: 'standard' },
    tags: ['emojis', 'friends']
  },
  {
    id: 'bw-14',
    zoneId: 'bestie-wars',
    category: 'Guess Who',
    text: 'State your current screen time or top used mobile app. Group guesses if you are telling the truth or shaving off hours!',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['screentime', 'habits']
  },

  // Best Friend Trivia
  {
    id: 'bw-15',
    zoneId: 'bestie-wars',
    category: 'Best Friend Trivia',
    text: 'Pick one player: Guess their exact comfort food order when having a bad day. If correct, you both get 15 points!',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['comfort-food', 'besties']
  },
  {
    id: 'bw-16',
    zoneId: 'bestie-wars',
    category: 'Best Friend Trivia',
    text: 'Without looking at their shoes or wrists, guess the player to your right’s favorite color and dream vacation spot.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['trivia', 'colors']
  },
  {
    id: 'bw-17',
    zoneId: 'bestie-wars',
    category: 'Best Friend Trivia',
    text: 'Tell the story of how you first met someone here, but intentionally include one fake detail. Can they spot it?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['story', 'origin']
  },
  {
    id: 'bw-18',
    zoneId: 'bestie-wars',
    category: 'Best Friend Trivia',
    text: 'What is a catchphrase, filler word, or hand gesture that someone in this room repeats constantly?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['catchphrase', 'mannerisms']
  },
  {
    id: 'bw-19',
    zoneId: 'bestie-wars',
    category: 'Best Friend Trivia',
    text: 'Challenge the player opposite you: Recite each other’s full middle names or birth months correctly!',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['middle-names', 'duo']
  },
  {
    id: 'bw-20',
    zoneId: 'bestie-wars',
    category: 'Best Friend Trivia',
    text: 'Name the one celebrity crush your bestie had in high school or middle school that was utterly chaotic.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['celebrity', 'cringe']
  },

  // Group Predictions
  {
    id: 'bw-21',
    zoneId: 'bestie-wars',
    category: 'Group Predictions',
    text: 'Predict which player will be the first person to fall asleep or leave the party tonight.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['predictions', 'sleep']
  },
  {
    id: 'bw-22',
    zoneId: 'bestie-wars',
    category: 'Group Predictions',
    text: 'Predict what everyone in this room will be doing 10 years from today. Choose one wild accurate prediction!',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['future', 'predictions']
  },
  {
    id: 'bw-23',
    zoneId: 'bestie-wars',
    category: 'Group Predictions',
    text: 'If the group formed a heist crew to steal the Mona Lisa, predict everyone’s heist specialization and codename.',
    difficulty: 'chaos',
    scoring: { points: 25, type: 'standard' },
    tags: ['heist', 'squad']
  },
  {
    id: 'bw-24',
    zoneId: 'bestie-wars',
    category: 'Group Predictions',
    text: 'Predict who would win a 100-meter dash in this group right now in current footwear.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['athletics', 'sprint']
  },
  {
    id: 'bw-25',
    zoneId: 'bestie-wars',
    category: 'Group Predictions',
    text: 'Predict which player would accidentally join a cult because they were lured by free gourmet brunch and good vibes.',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'vote' },
    tags: ['cult', 'brunch']
  },

  // Friendly Rivalry
  {
    id: 'bw-26',
    zoneId: 'bestie-wars',
    category: 'Friendly Rivalry',
    text: 'Challenge another player to a thumb-wrestling match. First to 3 pins wins glory and 20 points!',
    difficulty: 'spicy',
    duration: 30,
    scoring: { points: 20, type: 'standard' },
    tags: ['thumb-war', 'clash']
  },
  {
    id: 'bw-27',
    zoneId: 'bestie-wars',
    category: 'Friendly Rivalry',
    text: 'Staring contest showdown against your chosen rival! No blinking, smiling, or looking away. First to blink loses.',
    difficulty: 'spicy',
    duration: 30,
    scoring: { points: 20, type: 'standard' },
    tags: ['staring', 'battle']
  },
  {
    id: 'bw-28',
    zoneId: 'bestie-wars',
    category: 'Friendly Rivalry',
    text: 'Rock-Paper-Scissors best of 3 championship against the player with the highest current score!',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['rps', 'classic']
  },
  {
    id: 'bw-29',
    zoneId: 'bestie-wars',
    category: 'Friendly Rivalry',
    text: 'Rapid-fire category battle: Name movie franchises back and forth with a rival. First one to hesitate >3 sec loses!',
    difficulty: 'spicy',
    duration: 30,
    scoring: { points: 20, type: 'standard' },
    tags: ['trivia', 'rapid']
  },
  {
    id: 'bw-30',
    zoneId: 'bestie-wars',
    category: 'Friendly Rivalry',
    text: 'Compliment battle: You and your rival take turns giving each other escalating absurd compliments until someone breaks!',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['compliments', 'duel']
  },

  // Team Challenges
  {
    id: 'bw-31',
    zoneId: 'bestie-wars',
    category: 'Team Challenges',
    text: 'Split into two teams! One player acts out "Winning an Olympic gold medal for extreme sleeping" without speaking. 30s!',
    difficulty: 'spicy',
    duration: 30,
    scoring: { points: 20, type: 'standard' },
    tags: ['charades', 'teams']
  },
  {
    id: 'bw-32',
    zoneId: 'bestie-wars',
    category: 'Team Challenges',
    text: 'Group harmony: Everyone in the circle must hum the same exact note in unison for 5 seconds without pitch wavering.',
    difficulty: 'mild',
    duration: 10,
    scoring: { points: 15, type: 'standard' },
    tags: ['sound', 'harmony']
  },
  {
    id: 'bw-33',
    zoneId: 'bestie-wars',
    category: 'Team Challenges',
    text: 'Word association chain: Go around the circle saying connected words in under 2 seconds each. Reach 20 words unbroken!',
    difficulty: 'spicy',
    duration: 30,
    scoring: { points: 20, type: 'standard' },
    tags: ['chain', 'words']
  },
  {
    id: 'bw-34',
    zoneId: 'bestie-wars',
    category: 'Team Challenges',
    text: 'The Wave: Execute a synchronized stadium sports wave around the room 3 times with escalating sound effects!',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['wave', 'energy']
  },
  {
    id: 'bw-35',
    zoneId: 'bestie-wars',
    category: 'Team Challenges',
    text: 'Silent team ranking: Without saying a single word or writing, arrange the group in order of height or shoe size!',
    difficulty: 'chaos',
    duration: 25,
    scoring: { points: 25, type: 'standard' },
    tags: ['silent', 'coordination']
  },
  {
    id: 'bw-36',
    zoneId: 'bestie-wars',
    category: 'Who Is Most Likely To?',
    text: 'Point to who is most likely to accidentally agree to a phone plan upgrade they neither wanted nor understood.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['vote', 'sales']
  },
  {
    id: 'bw-37',
    zoneId: 'bestie-wars',
    category: 'Best Friend Trivia',
    text: 'What was your partner or bestie’s most memorable fashion disaster phase?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['fashion', 'nostalgia']
  },
  {
    id: 'bw-38',
    zoneId: 'bestie-wars',
    category: 'Friendly Rivalry',
    text: 'Dance-off sudden death: 15-second freestyle dance battle against the person sitting across from you. Group judges!',
    difficulty: 'chaos',
    duration: 15,
    scoring: { points: 25, type: 'vote' },
    tags: ['dance', 'duel']
  },
  {
    id: 'bw-39',
    zoneId: 'bestie-wars',
    category: 'Guess Who',
    text: 'Whisper a funny secret habit to the player beside you. They must describe it anonymously for the group to guess!',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['whisper', 'habits']
  },
  {
    id: 'bw-40',
    zoneId: 'bestie-wars',
    category: 'Who Is Most Likely To?',
    text: 'Point: Who would survive a horror movie by simply turning around and walking in the opposite direction immediately?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['vote', 'survival']
  },
  {
    id: 'bw-41',
    zoneId: 'bestie-wars',
    category: 'Group Predictions',
    text: 'If this entire group was trapped in an escape room with a 60-minute timer, who solves the final puzzle?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['escape-room', 'puzzle']
  },
  {
    id: 'bw-42',
    zoneId: 'bestie-wars',
    category: 'Team Challenges',
    text: 'Group freeze game: When the active player yells "CHAOS FREEZE", everyone freezes like statues for 10 seconds. First to move loses 10 pts!',
    difficulty: 'mild',
    duration: 10,
    scoring: { points: 15, type: 'standard' },
    tags: ['freeze', 'game']
  },
  {
    id: 'bw-43',
    zoneId: 'bestie-wars',
    category: 'Who Is Most Likely To?',
    text: 'Point: Who is most likely to show up 15 minutes early to an event, sit in their car, and still walk in 5 minutes late?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['vote', 'relatable']
  },
  {
    id: 'bw-44',
    zoneId: 'bestie-wars',
    category: 'Best Friend Trivia',
    text: 'What is the most ridiculous inside joke this group has that would make zero sense to an outsider?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['inside-joke', 'bonding']
  },
  {
    id: 'bw-45',
    zoneId: 'bestie-wars',
    category: 'Friendly Rivalry',
    text: 'Accent duel: Debate whether pineapple belongs on pizza in thick pirate voices with another chosen player.',
    difficulty: 'spicy',
    duration: 20,
    scoring: { points: 20, type: 'standard' },
    tags: ['pirate', 'debate']
  },
  {
    id: 'bw-46',
    zoneId: 'bestie-wars',
    category: 'Guess Who',
    text: 'Name 3 songs that define your personal coming-of-age era. The group must vote on which one is the undisputed banger.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['music', 'nostalgia']
  },
  {
    id: 'bw-47',
    zoneId: 'bestie-wars',
    category: 'Who Is Most Likely To?',
    text: 'Point: Who is most likely to win a debate they know nothing about simply through sheer confidence and hand gestures?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'vote' },
    tags: ['vote', 'confidence']
  },
  {
    id: 'bw-48',
    zoneId: 'bestie-wars',
    category: 'Group Predictions',
    text: 'Who in this room would write the most bestselling, juicy memoir 30 years from now?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['memoir', 'lore']
  },
  {
    id: 'bw-49',
    zoneId: 'bestie-wars',
    category: 'Team Challenges',
    text: 'Pass the invisible hot potato around the circle at rapid speed making silly sound effects. Don’t drop it for 15 seconds!',
    difficulty: 'mild',
    duration: 15,
    scoring: { points: 15, type: 'standard' },
    tags: ['potato', 'energy']
  },
  {
    id: 'bw-50',
    zoneId: 'bestie-wars',
    category: 'Friendly Rivalry',
    text: 'Quick draw: Count to 3 with another player. First to point finger-guns and say "BANG" gets the glory!',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['quickdraw', 'reaction']
  },
  {
    id: 'bw-51',
    zoneId: 'bestie-wars',
    category: 'Best Friend Trivia',
    text: 'What is a purchase someone here made that everyone else unanimously agreed was completely unnecessary?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['shopping', 'banter']
  },
  {
    id: 'bw-52',
    zoneId: 'bestie-wars',
    category: 'Who Is Most Likely To?',
    text: 'Everyone point: Who is most likely to start laughing uncontrollably in a completely quiet, serious room?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['vote', 'giggles']
  }
]
