export type ZoneId =
  | 'after-dark'
  | 'unhinged'
  | 'bestie-wars'
  | 'confession-room'
  | 'savage-mode'
  | 'couple-chemistry'

export type DifficultyLevel = 'mild' | 'spicy' | 'chaos'

export type VibeMode = 'standard' | '18+'

export interface Prompt {
  id: string
  zoneId: ZoneId
  category: string
  text: string
  difficulty: DifficultyLevel
  vibeMode?: VibeMode
  supportedPlayerCounts?: [number, number] // [min, max]
  duration?: number // duration in seconds if timed
  scoring?: {
    points: number
    type: 'standard' | 'bonus' | 'vote'
  }
  tags?: string[]
}

export interface Player {
  id: string
  name: string
  avatarColor: string
  avatarEmoji: string
  score: number
  completedCount: number
  skippedCount: number
  passedCount: number
}

export interface SavedPlayerGroup {
  id: string
  name: string
  players: string[] // player names
  createdAt: number
}

export interface ZoneConfig {
  id: ZoneId
  name: string
  tagline: string
  description: string
  badge: string
  emoji: string
  theme: {
    primary: string
    secondary: string
    accent: string
    bgGradient: string
    cardGlow: string
    borderAccent: string
    textAccent: string
  }
  categories: string[]
  recommendedPlayers: string
  estimatedDuration: string
  atmosphereNote: string
}

export interface GameSettings {
  zoneId: ZoneId
  vibeMode: VibeMode
  is18PlusConfirmed: boolean
  categories: string[]
  difficulty: DifficultyLevel
  rounds: number // 5, 10, 15, 20, or -1 for endless
  timerDuration: number // 0 for off, 15, 30, 45, 60
  enablePunishments: boolean
  enableScoring: boolean
  enableSound: boolean
  enableHaptics: boolean
  enableAmbient: boolean
  reducedMotion: boolean
  autoRevealPrompt: boolean
}

export interface Punishment {
  id: string
  title: string
  description: string
  duration?: number // seconds
  intensity: 'light' | 'hilarious' | 'wild'
}

export interface GameSession {
  id: string
  zoneId: ZoneId
  vibeMode: VibeMode
  players: Player[]
  activePlayerIndex: number
  currentRound: number
  totalRounds: number
  currentPrompt: Prompt | null
  usedPromptIds: string[]
  history: {
    playerId: string
    promptId: string
    action: 'completed' | 'skipped' | 'passed'
    timestamp: number
    points: number
  }[]
  isPaused: boolean
  isPrivacyCoverActive: boolean
  isGameOver: boolean
  startedAt: number
  updatedAt: number
}
