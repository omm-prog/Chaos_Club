import { ZoneConfig, ZoneId, Prompt } from '../../types/game'
import { afterDarkPrompts } from './after-dark'
import { unhingedPrompts } from './unhinged'
import { bestieWarsPrompts } from './bestie-wars'
import { confessionRoomPrompts } from './confession-room'
import { savageModePrompts } from './savage-mode'
import { coupleChemistryPrompts } from './couple-chemistry'

export const ZONES: Record<ZoneId, ZoneConfig> = {
  'after-dark': {
    id: 'after-dark',
    name: 'After Dark',
    tagline: 'Flirtatious, deep, and beautifully cinematic.',
    description: 'An intimate late-night atmosphere designed to ignite chemistry, spark flirtatious banter, and explore unspoken connections under soft candlelight.',
    badge: 'Romantic & Intimate',
    emoji: '🖤',
    theme: {
      primary: '#9F1239', // deep rose/burgundy
      secondary: '#4C0519', // wine dark
      accent: '#FB7185', // soft rose
      bgGradient: 'radial-gradient(ellipse at 50% 0%, rgba(159, 18, 57, 0.25) 0%, rgba(76, 5, 25, 0.12) 40%, rgba(11, 10, 14, 0.98) 85%)',
      cardGlow: '0 0 35px -5px rgba(225, 29, 72, 0.35)',
      borderAccent: 'rgba(251, 113, 133, 0.3)',
      textAccent: '#FDA4AF'
    },
    categories: [
      'Romantic Truth',
      'Flirty Dare',
      'Deep Connection',
      'Couple Challenges',
      'Chemistry Tests',
      'Secret Confessions'
    ],
    recommendedPlayers: '2 - 8 Players',
    estimatedDuration: '20 - 45 min',
    atmosphereNote: 'Sensual, late-night, cinematic romance'
  },
  'unhinged': {
    id: 'unhinged',
    name: 'Unhinged',
    tagline: 'Chaotic humor, absurdity, and zero filter.',
    description: 'Throw logic out the window. High-voltage dares, bizarre acting dilemmas, lightning tongue twisters, and hysterically unpredictable party challenges.',
    badge: 'Pure Absurd Chaos',
    emoji: '🤡',
    theme: {
      primary: '#9333EA', // electric purple
      secondary: '#84CC16', // acid lime
      accent: '#F97316', // vivid orange
      bgGradient: 'radial-gradient(ellipse at 50% 0%, rgba(147, 51, 234, 0.28) 0%, rgba(132, 204, 22, 0.12) 45%, rgba(11, 10, 14, 0.98) 85%)',
      cardGlow: '0 0 35px -5px rgba(168, 85, 247, 0.4)',
      borderAccent: 'rgba(168, 85, 247, 0.4)',
      textAccent: '#C084FC'
    },
    categories: [
      'Absurd Truths',
      'Ridiculous Dares',
      'Weird Acting Challenges',
      'Impersonations',
      'Tongue Twisters',
      'Random Funny Punishments'
    ],
    recommendedPlayers: '3 - 14 Players',
    estimatedDuration: '15 - 30 min',
    atmosphereNote: 'High energy, hysterical, boundary-free laughter'
  },
  'bestie-wars': {
    id: 'bestie-wars',
    name: 'Bestie Wars',
    tagline: 'Friendly rivalry, squad trivia, and inside jokes.',
    description: 'Find out who knows who best! Put your friendships to the test with who-is-most-likely predictions, rapid duels, secret habits, and squad roars.',
    badge: 'Squad Competition',
    emoji: '⚔️',
    theme: {
      primary: '#2563EB', // vibrant royal blue
      secondary: '#7C3AED', // purple
      accent: '#38BDF8', // bright cyan
      bgGradient: 'radial-gradient(ellipse at 50% 0%, rgba(37, 99, 235, 0.25) 0%, rgba(124, 58, 237, 0.12) 45%, rgba(11, 10, 14, 0.98) 85%)',
      cardGlow: '0 0 35px -5px rgba(59, 130, 246, 0.35)',
      borderAccent: 'rgba(56, 189, 248, 0.35)',
      textAccent: '#60A5FA'
    },
    categories: [
      'Who Is Most Likely To?',
      'Guess Who',
      'Best Friend Trivia',
      'Group Predictions',
      'Friendly Rivalry',
      'Team Challenges'
    ],
    recommendedPlayers: '3 - 12 Players',
    estimatedDuration: '20 - 40 min',
    atmosphereNote: 'Playful competition, inside jokes, group bonding'
  },
  'confession-room': {
    id: 'confession-room',
    name: 'Confession Room',
    tagline: 'Honest truths, deep memories, and genuine vulnerability.',
    description: 'Step into a calm, judgment-free space. Unpack personal milestones, meaningful friendships, unexpected reflections, and real stories that matter.',
    badge: 'Heart & Soul',
    emoji: '🔐',
    theme: {
      primary: '#0D9488', // deep teal
      secondary: '#0F172A', // midnight slate
      accent: '#38BDF8', // soft cyan
      bgGradient: 'radial-gradient(ellipse at 50% 0%, rgba(13, 148, 136, 0.22) 0%, rgba(15, 23, 42, 0.2) 50%, rgba(11, 10, 14, 0.98) 85%)',
      cardGlow: '0 0 35px -5px rgba(13, 148, 136, 0.3)',
      borderAccent: 'rgba(45, 212, 191, 0.3)',
      textAccent: '#5EEAD4'
    },
    categories: [
      'Honest Truths',
      'Unexpected Questions',
      'Memory Sharing',
      'Friendship Questions',
      'Personal Growth',
      'Relationship Conversations'
    ],
    recommendedPlayers: '2 - 10 Players',
    estimatedDuration: '25 - 50 min',
    atmosphereNote: 'Calm, soulful, judgment-free storytelling'
  },
  'savage-mode': {
    id: 'savage-mode',
    name: 'Savage Mode',
    tagline: 'Fast reactions, cheeky roasts, and high-octane pressure.',
    description: 'Feel the heat! 5-second countdowns, sudden reaction showdowns, double-or-nothing gambles, and harmless lightning roasts.',
    badge: 'High Octane',
    emoji: '🔥',
    theme: {
      primary: '#DC2626', // crimson red
      secondary: '#EA580C', // fiery orange
      accent: '#FBBF24', // golden ember
      bgGradient: 'radial-gradient(ellipse at 50% 0%, rgba(220, 38, 38, 0.28) 0%, rgba(234, 88, 12, 0.14) 45%, rgba(11, 10, 14, 0.98) 85%)',
      cardGlow: '0 0 35px -5px rgba(234, 88, 12, 0.4)',
      borderAccent: 'rgba(251, 191, 36, 0.35)',
      textAccent: '#F97316'
    },
    categories: [
      'Quick-Fire Questions',
      'Harmless Roasts',
      'Reaction Battles',
      'Mini Competitions',
      'Risk-and-Reward Rounds',
      'Random Challenge Cards'
    ],
    recommendedPlayers: '2 - 12 Players',
    estimatedDuration: '15 - 30 min',
    atmosphereNote: 'Fast-paced, electrifying adrenaline'
  },
  'couple-chemistry': {
    id: 'couple-chemistry',
    name: 'Couple Chemistry',
    tagline: 'Affection, sweet dares, and deeper romantic sync.',
    description: 'Designed exclusively for pairs and couples. Test how well you really know each other’s habits, relive golden memories, and share romantic sparks.',
    badge: 'For Couples & Dates',
    emoji: '❤️',
    theme: {
      primary: '#DB2777', // vibrant pink
      secondary: '#BE123C', // ruby
      accent: '#FDE68A', // warm champagne
      bgGradient: 'radial-gradient(ellipse at 50% 0%, rgba(219, 39, 119, 0.24) 0%, rgba(190, 18, 60, 0.12) 45%, rgba(11, 10, 14, 0.98) 85%)',
      cardGlow: '0 0 35px -5px rgba(244, 63, 94, 0.35)',
      borderAccent: 'rgba(253, 230, 138, 0.35)',
      textAccent: '#F472B6'
    },
    categories: [
      'How Well Do You Know Each Other?',
      'Compatibility Questions',
      'Romantic Truths',
      'Sweet Dares',
      'Memory Challenges',
      'Choose Between Two Options'
    ],
    recommendedPlayers: '2 Players (Pairs)',
    estimatedDuration: '20 - 45 min',
    atmosphereNote: 'Warm, affectionate, heartwarming connection'
  }
}

