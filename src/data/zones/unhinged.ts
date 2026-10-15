import { Prompt } from '../../types/game'

export const unhingedPrompts: Prompt[] = [
  // Absurd Truths
  {
    id: 'uh-01',
    zoneId: 'unhinged',
    category: 'Absurd Truths',
    text: 'If you were an inanimate kitchen appliance, which one would you be and what is your tragic backstory?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['humor', 'appliances']
  },
  {
    id: 'uh-02',
    zoneId: 'unhinged',
    category: 'Absurd Truths',
    text: 'What is the absolute strangest food combination you secretly eat when nobody is watching?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['food', 'confession']
  },
  {
    id: 'uh-03',
    zoneId: 'unhinged',
    category: 'Absurd Truths',
    text: 'If pigeons suddenly gained the ability to speak English, what would be their main complaint about you?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['pigeons', 'animals']
  },
  {
    id: 'uh-04',
    zoneId: 'unhinged',
    category: 'Absurd Truths',
    text: 'What is the most ridiculous lie you told as a child that your parents actually believed for years?',
    difficulty: 'mild',
    scoring: { points: 15, type: 'standard' },
    tags: ['childhood', 'lies']
  },
  {
    id: 'uh-05',
    zoneId: 'unhinged',
    category: 'Absurd Truths',
    text: 'If your search history from 2012 was projected on a billboard, how fast would you move to another continent?',
    difficulty: 'spicy',
    scoring: { points: 15, type: 'standard' },
    tags: ['internet', 'past']
  },
  {
    id: 'uh-06',
    zoneId: 'unhinged',
    category: 'Absurd Truths',
    text: 'What completely irrational conspiracy theory can you make sound 90% convincing right now?',
    difficulty: 'chaos',
    scoring: { points: 20, type: 'standard' },
    tags: ['conspiracy', 'improv']
  },
  {
    id: 'uh-07',
    zoneId: 'unhinged',
    category: 'Absurd Truths',
    text: 'If aliens invaded tomorrow and demanded one tribute dance from humanity to spare Earth, who here sends them into battle?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['aliens', 'dance']
  },
  {
    id: 'uh-08',
    zoneId: 'unhinged',
    category: 'Absurd Truths',
    text: 'What is the weirdest physical object currently within 5 feet of you, and what is its name and lore?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['objects', 'lore']
  },

  // Ridiculous Dares
  {
    id: 'uh-09',
    zoneId: 'unhinged',
    category: 'Ridiculous Dares',
    text: 'Explain why you are a sentient potato applying for a senior corporate executive job for 20 seconds.',
    difficulty: 'spicy',
    duration: 20,
    scoring: { points: 20, type: 'standard' },
    tags: ['potato', 'acting']
  },
  {
    id: 'uh-10',
    zoneId: 'unhinged',
    category: 'Ridiculous Dares',
    text: 'Deliver a high-stakes, passionate motivational pep talk to an imaginary spoon or water bottle.',
    difficulty: 'mild',
    duration: 20,
    scoring: { points: 15, type: 'standard' },
    tags: ['motivational', 'humor']
  },
  {
    id: 'uh-11',
    zoneId: 'unhinged',
    category: 'Ridiculous Dares',
    text: 'Speak entirely in rhymes for your next 3 turns or face instant group judgment.',
    difficulty: 'chaos',
    scoring: { points: 25, type: 'standard' },
    tags: ['rhyme', 'verbal']
  },
  {
    id: 'uh-12',
    zoneId: 'unhinged',
    category: 'Ridiculous Dares',
    text: 'Do your best slow-motion matrix dodge backwards and freeze in that awkward pose for 7 seconds.',
    difficulty: 'mild',
    duration: 7,
    scoring: { points: 15, type: 'standard' },
    tags: ['matrix', 'physical']
  },
  {
    id: 'uh-13',
    zoneId: 'unhinged',
    category: 'Ridiculous Dares',
    text: 'Call an inanimate object in the room your mortal enemy and demand a formal apology from it.',
    difficulty: 'spicy',
    duration: 15,
    scoring: { points: 20, type: 'standard' },
    tags: ['drama', 'enemy']
  },
  {
    id: 'uh-14',
    zoneId: 'unhinged',
    category: 'Ridiculous Dares',
    text: 'Attempt to juggle three soft items nearby (pillows, socks, fruit) for at least 6 seconds.',
    difficulty: 'spicy',
    duration: 10,
    scoring: { points: 20, type: 'standard' },
    tags: ['juggle', 'chaos']
  },
  {
    id: 'uh-15',
    zoneId: 'unhinged',
    category: 'Ridiculous Dares',
    text: 'Pretend to be an auctioneer selling the shoes of the person sitting across from you.',
    difficulty: 'spicy',
    duration: 15,
    scoring: { points: 20, type: 'standard' },
    tags: ['auction', 'fast-talk']
  },
  {
    id: 'uh-16',
    zoneId: 'unhinged',
    category: 'Ridiculous Dares',
    text: 'Perform an interpretive dance that conveys the sheer existential dread of Monday morning alarm clocks.',
    difficulty: 'chaos',
    duration: 15,
    scoring: { points: 25, type: 'standard' },
    tags: ['dance', 'existential']
  },

  // Weird Acting Challenges
  {
    id: 'uh-17',
    zoneId: 'unhinged',
    category: 'Weird Acting Challenges',
    text: 'Act like a dramatic Shakespearean hero discovering that your phone is at 1% battery.',
    difficulty: 'spicy',
    duration: 20,
    scoring: { points: 20, type: 'standard' },
    tags: ['shakespeare', 'theatre']
  },
  {
    id: 'uh-18',
    zoneId: 'unhinged',
    category: 'Weird Acting Challenges',
    text: 'Play a glamorous soap opera villain who just realized their evil twin bought the same jacket as them.',
    difficulty: 'spicy',
    duration: 20,
    scoring: { points: 20, type: 'standard' },
    tags: ['villain', 'soap-opera']
  },
  {
    id: 'uh-19',
    zoneId: 'unhinged',
    category: 'Weird Acting Challenges',
    text: 'Act like a medieval peasant experiencing the magic of microwave popcorn for the first time.',
    difficulty: 'mild',
    duration: 20,
    scoring: { points: 15, type: 'standard' },
    tags: ['medieval', 'acting']
  },
  {
    id: 'uh-20',
    zoneId: 'unhinged',
    category: 'Weird Acting Challenges',
    text: 'Pretend you are a robot that is malfunctioning and slowly developing passionate feelings for WiFi routers.',
    difficulty: 'chaos',
    duration: 20,
    scoring: { points: 25, type: 'standard' },
    tags: ['robot', 'scifi']
  },
  {
    id: 'uh-21',
    zoneId: 'unhinged',
    category: 'Weird Acting Challenges',
    text: 'Act like an aggressive reality TV chef evaluating a completely imaginary plate of invisible nachos.',
    difficulty: 'spicy',
    duration: 20,
    scoring: { points: 20, type: 'standard' },
    tags: ['chef', 'gordon-ramsay']
  },
  {
    id: 'uh-22',
    zoneId: 'unhinged',
    category: 'Weird Acting Challenges',
    text: 'Reenact the climax of Titanic, but you are playing both Jack AND the giant floating wooden door.',
    difficulty: 'chaos',
    duration: 25,
    scoring: { points: 25, type: 'standard' },
    tags: ['titanic', 'solo-duo']
  },
  {
    id: 'uh-23',
    zoneId: 'unhinged',
    category: 'Weird Acting Challenges',
    text: 'Pretend you are an espionage spy attempting to stealthily steal a chip without alerting the guard dog.',
    difficulty: 'mild',
    duration: 15,
    scoring: { points: 15, type: 'standard' },
    tags: ['spy', 'stealth']
  },

  // Impersonations
  {
    id: 'uh-24',
    zoneId: 'unhinged',
    category: 'Impersonations',
    text: 'Impersonate a dramatic wildlife documentary narrator describing the bizarre habits of humans at a party.',
    difficulty: 'mild',
    duration: 20,
    scoring: { points: 15, type: 'standard' },
    tags: ['david-attenborough', 'nature']
  },
  {
    id: 'uh-25',
    zoneId: 'unhinged',
    category: 'Impersonations',
    text: 'Impersonate a flight attendant giving emergency safety instructions on a budget airline to Mars.',
    difficulty: 'spicy',
    duration: 20,
    scoring: { points: 20, type: 'standard' },
    tags: ['flight-attendant', 'space']
  },
  {
    id: 'uh-26',
    zoneId: 'unhinged',
    category: 'Impersonations',
    text: 'Pick one player in the room and lovingly imitate their signature laugh or sitting posture.',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['imitation', 'friends']
  },
  {
    id: 'uh-27',
    zoneId: 'unhinged',
    category: 'Impersonations',
    text: 'Speak like a chaotic 1920s cartoon villain tying someone to train tracks for 15 seconds.',
    difficulty: 'mild',
    duration: 15,
    scoring: { points: 15, type: 'standard' },
    tags: ['cartoon', 'retro']
  },
  {
    id: 'uh-28',
    zoneId: 'unhinged',
    category: 'Impersonations',
    text: 'Impersonate an enthusiastic tech CEO launching a revolutionary new product: "Smart Socks".',
    difficulty: 'spicy',
    duration: 20,
    scoring: { points: 20, type: 'standard' },
    tags: ['tech-bro', 'keynote']
  },
  {
    id: 'uh-29',
    zoneId: 'unhinged',
    category: 'Impersonations',
    text: 'Impersonate a dramatic GPS navigator having an emotional existential breakdown over a missed turn.',
    difficulty: 'spicy',
    duration: 20,
    scoring: { points: 20, type: 'standard' },
    tags: ['gps', 'satnav']
  },
  {
    id: 'uh-30',
    zoneId: 'unhinged',
    category: 'Impersonations',
    text: 'Imitate an overly intense anime protagonist powering up their ultimate magical attack.',
    difficulty: 'chaos',
    duration: 15,
    scoring: { points: 25, type: 'standard' },
    tags: ['anime', 'shonen']
  },

  // Tongue Twisters
  {
    id: 'uh-31',
    zoneId: 'unhinged',
    category: 'Tongue Twisters',
    text: 'Repeat three times at top speed: "Six chaotic sock-wearing ducks swimming slickly down streams."',
    difficulty: 'mild',
    duration: 10,
    scoring: { points: 15, type: 'standard' },
    tags: ['twister', 'speed']
  },
  {
    id: 'uh-32',
    zoneId: 'unhinged',
    category: 'Tongue Twisters',
    text: 'Say clearly without stumbling: "Proper copper coffee pot poured purple popcorn promptly" 3 times.',
    difficulty: 'spicy',
    duration: 10,
    scoring: { points: 20, type: 'standard' },
    tags: ['twister', 'articulation']
  },
  {
    id: 'uh-33',
    zoneId: 'unhinged',
    category: 'Tongue Twisters',
    text: 'Say 4 times fast: "Red lorry, yellow lorry, chaotic party, jolly trolley!"',
    difficulty: 'mild',
    duration: 10,
    scoring: { points: 15, type: 'standard' },
    tags: ['twister', 'speed']
  },
  {
    id: 'uh-34',
    zoneId: 'unhinged',
    category: 'Tongue Twisters',
    text: 'Spit out in 8 seconds: "Toy boat, toy boy, royal oil, noisy toy oysters!"',
    difficulty: 'spicy',
    duration: 8,
    scoring: { points: 20, type: 'standard' },
    tags: ['twister', 'precision']
  },
  {
    id: 'uh-35',
    zoneId: 'unhinged',
    category: 'Tongue Twisters',
    text: 'Master level: "Pad kid poured curd pulled cod." Repeat 5 times without laughing or failing!',
    difficulty: 'chaos',
    duration: 10,
    scoring: { points: 25, type: 'standard' },
    tags: ['twister', 'extreme']
  },

  // Random Funny Punishments & Mini Challenges
  {
    id: 'uh-36',
    zoneId: 'unhinged',
    category: 'Random Funny Punishments',
    text: 'Balance an empty cup or coaster on your head for the next 2 full rounds. If it falls, apologize to it.',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['balance', 'endurance']
  },
  {
    id: 'uh-37',
    zoneId: 'unhinged',
    category: 'Random Funny Punishments',
    text: 'Every time someone says "the" or laughs in the next minute, you must make a tiny frog croak.',
    difficulty: 'chaos',
    duration: 60,
    scoring: { points: 25, type: 'standard' },
    tags: ['frog', 'reaction']
  },
  {
    id: 'uh-38',
    zoneId: 'unhinged',
    category: 'Random Funny Punishments',
    text: 'Give your elbows names and introduce them formally to everyone in the room.',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['elbows', 'absurd']
  },
  {
    id: 'uh-39',
    zoneId: 'unhinged',
    category: 'Random Funny Punishments',
    text: 'Stare at the ceiling and recite the alphabet backwards until the group stops laughing or you reach Z.',
    difficulty: 'spicy',
    duration: 20,
    scoring: { points: 20, type: 'standard' },
    tags: ['alphabet', 'challenge']
  },
  {
    id: 'uh-40',
    zoneId: 'unhinged',
    category: 'Absurd Truths',
    text: 'If your pet could write an anonymous review about you on Yelp, how many stars do you get and what is the title?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['pets', 'yelp']
  },
  {
    id: 'uh-41',
    zoneId: 'unhinged',
    category: 'Ridiculous Dares',
    text: 'Hold an imaginary baby with extreme fragility while having a very serious argument about economics.',
    difficulty: 'spicy',
    duration: 20,
    scoring: { points: 20, type: 'standard' },
    tags: ['baby', 'improv']
  },
  {
    id: 'uh-42',
    zoneId: 'unhinged',
    category: 'Weird Acting Challenges',
    text: 'Pretend you are in a high-budget shampoo commercial tossing your imaginary silky hair in dramatic winds.',
    difficulty: 'mild',
    duration: 15,
    scoring: { points: 15, type: 'standard' },
    tags: ['shampoo', 'commercial']
  },
  {
    id: 'uh-43',
    zoneId: 'unhinged',
    category: 'Impersonations',
    text: 'Do your best impression of a startled cat seeing a cucumber on the floor for 5 seconds.',
    difficulty: 'mild',
    duration: 5,
    scoring: { points: 15, type: 'standard' },
    tags: ['cat', 'cucumber']
  },
  {
    id: 'uh-44',
    zoneId: 'unhinged',
    category: 'Ridiculous Dares',
    text: 'Narrate everything that happens in the room for the next 45 seconds like an urgent breaking news bulletin.',
    difficulty: 'spicy',
    duration: 45,
    scoring: { points: 20, type: 'standard' },
    tags: ['news', 'breaking']
  },
  {
    id: 'uh-45',
    zoneId: 'unhinged',
    category: 'Absurd Truths',
    text: 'What fictional movie creature do you suspect you could beat in an arm-wrestling contest?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['monsters', 'bravado']
  },
  {
    id: 'uh-46',
    zoneId: 'unhinged',
    category: 'Weird Acting Challenges',
    text: 'Pretend your hand has gained sentience and is trying to write a letter of resignation from your body.',
    difficulty: 'spicy',
    duration: 15,
    scoring: { points: 20, type: 'standard' },
    tags: ['hand', 'sentient']
  },
  {
    id: 'uh-47',
    zoneId: 'unhinged',
    category: 'Random Funny Punishments',
    text: 'Speak in an aristocratic royal accent and refer to everyone in the room as "My humble peasants" for one round.',
    difficulty: 'spicy',
    scoring: { points: 20, type: 'standard' },
    tags: ['royalty', 'accent']
  },
  {
    id: 'uh-48',
    zoneId: 'unhinged',
    category: 'Tongue Twisters',
    text: 'Fast battle: "Selfish shellfish, selfish shellfish, selfish shellfish!" Can you do it cleanly?',
    difficulty: 'mild',
    duration: 10,
    scoring: { points: 15, type: 'standard' },
    tags: ['twister', 'shellfish']
  },
  {
    id: 'uh-49',
    zoneId: 'unhinged',
    category: 'Ridiculous Dares',
    text: 'Create a 15-second jingle promoting a fake cereal called "Chaotic Crunch". Must sing it with passion!',
    difficulty: 'chaos',
    duration: 15,
    scoring: { points: 25, type: 'standard' },
    tags: ['jingle', 'singing']
  },
  {
    id: 'uh-50',
    zoneId: 'unhinged',
    category: 'Absurd Truths',
    text: 'If you had to replace your hands with kitchen utensils for a month, which utensils do you choose?',
    difficulty: 'mild',
    scoring: { points: 10, type: 'standard' },
    tags: ['utensils', 'absurd']
  },
  {
    id: 'uh-51',
    zoneId: 'unhinged',
    category: 'Weird Acting Challenges',
    text: 'Act like a synchronized swimmer performing an entire routine on dry carpet without breaking character.',
    difficulty: 'chaos',
    duration: 15,
    scoring: { points: 25, type: 'standard' },
    tags: ['swimmer', 'olympics']
  },
  {
    id: 'uh-52',
    zoneId: 'unhinged',
    category: 'Impersonations',
    text: 'Imitate an over-caffeinated infomercial host desperately trying to sell an ordinary pen for $99.99.',
    difficulty: 'spicy',
    duration: 20,
    scoring: { points: 20, type: 'standard' },
    tags: ['infomercial', 'sales']
  }
]
