import { Prompt } from '../../types/game'

export const coupleChemistryPrompts: Prompt[] = [
  // How Well Do You Know Each Other?
  {
    id: 'cc-01',
    zoneId: 'couple-chemistry',
    category: 'How Well Do You Know Each Other?',
    text: 'Guess your partner’s (or favorite person’s) absolute dream vacation destination without them hinting.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['travel', 'couples']
  },
  {
    id: 'cc-02',
    zoneId: 'couple-chemistry',
    category: 'How Well Do You Know Each Other?',
    text: 'What is your partner’s go-to comfort meal when they are feeling exhausted or sick?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['food', 'care']
  },
  {
    id: 'cc-03',
    zoneId: 'couple-chemistry',
    category: 'How Well Do You Know Each Other?',
    text: 'What song or artist will your partner never skip on Spotify, no matter how many times it plays?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['music', 'habits']
  },
  {
    id: 'cc-04',
    zoneId: 'couple-chemistry',
    category: 'How Well Do You Know Each Other?',
    text: 'What is your partner’s biggest pet peeve when traveling or running errands together?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['quirks', 'travel']
  },
  {
    id: 'cc-05',
    zoneId: 'couple-chemistry',
    category: 'How Well Do You Know Each Other?',
    text: 'If your partner had a superpower for 24 hours, what would they choose and what is the first thing they would do?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['imagination', 'partner']
  },
  {
    id: 'cc-06',
    zoneId: 'couple-chemistry',
    category: 'How Well Do You Know Each Other?',
    text: 'What was your partner wearing the very first day you met or went on a first date?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['memory', 'first-date']
  },
  {
    id: 'cc-07',
    zoneId: 'couple-chemistry',
    category: 'How Well Do You Know Each Other?',
    text: 'What is your partner’s secret talent that most people never get to witness?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['talents', 'closeness']
  },
  {
    id: 'cc-08',
    zoneId: 'couple-chemistry',
    category: 'How Well Do You Know Each Other?',
    text: 'How does your partner prefer to receive love: words of affirmation, physical affection, quality time, acts of service, or gifts?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['love-languages', 'care']
  },

  // Compatibility Questions
  {
    id: 'cc-09',
    zoneId: 'couple-chemistry',
    category: 'Compatibility Questions',
    text: 'On a quiet Saturday evening: spontaneous road trip or cozy movie night with warm blankets and takeout?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['compatibility', 'lifestyle']
  },
  {
    id: 'cc-10',
    zoneId: 'couple-chemistry',
    category: 'Compatibility Questions',
    text: 'If you both had an unexpected $5,000 to spend together, would you spend it on an experience or upgrading your living space?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['money', 'values']
  },
  {
    id: 'cc-11',
    zoneId: 'couple-chemistry',
    category: 'Compatibility Questions',
    text: 'Do your morning routines match or is one an early bird and the other a night owl? How do you balance it?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['routine', 'balance']
  },
  {
    id: 'cc-12',
    zoneId: 'couple-chemistry',
    category: 'Compatibility Questions',
    text: 'In 5 years, do you see yourselves living in a bustling vibrant city, quiet suburb, or seaside/mountain sanctuary?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['future', 'dreams']
  },
  {
    id: 'cc-13',
    zoneId: 'couple-chemistry',
    category: 'Compatibility Questions',
    text: 'What is one topic where you two have completely opposite opinions, but respect each other’s view anyway?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['respect', 'opinions']
  },
  {
    id: 'cc-14',
    zoneId: 'couple-chemistry',
    category: 'Compatibility Questions',
    text: 'Who is the planner and who is the spontaneous chaotic adventurer in your dynamic?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['roles', 'fun']
  },

  // Romantic Truths
  {
    id: 'cc-15',
    zoneId: 'couple-chemistry',
    category: 'Romantic Truths',
    text: 'What is a small, everyday gesture your partner does that instantly makes your day better?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['gratitude', 'romance']
  },
  {
    id: 'cc-16',
    zoneId: 'couple-chemistry',
    category: 'Romantic Truths',
    text: 'When was a moment you looked at your partner and thought: "I am so lucky this person chose me"?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['appreciation', 'heartwarming']
  },
  {
    id: 'cc-17',
    zoneId: 'couple-chemistry',
    category: 'Romantic Truths',
    text: 'What was your honest thought the very first time you two made eye contact?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['first-look', 'memories']
  },
  {
    id: 'cc-18',
    zoneId: 'couple-chemistry',
    category: 'Romantic Truths',
    text: 'What is something your partner taught you about yourself that you hadn’t realized before?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['growth', 'learning']
  },
  {
    id: 'cc-19',
    zoneId: 'couple-chemistry',
    category: 'Romantic Truths',
    text: 'What is the most thoughtful or romantic surprise your partner has ever pulled off for you?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['surprises', 'love']
  },
  {
    id: 'cc-20',
    zoneId: 'couple-chemistry',
    category: 'Romantic Truths',
    text: 'What is your favorite inside joke or nickname that only the two of you share?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['inside-joke', 'affection']
  },

  // Sweet Dares
  {
    id: 'cc-21',
    zoneId: 'couple-chemistry',
    category: 'Sweet Dares',
    text: 'Look your partner in the eyes, take both of their hands, and tell them 3 things you love about them right now.',
    difficulty: 'mild',
    duration: 25,
    scoring: { points: 20, type: 'standard' },
    tags: ['compliments', 'affection']
  },
  {
    id: 'cc-22',
    zoneId: 'couple-chemistry',
    category: 'Sweet Dares',
    text: 'Do a gentle, slow-motion ballroom slow dance with your partner for 20 seconds to imaginary music.',
    difficulty: 'mild',
    duration: 20,
    scoring: { points: 20, type: 'standard' },
    tags: ['dance', 'closeness']
  },
  {
    id: 'cc-23',
    zoneId: 'couple-chemistry',
    category: 'Sweet Dares',
    text: 'Reenact your first date conversation in 30 seconds of affectionate, hilarious drama.',
    difficulty: 'spicy',
    duration: 30,
    scoring: { points: 25, type: 'standard' },
    tags: ['reenactment', 'fun']
  },
  {
    id: 'cc-24',
    zoneId: 'couple-chemistry',
    category: 'Sweet Dares',
    text: 'Give your partner a relaxing 30-second shoulder massage or back tap with pure gentle care.',
    difficulty: 'mild',
    duration: 30,
    scoring: { points: 20, type: 'standard' },
    tags: ['massage', 'comfort']
  },
  {
    id: 'cc-25',
    zoneId: 'couple-chemistry',
    category: 'Sweet Dares',
    text: 'Compose and whisper a four-line rhyming poem about your partner’s smile into their ear.',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['poetry', 'whisper']
  },
  {
    id: 'cc-26',
    zoneId: 'couple-chemistry',
    category: 'Sweet Dares',
    text: 'Give your partner a dramatic movie-style hand kiss and bow like 19th-century royalty.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['kiss', 'royalty']
  },

  // Memory Challenges
  {
    id: 'cc-27',
    zoneId: 'couple-chemistry',
    category: 'Memory Challenges',
    text: 'Both count to 3 and say simultaneously what song played during your first memorable road trip together!',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['sync', 'music']
  },
  {
    id: 'cc-28',
    zoneId: 'couple-chemistry',
    category: 'Memory Challenges',
    text: 'Recall the exact restaurant, cafe, or venue of your first date. What did you order to drink?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['first-date', 'memory']
  },
  {
    id: 'cc-29',
    zoneId: 'couple-chemistry',
    category: 'Memory Challenges',
    text: 'What was the first movie you two watched together, and who fell asleep first?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['movie', 'sleep']
  },
  {
    id: 'cc-30',
    zoneId: 'couple-chemistry',
    category: 'Memory Challenges',
    text: 'What was the funniest disaster or mishap that happened on a date or vacation that made you laugh together?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['mishap', 'laughter']
  },
  {
    id: 'cc-31',
    zoneId: 'couple-chemistry',
    category: 'Memory Challenges',
    text: 'What was the very first gift you gave each other? Does it still exist today?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['gifts', 'nostalgia']
  },

  // Choose Between Two Options (This or That)
  {
    id: 'cc-32',
    zoneId: 'couple-chemistry',
    category: 'Choose Between Two Options',
    text: 'Both point on 3: Candlelit fine dining tasting menu OR midnight street food truck crawl?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['food', 'preferences']
  },
  {
    id: 'cc-33',
    zoneId: 'couple-chemistry',
    category: 'Choose Between Two Options',
    text: 'Both point on 3: Tropical beach bungalow with ocean breeze OR snowy mountain cabin with fireplace?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['vacation', 'cozy']
  },
  {
    id: 'cc-34',
    zoneId: 'couple-chemistry',
    category: 'Choose Between Two Options',
    text: 'Both point on 3: Spontaneous weekend getaway with zero plans OR meticulously organized dream itinerary?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['trips', 'planning']
  },
  {
    id: 'cc-35',
    zoneId: 'couple-chemistry',
    category: 'Choose Between Two Options',
    text: 'Both point on 3: Endless morning coffee in bed OR vibrant late-night dessert and stargazing walks?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['lifestyle', 'romance']
  },
  {
    id: 'cc-36',
    zoneId: 'couple-chemistry',
    category: 'Choose Between Two Options',
    text: 'Both point on 3: Who takes longer to get ready before leaving the house?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['habits', 'ready']
  },

  // Additional Couple Prompts
  {
    id: 'cc-37',
    zoneId: 'couple-chemistry',
    category: 'Romantic Truths',
    text: 'What is a dream or ambition your partner has that you are 100% committed to helping them achieve?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['dreams', 'support']
  },
  {
    id: 'cc-38',
    zoneId: 'couple-chemistry',
    category: 'How Well Do You Know Each Other?',
    text: 'What is your partner’s exact comfort movie that they put on when they need to unwind?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['movie', 'comfort']
  },
  {
    id: 'cc-39',
    zoneId: 'couple-chemistry',
    category: 'Sweet Dares',
    text: 'Hold a 10-second hug with your partner and take 3 deep synchronised breaths together.',
    difficulty: 'mild',
    duration: 10,
    scoring: { points: 15, type: 'standard' },
    tags: ['hug', 'calm']
  },
  {
    id: 'cc-40',
    zoneId: 'couple-chemistry',
    category: 'Compatibility Questions',
    text: 'How do you both prefer to decompress after an overwhelming social event?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['introvert', 'energy']
  },
  {
    id: 'cc-41',
    zoneId: 'couple-chemistry',
    category: 'Memory Challenges',
    text: 'What was the first compliment your partner ever gave you that made you blush?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['compliment', 'blush']
  },
  {
    id: 'cc-42',
    zoneId: 'couple-chemistry',
    category: 'Choose Between Two Options',
    text: 'Both point on 3: Who is the better driver on long night road trips?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['driving', 'debate']
  },
  {
    id: 'cc-43',
    zoneId: 'couple-chemistry',
    category: 'Romantic Truths',
    text: 'What is something your partner does that makes you feel deeply safe and anchored?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['safety', 'anchored']
  },
  {
    id: 'cc-44',
    zoneId: 'couple-chemistry',
    category: 'Sweet Dares',
    text: 'Describe what your dream house with your partner looks like in 25 vivid seconds.',
    difficulty: 'mild',
    duration: 25,
    scoring: { points: 15, type: 'standard' },
    tags: ['dream-home', 'future']
  },
  {
    id: 'cc-45',
    zoneId: 'couple-chemistry',
    category: 'How Well Do You Know Each Other?',
    text: 'What is your partner’s greatest fear, and how do you help comfort them?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['fear', 'support']
  },
  {
    id: 'cc-46',
    zoneId: 'couple-chemistry',
    category: 'Compatibility Questions',
    text: 'What is the secret recipe for keeping the excitement and sparks alive in a long-term bond?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['sparks', 'wisdom']
  },
  {
    id: 'cc-47',
    zoneId: 'couple-chemistry',
    category: 'Choose Between Two Options',
    text: 'Both point on 3: Adopting 3 golden retriever puppies OR 3 affectionate British shorthair cats?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['pets', 'debate']
  },
  {
    id: 'cc-48',
    zoneId: 'couple-chemistry',
    category: 'Sweet Dares',
    text: 'Give your partner a sincere 15-second appreciation speech as if celebrating your 50th anniversary.',
    difficulty: 'mild',
    duration: 15,
    scoring: { points: 20, type: 'standard' },
    tags: ['anniversary', 'sweet']
  },
  {
    id: 'cc-49',
    zoneId: 'couple-chemistry',
    category: 'Romantic Truths',
    text: 'What is the proudest moment you have felt standing by your partner’s side?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['pride', 'partnership']
  },
  {
    id: 'cc-50',
    zoneId: 'couple-chemistry',
    category: 'Memory Challenges',
    text: 'What was your partner’s exact hairstyle or outfit on the day you officially became a couple?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['anniversary', 'memory']
  },
  {
    id: 'cc-51',
    zoneId: 'couple-chemistry',
    category: 'Choose Between Two Options',
    text: 'Both point on 3: Who is more likely to wake up in the middle of the night for snacks?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'vote' },
    tags: ['snacks', 'midnight']
  },
  {
    id: 'cc-52',
    zoneId: 'couple-chemistry',
    category: 'Sweet Dares',
    text: 'Create a quick 5-step secret couple handshake that ends with a wink or pinky promise.',
    difficulty: 'mild',
    duration: 30,
    scoring: { points: 20, type: 'standard' },
    tags: ['handshake', 'pinky-promise']
  }
]
