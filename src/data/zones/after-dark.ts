import { Prompt } from '../../types/game'

export const afterDarkPrompts: Prompt[] = [
  // Romantic Truth
  {
    id: 'ad-01',
    zoneId: 'after-dark',
    category: 'Romantic Truth',
    text: 'What was your honest first impression of someone sitting in this room?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['first-impressions', 'honesty']
  },
  {
    id: 'ad-02',
    zoneId: 'after-dark',
    category: 'Romantic Truth',
    text: 'What is the most attractive trait someone can have that has nothing to do with looks?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['personality', 'attraction']
  },
  {
    id: 'ad-03',
    zoneId: 'after-dark',
    category: 'Romantic Truth',
    text: 'Have you ever felt an unexpected romantic spark with someone you initially thought was just a friend?',
    difficulty: 'spicy',
    scoring: { points: 15, type: 'standard' },
    tags: ['crush', 'friends']
  },
  {
    id: 'ad-04',
    zoneId: 'after-dark',
    category: 'Romantic Truth',
    text: 'What is a small, quiet gesture that makes your heart melt immediately?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['romance', 'gestures']
  },
  {
    id: 'ad-05',
    zoneId: 'after-dark',
    category: 'Romantic Truth',
    text: 'What is your idea of an intoxicatingly memorable first date?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['dating', 'fantasy']
  },
  {
    id: 'ad-06',
    zoneId: 'after-dark',
    category: 'Romantic Truth',
    text: 'What is a romantic compliment you received years ago that you still think about today?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['memories', 'compliments']
  },
  {
    id: 'ad-07',
    zoneId: 'after-dark',
    category: 'Romantic Truth',
    text: 'What is the most spontaneous thing you have ever done for love or a crush?',
    difficulty: 'spicy',
    scoring: { points: 15, type: 'standard' },
    tags: ['spontaneous', 'love']
  },
  {
    id: 'ad-08',
    zoneId: 'after-dark',
    category: 'Romantic Truth',
    text: 'If you had to write a love note to someone in this room using only three words, what would they be?',
    difficulty: 'chaos',
    scoring: { points: 20, type: 'standard' },
    tags: ['bold', 'notes']
  },
  {
    id: 'ad-09',
    zoneId: 'after-dark',
    category: 'Romantic Truth',
    text: 'What is something you find secretly irresistible in a partner’s voice or laughter?',
    difficulty: 'spicy',
    scoring: { points: 15, type: 'standard' },
    tags: ['voice', 'sensory']
  },

  // Flirty Dare
  {
    id: 'ad-10',
    zoneId: 'after-dark',
    category: 'Flirty Dare',
    text: 'Give someone in the circle a sincere, unhurried compliment without turning it into a joke.',
    difficulty: 'mild',
    duration: 30,
    scoring: { points: 15, type: 'standard' },
    tags: ['compliments', 'wholesome']
  },
  {
    id: 'ad-11',
    zoneId: 'after-dark',
    category: 'Flirty Dare',
    text: 'Maintain unbroken eye contact with the player to your left for 15 full seconds without speaking.',
    difficulty: 'spicy',
    duration: 15,
    scoring: { points: 15, type: 'standard' },
    tags: ['eye-contact', 'tension']
  },
  {
    id: 'ad-12',
    zoneId: 'after-dark',
    category: 'Flirty Dare',
    text: 'Whisper your best smooth opening line into the ear of the person across from you.',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['whisper', 'flirt']
  },
  {
    id: 'ad-13',
    zoneId: 'after-dark',
    category: 'Flirty Dare',
    text: 'Demonstrate your signature seductive dance move in slow motion for 10 seconds.',
    difficulty: 'spicy',
    duration: 10,
    scoring: { points: 20, type: 'standard' },
    tags: ['dance', 'charm']
  },
  {
    id: 'ad-14',
    zoneId: 'after-dark',
    category: 'Flirty Dare',
    text: 'Describe your dream getaway cabin with someone in this room in cinematic detail.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['storytelling', 'getaway']
  },
  {
    id: 'ad-15',
    zoneId: 'after-dark',
    category: 'Flirty Dare',
    text: 'Read the last text you sent to your crush or significant other in your most dramatic movie trailer voice.',
    difficulty: 'chaos',
    scoring: { points: 25, type: 'standard' },
    tags: ['texts', 'drama']
  },
  {
    id: 'ad-16',
    zoneId: 'after-dark',
    category: 'Flirty Dare',
    text: 'Hold hands with another willing player and say three things you genuinely admire about their vibe.',
    difficulty: 'spicy',
    duration: 30,
    scoring: { points: 20, type: 'standard' },
    tags: ['connection', 'touch']
  },
  {
    id: 'ad-17',
    zoneId: 'after-dark',
    category: 'Flirty Dare',
    text: 'Improvise a 20-second serenade or poetic ode dedicated to someone’s eyes in the group.',
    difficulty: 'chaos',
    duration: 20,
    scoring: { points: 25, type: 'standard' },
    tags: ['poetry', 'bold']
  },

  // Deep Connection
  {
    id: 'ad-18',
    zoneId: 'after-dark',
    category: 'Deep Connection',
    text: 'What is something you wish people understood about you before judging your quiet moments?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['introspection', 'vulnerability']
  },
  {
    id: 'ad-19',
    zoneId: 'after-dark',
    category: 'Deep Connection',
    text: 'What makes you feel truly safe and cherished in someone’s presence?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['safety', 'warmth']
  },
  {
    id: 'ad-20',
    zoneId: 'after-dark',
    category: 'Deep Connection',
    text: 'When was the last time you felt a sudden wave of genuine gratitude for someone in your life?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['gratitude', 'reflection']
  },
  {
    id: 'ad-21',
    zoneId: 'after-dark',
    category: 'Deep Connection',
    text: 'What part of your personality do you only reveal to people you trust deeply?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['trust', 'inner-self']
  },
  {
    id: 'ad-22',
    zoneId: 'after-dark',
    category: 'Deep Connection',
    text: 'If we could pause time right now and sit by a moonlit rooftop, what song would you put on?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['music', 'atmosphere']
  },
  {
    id: 'ad-23',
    zoneId: 'after-dark',
    category: 'Deep Connection',
    text: 'What lesson about love or friendship did you have to learn the hard way?',
    difficulty: 'spicy',
    scoring: { points: 15, type: 'standard' },
    tags: ['wisdom', 'lessons']
  },
  {
    id: 'ad-24',
    zoneId: 'after-dark',
    category: 'Deep Connection',
    text: 'What is a secret dream you rarely share because you worry people will think it’s unrealistic?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['dreams', 'authenticity']
  },
  {
    id: 'ad-25',
    zoneId: 'after-dark',
    category: 'Deep Connection',
    text: 'What kind of silence with someone feels peaceful rather than awkward?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['peace', 'intimacy']
  },

  // Couple Challenges
  {
    id: 'ad-26',
    zoneId: 'after-dark',
    category: 'Couple Challenges',
    text: 'If you could relive one single evening from your romantic history, which one would it be?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['nostalgia', 'moments']
  },
  {
    id: 'ad-27',
    zoneId: 'after-dark',
    category: 'Couple Challenges',
    text: 'Describe the exact moment you realized you had feelings for your current or most recent flame.',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['sparks', 'realization']
  },
  {
    id: 'ad-28',
    zoneId: 'after-dark',
    category: 'Couple Challenges',
    text: 'Predict which player here would be the most hopelessly romantic spouse in 10 years.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['predictions', 'romance']
  },
  {
    id: 'ad-29',
    zoneId: 'after-dark',
    category: 'Couple Challenges',
    text: 'What is one silly habit your partner (or ex) has that you secretly found adorable?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['quirks', 'sweet']
  },
  {
    id: 'ad-30',
    zoneId: 'after-dark',
    category: 'Couple Challenges',
    text: 'Invent a secret handshake that ends with an elegant ballroom bow with a partner of your choice.',
    difficulty: 'spicy',
    duration: 30,
    scoring: { points: 20, type: 'standard' },
    tags: ['playful', 'duo']
  },
  {
    id: 'ad-31',
    zoneId: 'after-dark',
    category: 'Couple Challenges',
    text: 'Describe what your ideal rainy Sunday morning in bed looks like from wake-up to noon.',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['morning', 'comfort']
  },
  {
    id: 'ad-32',
    zoneId: 'after-dark',
    category: 'Couple Challenges',
    text: 'Give your partner (or best friend here) a fictional cute superhero title and describe their superpower.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['fun', 'bonding']
  },

  // Chemistry Tests
  {
    id: 'ad-33',
    zoneId: 'after-dark',
    category: 'Chemistry Tests',
    text: 'Look into the eyes of any player you choose and guess what emotion they are trying to project.',
    difficulty: 'spicy',
    duration: 20,
    scoring: { points: 20, type: 'standard' },
    tags: ['intuition', 'chemistry']
  },
  {
    id: 'ad-34',
    zoneId: 'after-dark',
    category: 'Chemistry Tests',
    text: 'Who in the room has an aura or charisma that instantly lights up any venue?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['charisma', 'aura']
  },
  {
    id: 'ad-35',
    zoneId: 'after-dark',
    category: 'Chemistry Tests',
    text: 'Without naming them immediately, describe the personality traits of someone here who intrigues you.',
    difficulty: 'chaos',
    scoring: { points: 25, type: 'standard' },
    tags: ['mystery', 'intrigue']
  },
  {
    id: 'ad-36',
    zoneId: 'after-dark',
    category: 'Chemistry Tests',
    text: 'Do you believe in instant magnetic chemistry, or does true allure always brew over time?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['philosophy', 'spark']
  },
  {
    id: 'ad-37',
    zoneId: 'after-dark',
    category: 'Chemistry Tests',
    text: 'Pick someone to do a synchronous slow-clap rhythm with for 10 seconds without breaking synchronization.',
    difficulty: 'mild',
    duration: 10,
    scoring: { points: 15, type: 'standard' },
    tags: ['rhythm', 'teamwork']
  },
  {
    id: 'ad-38',
    zoneId: 'after-dark',
    category: 'Chemistry Tests',
    text: 'What is a fragrance, scent, or candle aroma that instantly puts you in an enchanted mood?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['scents', 'mood']
  },
  {
    id: 'ad-39',
    zoneId: 'after-dark',
    category: 'Chemistry Tests',
    text: 'Rate your own romantic flirting skill on a scale of 1 to 10, and let the group collectively vote if they agree.',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'vote' },
    tags: ['rating', 'self-awareness']
  },

  // Secret Confessions
  {
    id: 'ad-40',
    zoneId: 'after-dark',
    category: 'Secret Confessions',
    text: 'What is an unconventional romantic trope or cheesy romantic cliché that you secretly love?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['guilty-pleasure', 'cliches']
  },
  {
    id: 'ad-41',
    zoneId: 'after-dark',
    category: 'Secret Confessions',
    text: 'Have you ever rehearsed a conversation or flirtatious line in the mirror before seeing someone?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['confession', 'relatable']
  },
  {
    id: 'ad-42',
    zoneId: 'after-dark',
    category: 'Secret Confessions',
    text: 'What is the most embarrassing song on your late-night mood playlist?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['music', 'embarrassing']
  },
  {
    id: 'ad-43',
    zoneId: 'after-dark',
    category: 'Secret Confessions',
    text: 'Have you ever secretly checked someone’s zodiac sign or compatibility before a second date?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['horoscopes', 'habits']
  },
  {
    id: 'ad-44',
    zoneId: 'after-dark',
    category: 'Secret Confessions',
    text: 'What is a message you drafted in your notes app that you will probably never send?',
    difficulty: 'chaos',
    scoring: { points: 25, type: 'standard' },
    tags: ['unsent', 'vulnerable']
  },
  {
    id: 'ad-45',
    zoneId: 'after-dark',
    category: 'Secret Confessions',
    text: 'Have you ever pretended to like a movie, book, or band just to impress a date?',
    difficulty: 'spicy',
    scoring: { points: 15, type: 'standard' },
    tags: ['lies', 'dating']
  },
  {
    id: 'ad-46',
    zoneId: 'after-dark',
    category: 'Secret Confessions',
    text: 'What was your most dramatic breakup or almost-relationship moment that felt straight out of an indie film?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['cinema', 'heartbreak']
  },
  {
    id: 'ad-47',
    zoneId: 'after-dark',
    category: 'Secret Confessions',
    text: 'What is the nicest thing you did for an ex that they probably never even realized you did?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['kindness', 'unnoticed']
  },
  {
    id: 'ad-48',
    zoneId: 'after-dark',
    category: 'Romantic Truth',
    text: 'Do you believe people can have multiple soulmates in one lifetime, or just one true match?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['philosophy', 'soulmates']
  },
  {
    id: 'ad-49',
    zoneId: 'after-dark',
    category: 'Flirty Dare',
    text: 'Pick a player and give them a 10-second preview of how you would ask them to a secret speakeasy.',
    difficulty: 'spicy',
    duration: 15,
    scoring: { points: 20, type: 'standard' },
    tags: ['speakeasy', 'roleplay']
  },
  {
    id: 'ad-50',
    zoneId: 'after-dark',
    category: 'Deep Connection',
    text: 'If you had to be stranded on an island with just one person here, who has the emotional maturity to keep you sane?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['maturity', 'island']
  },
  {
    id: 'ad-51',
    zoneId: 'after-dark',
    category: 'Chemistry Tests',
    text: 'Close your eyes. When you open them, whoever you make eye contact with first must high-five you with style.',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['eye-contact', 'fun']
  },
  {
    id: 'ad-52',
    zoneId: 'after-dark',
    category: 'Secret Confessions',
    text: 'What romantic compliment would you secretly love someone to say to you tonight?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['desires', 'words-of-affirmation']
  }
]
