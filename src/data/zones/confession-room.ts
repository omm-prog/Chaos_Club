import { Prompt } from '../../types/game'

export const confessionRoomPrompts: Prompt[] = [
  // Honest Truths
  {
    id: 'cr-01',
    zoneId: 'confession-room',
    category: 'Honest Truths',
    text: 'What is something you are deeply proud of achieving that you rarely talk about to avoid bragging?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['pride', 'achievement']
  },
  {
    id: 'cr-02',
    zoneId: 'confession-room',
    category: 'Honest Truths',
    text: 'What is an unspoken insecurity you have worked hard to accept about yourself?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['insecurity', 'growth']
  },
  {
    id: 'cr-03',
    zoneId: 'confession-room',
    category: 'Honest Truths',
    text: 'When was the last time you felt truly lonely, even while being surrounded by other people?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['loneliness', 'vulnerability']
  },
  {
    id: 'cr-04',
    zoneId: 'confession-room',
    category: 'Honest Truths',
    text: 'What is a popular trend, lifestyle, or milestone that you secretly have zero interest in achieving?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['society', 'authenticity']
  },
  {
    id: 'cr-05',
    zoneId: 'confession-room',
    category: 'Honest Truths',
    text: 'Have you ever walked away from a friendship because it silently became exhausting? What was the turning point?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['boundaries', 'friendships']
  },
  {
    id: 'cr-06',
    zoneId: 'confession-room',
    category: 'Honest Truths',
    text: 'What is a piece of harsh advice someone gave you that ended up being completely true?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['advice', 'truth']
  },
  {
    id: 'cr-07',
    zoneId: 'confession-room',
    category: 'Honest Truths',
    text: 'What is a belief or opinion you held strongly 5 years ago that you now disagree with completely?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['evolution', 'perspective']
  },
  {
    id: 'cr-08',
    zoneId: 'confession-room',
    category: 'Honest Truths',
    text: 'What is something you pretend to understand in social conversations just to keep the flow moving?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['social', 'facade']
  },

  // Unexpected Questions
  {
    id: 'cr-09',
    zoneId: 'confession-room',
    category: 'Unexpected Questions',
    text: 'If you received a letter from your 80-year-old self right now, what warning do you think it would contain?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['future', 'reflection']
  },
  {
    id: 'cr-10',
    zoneId: 'confession-room',
    category: 'Unexpected Questions',
    text: 'If you could know the exact truth to any one unsolved mystery in your personal life, what would you ask?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['mysteries', 'curiosity']
  },
  {
    id: 'cr-11',
    zoneId: 'confession-room',
    category: 'Unexpected Questions',
    text: 'What is a sound, smell, or weather pattern that instantly teleports you back to a specific year in your life?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['senses', 'nostalgia']
  },
  {
    id: 'cr-12',
    zoneId: 'confession-room',
    category: 'Unexpected Questions',
    text: 'What is an unwritten personal rule that you never break, no matter what?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['principles', 'morals']
  },
  {
    id: 'cr-13',
    zoneId: 'confession-room',
    category: 'Unexpected Questions',
    text: 'If you could erase one awkward memory from everyone else’s minds forever, which one goes?',
    difficulty: 'spicy',
    scoring: { points: 15, type: 'standard' },
    tags: ['cringe', 'memory']
  },
  {
    id: 'cr-14',
    zoneId: 'confession-room',
    category: 'Unexpected Questions',
    text: 'What is something you consider a high compliment that other people might find mundane?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['compliments', 'values']
  },

  // Memory Sharing
  {
    id: 'cr-15',
    zoneId: 'confession-room',
    category: 'Memory Sharing',
    text: 'Describe a moment in your life where you felt completely in your element, like pure joy was effortless.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['joy', 'flow']
  },
  {
    id: 'cr-16',
    zoneId: 'confession-room',
    category: 'Memory Sharing',
    text: 'What was a turning point moment where a stranger did an unexpected act of kindness for you?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['strangers', 'kindness']
  },
  {
    id: 'cr-17',
    zoneId: 'confession-room',
    category: 'Memory Sharing',
    text: 'What is your favorite memory with someone currently in this room?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['bonding', 'besties']
  },
  {
    id: 'cr-18',
    zoneId: 'confession-room',
    category: 'Memory Sharing',
    text: 'What was your most memorable late-night car drive or walk, and who were you with?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['night-drive', 'peace']
  },
  {
    id: 'cr-19',
    zoneId: 'confession-room',
    category: 'Memory Sharing',
    text: 'Tell the story of a time you failed miserably at something, but can now laugh about it with affection.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['failure', 'humor']
  },
  {
    id: 'cr-20',
    zoneId: 'confession-room',
    category: 'Memory Sharing',
    text: 'What was the best meal or feast you have ever eaten, and what made the circumstance so special?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['food', 'memories']
  },

  // Friendship Questions
  {
    id: 'cr-21',
    zoneId: 'confession-room',
    category: 'Friendship Questions',
    text: 'What makes you feel most valued in a friendship: words, quality time, thoughtful gifts, or shared silence?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['love-languages', 'friends']
  },
  {
    id: 'cr-22',
    zoneId: 'confession-room',
    category: 'Friendship Questions',
    text: 'If someone in this room had an emergency at 3:00 AM, who would you call first and why?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['reliability', 'trust']
  },
  {
    id: 'cr-23',
    zoneId: 'confession-room',
    category: 'Friendship Questions',
    text: 'What is a quality in a friend that makes you immediately want to invest in knowing them deeper?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['qualities', 'character']
  },
  {
    id: 'cr-24',
    zoneId: 'confession-room',
    category: 'Friendship Questions',
    text: 'What is a small habit of yours that your closest friends have learned to patiently navigate?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['quirks', 'grace']
  },
  {
    id: 'cr-25',
    zoneId: 'confession-room',
    category: 'Friendship Questions',
    text: 'Say one thing you deeply appreciate about the person sitting immediately to your right.',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['gratitude', 'kindness']
  },

  // Personal Growth
  {
    id: 'cr-26',
    zoneId: 'confession-room',
    category: 'Personal Growth',
    text: 'What boundary did you set in the past year that was terrifying at first but protected your peace?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['boundaries', 'peace']
  },
  {
    id: 'cr-27',
    zoneId: 'confession-room',
    category: 'Personal Growth',
    text: 'What is something you used to define your self-worth by that you have actively unlearned?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['self-worth', 'healing']
  },
  {
    id: 'cr-28',
    zoneId: 'confession-room',
    category: 'Personal Growth',
    text: 'In what ways are you significantly softer, kinder, or more patient than you were five years ago?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['softness', 'maturation']
  },
  {
    id: 'cr-29',
    zoneId: 'confession-room',
    category: 'Personal Growth',
    text: 'What is a fear you have either conquered or learned to peacefully coexist with?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['courage', 'fear']
  },
  {
    id: 'cr-30',
    zoneId: 'confession-room',
    category: 'Personal Growth',
    text: 'What is a hobby or creative outlet you gave up that you wish you could reignite?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['creativity', 'passions']
  },

  // Relationship Conversations
  {
    id: 'cr-31',
    zoneId: 'confession-room',
    category: 'Relationship Conversations',
    text: 'What is the biggest difference between what you thought love was as a teenager vs. what you know today?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['love', 'maturity']
  },
  {
    id: 'cr-32',
    zoneId: 'confession-room',
    category: 'Relationship Conversations',
    text: 'How do you handle conflict: do you lean in immediately to resolve, or do you need cool-off space first?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['conflict', 'communication']
  },
  {
    id: 'cr-33',
    zoneId: 'confession-room',
    category: 'Relationship Conversations',
    text: 'What is a green flag in someone’s relationship with their family or friends that impresses you?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['green-flags', 'relationships']
  },
  {
    id: 'cr-34',
    zoneId: 'confession-room',
    category: 'Relationship Conversations',
    text: 'Have you ever forgiven someone who never formally apologized? How did that change you?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['forgiveness', 'letting-go']
  },
  {
    id: 'cr-35',
    zoneId: 'confession-room',
    category: 'Relationship Conversations',
    text: 'What makes you feel heard when having a difficult or vulnerable conversation?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['listening', 'empathy']
  },

  // Additional Confessions & Thoughtful Questions
  {
    id: 'cr-36',
    zoneId: 'confession-room',
    category: 'Honest Truths',
    text: 'What is something you frequently criticize in others that you secretly catch yourself doing as well?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['projection', 'honesty']
  },
  {
    id: 'cr-37',
    zoneId: 'confession-room',
    category: 'Unexpected Questions',
    text: 'If you had one extra hour every night that no one else had, what would you do in that silent window?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['solitude', 'wishes']
  },
  {
    id: 'cr-38',
    zoneId: 'confession-room',
    category: 'Memory Sharing',
    text: 'What was a moment you took a massive gamble on yourself, and how did it turn out?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['risk', 'courage']
  },
  {
    id: 'cr-39',
    zoneId: 'confession-room',
    category: 'Friendship Questions',
    text: 'How can the people in this room support you better with whatever challenge you are facing right now?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['support', 'community']
  },
  {
    id: 'cr-40',
    zoneId: 'confession-room',
    category: 'Personal Growth',
    text: 'What is a compliment you received that completely caught you off guard and stuck with you?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['affirmation', 'memories']
  },
  {
    id: 'cr-41',
    zoneId: 'confession-room',
    category: 'Relationship Conversations',
    text: 'What is a dealbreaker in your inner circle that you would never compromise on again?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['boundaries', 'values']
  },
  {
    id: 'cr-42',
    zoneId: 'confession-room',
    category: 'Honest Truths',
    text: 'Do you feel like you are currently living the chapter of your life you always hoped for, or are you in transition?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['chapters', 'direction']
  },
  {
    id: 'cr-43',
    zoneId: 'confession-room',
    category: 'Unexpected Questions',
    text: 'If your life had a quiet narrator in the background, what tone of voice would they use right now?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['tone', 'introspection']
  },
  {
    id: 'cr-44',
    zoneId: 'confession-room',
    category: 'Memory Sharing',
    text: 'What is a song that instantly brings tears of either joy or nostalgia to your eyes when you hear it alone?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['music', 'emotion']
  },
  {
    id: 'cr-45',
    zoneId: 'confession-room',
    category: 'Friendship Questions',
    text: 'What is something you think this group takes for granted about how well we understand each other?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['group', 'appreciation']
  },
  {
    id: 'cr-46',
    zoneId: 'confession-room',
    category: 'Personal Growth',
    text: 'What is a piece of art, a book, or a movie that altered how you view human vulnerability?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['art', 'inspiration']
  },
  {
    id: 'cr-47',
    zoneId: 'confession-room',
    category: 'Relationship Conversations',
    text: 'What is the most touching expression of love someone has ever shown you without speaking words?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['love', 'unspoken']
  },
  {
    id: 'cr-48',
    zoneId: 'confession-room',
    category: 'Honest Truths',
    text: 'What is a question you wish someone would ask you more often?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['longing', 'depth']
  },
  {
    id: 'cr-49',
    zoneId: 'confession-room',
    category: 'Unexpected Questions',
    text: 'If you could have a 10-minute phone call with your younger self at age 14, what one thing would you emphasize?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['younger-self', 'compassion']
  },
  {
    id: 'cr-50',
    zoneId: 'confession-room',
    category: 'Memory Sharing',
    text: 'What is a place on this planet where you felt the deepest sense of peace and stillness?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['peace', 'places']
  },
  {
    id: 'cr-51',
    zoneId: 'confession-room',
    category: 'Personal Growth',
    text: 'What are you ready to forgive yourself for tonight?',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['self-forgiveness', 'release']
  },
  {
    id: 'cr-52',
    zoneId: 'confession-room',
    category: 'Friendship Questions',
    text: 'Look around the room: What is one hope you have for everyone here as we navigate this upcoming year?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['blessing', 'togetherness']
  }
]