import { ALL_18_PLUS_PROMPTS_BY_ZONE } from './18plus'
import type { VibeMode } from '../../types/game'

export const ZONE_LIST = Object.values(ZONES)

export const ALL_PROMPTS_BY_ZONE: Record<ZoneId, Prompt[]> = {
  'after-dark': afterDarkPrompts,
  'unhinged': unhingedPrompts,
  'bestie-wars': bestieWarsPrompts,
  'confession-room': confessionRoomPrompts,
  'savage-mode': savageModePrompts,
  'couple-chemistry': coupleChemistryPrompts
}

export { ALL_18_PLUS_PROMPTS_BY_ZONE }

export function getPromptsForZone(zoneId: ZoneId, vibeMode: VibeMode = 'standard'): Prompt[] {
  if (vibeMode === '18+') {
    return (ALL_18_PLUS_PROMPTS_BY_ZONE[zoneId] || []).map((p) => ({
      ...p,
      vibeMode: '18+' as const
    }))
  }
  return (ALL_PROMPTS_BY_ZONE[zoneId] || []).map((p) => ({
    ...p,
    vibeMode: 'standard' as const
  }))
}

export function getTotalPromptCounts(): { standard: number; afterHours18: number; total: number } {
  const standard = Object.values(ALL_PROMPTS_BY_ZONE).reduce((acc, p) => acc + p.length, 0)
  const afterHours18 = Object.values(ALL_18_PLUS_PROMPTS_BY_ZONE).reduce((acc, p) => acc + p.length, 0)
  return { standard, afterHours18, total: standard + afterHours18 }
}

