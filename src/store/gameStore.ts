import { create } from 'zustand'
import {
  DifficultyLevel,
  GameSession,
  GameSettings,
  Player,
  Prompt,
  Punishment,
  VibeMode,
  ZoneId
} from '../types/game'
import { getPromptsForZone, ZONES } from '../data/zones'
import { punishments } from '../data/punishments'
import { storageService } from '../services/storage'
import { soundService } from '../services/audio'
import { hapticsService } from '../services/haptics'

export const AVATAR_COLORS = [
  '#F43F5E', // Rose
  '#8B5CF6', // Violet
  '#06B6D4', // Cyan
  '#10B981', // Emerald
  '#F59E0B', // Amber
  '#EC4899', // Pink
  '#3B82F6', // Blue
  '#A855F7', // Purple
  '#14B8A6', // Teal
  '#E11D48'  // Crimson
]

export const AVATAR_EMOJIS = ['✨', '🔥', '👑', '🖤', '⚡', '🎭', '💎', '🎯', '🚀', '⭐', '🌙', '🎪']

interface GameState {
  // Current active session
  session: GameSession | null
  settings: GameSettings
  
  // Ephemeral gameplay states
  timeRemaining: number
  isTimerRunning: boolean
  activePunishment: Punishment | null
  isPunishmentModalOpen: boolean
  isPauseModalOpen: boolean
  isAgeVerificationModalOpen: boolean
  
  // Game Setup state (before session begins)
  setupZoneId: ZoneId
  setupVibeMode: VibeMode
  setupPlayers: string[]
  setupCategories: string[]
  setupDifficulty: DifficultyLevel
  setupRounds: number
  setupTimerDuration: number
  setupEnablePunishments: boolean
  setupEnableScoring: boolean

  // Actions
  setSetupZoneId: (zoneId: ZoneId) => void
  setSetupVibeMode: (vibeMode: VibeMode) => void
  toggleVibeMode: () => void
  openAgeVerificationModal: () => void
  closeAgeVerificationModal: () => void
  confirmAgeVerification: () => void
  setSetupPlayers: (players: string[]) => void
  addSetupPlayer: (name: string) => void
  removeSetupPlayer: (index: number) => void
  setSetupCategories: (categories: string[]) => void
  toggleSetupCategory: (category: string) => void
  setSetupDifficulty: (difficulty: DifficultyLevel) => void
  setSetupRounds: (rounds: number) => void
  setSetupTimerDuration: (seconds: number) => void
  setSetupEnablePunishments: (enabled: boolean) => void
  setSetupEnableScoring: (enabled: boolean) => void

  // Session Actions
  startNewParty: () => boolean
  resumeSavedSession: () => boolean
  revealPrompt: () => void
  completePrompt: () => void
  skipPrompt: () => void
  passPrompt: () => void
  swapPrompt: () => void
  acceptPunishment: () => void
  declinePunishment: () => void
  closePunishmentModal: () => void
  
  // Timers & Modals
  tickTimer: () => void
  resetTimer: () => void
  togglePauseModal: (open?: boolean) => void
  endPartyEarly: () => void
  playAgainSamePlayers: () => void
  exitPartyToHome: () => void

  // Settings
  updateSettings: (newSettings: Partial<GameSettings>) => void
}

export const useGameStore = create<GameState>((set, get) => {
  const initialSettings = storageService.getSettings()
  const savedActive = storageService.getActiveSession()

  return {
    session: savedActive,
    settings: initialSettings,
    timeRemaining: initialSettings.timerDuration,
    isTimerRunning: false,
    activePunishment: null,
    isPunishmentModalOpen: false,
    isPauseModalOpen: false,
    isAgeVerificationModalOpen: false,

    setupZoneId: 'after-dark',
    setupVibeMode: initialSettings.vibeMode || 'standard',
    setupPlayers: ['Alex', 'Taylor'],
    setupCategories: [...ZONES['after-dark'].categories],
    setupDifficulty: 'mild',
    setupRounds: 10,
    setupTimerDuration: 30,
    setupEnablePunishments: true,
    setupEnableScoring: true,

    setSetupZoneId: (zoneId: ZoneId) => {
      const zone = ZONES[zoneId]
      set({
        setupZoneId: zoneId,
        setupCategories: [...zone.categories]
      })
    },

    setSetupVibeMode: (vibeMode: VibeMode) => {
      if (vibeMode === '18+' && !get().settings.is18PlusConfirmed) {
        set({ isAgeVerificationModalOpen: true })
        return
      }
      set({ setupVibeMode: vibeMode })
      storageService.saveSettings({ vibeMode })
    },

    toggleVibeMode: () => {
      const current = get().setupVibeMode
      if (current === 'standard') {
        if (!get().settings.is18PlusConfirmed) {
          set({ isAgeVerificationModalOpen: true })
          return
        }
        set({ setupVibeMode: '18+' })
        storageService.saveSettings({ vibeMode: '18+' })
      } else {
        set({ setupVibeMode: 'standard' })
        storageService.saveSettings({ vibeMode: 'standard' })
      }
    },

    openAgeVerificationModal: () => set({ isAgeVerificationModalOpen: true }),
    closeAgeVerificationModal: () => set({ isAgeVerificationModalOpen: false }),

    confirmAgeVerification: () => {
      storageService.saveSettings({ is18PlusConfirmed: true, vibeMode: '18+' })
      set((s) => ({
        settings: { ...s.settings, is18PlusConfirmed: true, vibeMode: '18+' },
        setupVibeMode: '18+',
        isAgeVerificationModalOpen: false
      }))
    },

    setSetupPlayers: (players: string[]) => set({ setupPlayers: players }),

    addSetupPlayer: (name: string) => {
      const trimmed = name.trim()
      if (!trimmed) return
      set((state) => ({
        setupPlayers: [...state.setupPlayers, trimmed]
      }))
    },

    removeSetupPlayer: (index: number) => {
      set((state) => ({
        setupPlayers: state.setupPlayers.filter((_, i) => i !== index)
      }))
    },

    setSetupCategories: (categories: string[]) => set({ setupCategories: categories }),

    toggleSetupCategory: (category: string) => {
      set((state) => {
        const exists = state.setupCategories.includes(category)
        if (exists) {
          // Keep at least 1 category selected
          if (state.setupCategories.length <= 1) return state
          return { setupCategories: state.setupCategories.filter((c) => c !== category) }
        }
        return { setupCategories: [...state.setupCategories, category] }
      })
    },

    setSetupDifficulty: (difficulty: DifficultyLevel) => set({ setupDifficulty: difficulty }),
    setSetupRounds: (rounds: number) => set({ setupRounds: rounds }),
    setSetupTimerDuration: (seconds: number) => set({ setupTimerDuration: seconds }),
    setSetupEnablePunishments: (enabled: boolean) => set({ setupEnablePunishments: enabled }),
    setSetupEnableScoring: (enabled: boolean) => set({ setupEnableScoring: enabled }),

    startNewParty: () => {
      const state = get()
      const validNames = state.setupPlayers.map((p) => p.trim()).filter((p) => p.length > 0)
      if (validNames.length === 0) return false

      // Create Players with avatars
      const players: Player[] = validNames.map((name, i) => ({
        id: `ply-${Date.now()}-${i}`,
        name,
        avatarColor: AVATAR_COLORS[i % AVATAR_COLORS.length],
        avatarEmoji: AVATAR_EMOJIS[i % AVATAR_EMOJIS.length],
        score: 0,
        completedCount: 0,
        skippedCount: 0,
        passedCount: 0
      }))

      const zoneId = state.setupZoneId
      const allPrompts = getPromptsForZone(zoneId, state.setupVibeMode)
      
      // Filter by selected categories and difficulty (or include all if empty)
      const allowedCategories = state.setupCategories.length > 0 ? state.setupCategories : ZONES[zoneId].categories
      let filtered = allPrompts.filter((p) => allowedCategories.includes(p.category))
      if (filtered.length === 0) filtered = allPrompts

      // Shuffle prompts deterministically
      const shuffled = [...filtered].sort(() => Math.random() - 0.5)
      const firstPrompt = shuffled[0] || null

      const session: GameSession = {
        id: `sess-${Date.now()}`,
        zoneId,
        vibeMode: state.setupVibeMode,
        players,
        activePlayerIndex: 0,
        currentRound: 1,
        totalRounds: state.setupRounds,
        currentPrompt: firstPrompt,
        usedPromptIds: firstPrompt ? [firstPrompt.id] : [],
        history: [],
        isPaused: false,
        isPrivacyCoverActive: true, // "Pass the phone to [Player 1]"
        isGameOver: false,
        startedAt: Date.now(),
        updatedAt: Date.now()
      }

      // Record recent zone
      storageService.addRecentZone(zoneId)
      storageService.saveActiveSession(session)

      // Audio & Haptics
      if (state.settings.enableSound) {
        soundService.playPartyStart()
        if (state.settings.enableAmbient) {
          soundService.startAmbient(zoneId)
        }
      }
      if (state.settings.enableHaptics) {
        hapticsService.success()
      }

      set({
        session,
        timeRemaining: firstPrompt?.duration || state.setupTimerDuration,
        isTimerRunning: false,
        activePunishment: null,
        isPunishmentModalOpen: false,
        isPauseModalOpen: false
      })

      return true
    },

    resumeSavedSession: () => {
      const saved = storageService.getActiveSession()
      if (!saved || saved.isGameOver) return false

      set({
        session: saved,
        timeRemaining: saved.currentPrompt?.duration || get().settings.timerDuration,
        isTimerRunning: false,
        activePunishment: null,
        isPunishmentModalOpen: false,
        isPauseModalOpen: false
      })

      if (get().settings.enableSound && get().settings.enableAmbient) {
        soundService.startAmbient(saved.zoneId)
      }

      return true
    },

    revealPrompt: () => {
      const state = get()
      if (!state.session) return

      if (state.settings.enableSound) soundService.playCardReveal()
      if (state.settings.enableHaptics) hapticsService.tap()

      const updatedSession: GameSession = {
        ...state.session,
        isPrivacyCoverActive: false,
        updatedAt: Date.now()
      }

      const timerDuration = state.session.currentPrompt?.duration || state.settings.timerDuration
      storageService.saveActiveSession(updatedSession)

      set({
        session: updatedSession,
        timeRemaining: timerDuration,
        isTimerRunning: timerDuration > 0
      })
    },

    completePrompt: () => {
      const state = get()
      if (!state.session || !state.session.currentPrompt) return

      const activePlayer = state.session.players[state.session.activePlayerIndex]
      const points = state.session.currentPrompt.scoring?.points || 10

      if (state.settings.enableSound) soundService.playComplete()
      if (state.settings.enableHaptics) hapticsService.success()

      // Update player score & stats
      const updatedPlayers = state.session.players.map((p, idx) => {
        if (idx === state.session!.activePlayerIndex) {
          return {
            ...p,
            score: p.score + (state.settings.enableScoring ? points : 0),
            completedCount: p.completedCount + 1
          }
        }
        return p
      })

      const newHistory = [
        ...state.session.history,
        {
          playerId: activePlayer.id,
          promptId: state.session.currentPrompt.id,
          action: 'completed' as const,
          timestamp: Date.now(),
          points
        }
      ]

      advanceTurn(get, set, updatedPlayers, newHistory)
    },

    skipPrompt: () => {
      const state = get()
      if (!state.session || !state.session.currentPrompt) return

      if (state.settings.enableSound) soundService.playSkip()
      if (state.settings.enableHaptics) hapticsService.skip()

      // Check if Random Punishment system is enabled
      if (state.settings.enablePunishments) {
        // Draw a random fun punishment
        const randomP = punishments[Math.floor(Math.random() * punishments.length)]
        if (state.settings.enableSound) soundService.playPunishmentReveal()
        if (state.settings.enableHaptics) hapticsService.punishment()
        set({
          activePunishment: randomP,
          isPunishmentModalOpen: true,
          isTimerRunning: false
        })
        return
      }

      // If punishments disabled, directly mark skipped and advance
      const updatedPlayers = state.session.players.map((p, idx) => {
        if (idx === state.session!.activePlayerIndex) {
          return { ...p, skippedCount: p.skippedCount + 1 }
        }
        return p
      })

      const newHistory = [
        ...state.session.history,
        {
          playerId: state.session.players[state.session.activePlayerIndex].id,
          promptId: state.session.currentPrompt.id,
          action: 'skipped' as const,
          timestamp: Date.now(),
          points: 0
        }
      ]

      advanceTurn(get, set, updatedPlayers, newHistory)
    },

    passPrompt: () => {
      const state = get()
      if (!state.session || !state.session.currentPrompt) return

      if (state.settings.enableSound) soundService.playSkip(0.3)
      if (state.settings.enableHaptics) hapticsService.tap()

      const updatedPlayers = state.session.players.map((p, idx) => {
        if (idx === state.session!.activePlayerIndex) {
          return {
            ...p,
            passedCount: (p.passedCount || 0) + 1
          }
        }
        return p
      })

      const newHistory = [
        ...state.session.history,
        {
          playerId: state.session.players[state.session.activePlayerIndex].id,
          promptId: state.session.currentPrompt.id,
          action: 'passed' as const,
          timestamp: Date.now(),
          points: 0
        }
      ]

      advanceTurn(get, set, updatedPlayers, newHistory)
    },

    swapPrompt: () => {
      const state = get()
      if (!state.session) return

      const allPrompts = getPromptsForZone(state.session.zoneId, state.session.vibeMode)
      const allowedCategories = state.settings.categories.length > 0 ? state.settings.categories : ZONES[state.session.zoneId].categories
      
      // Filter excluding already used in session
      const available = allPrompts.filter(
        (p) => allowedCategories.includes(p.category) && !state.session!.usedPromptIds.includes(p.id)
      )
      
      const nextPrompt = available.length > 0 
        ? available[Math.floor(Math.random() * available.length)] 
        : allPrompts[Math.floor(Math.random() * allPrompts.length)]

      if (state.settings.enableSound) soundService.playCardReveal()
      if (state.settings.enableHaptics) hapticsService.tap()

      const updatedSession: GameSession = {
        ...state.session,
        currentPrompt: nextPrompt,
        usedPromptIds: [...state.session.usedPromptIds, nextPrompt.id],
        updatedAt: Date.now()
      }

      storageService.saveActiveSession(updatedSession)

      const timerDuration = nextPrompt?.duration || state.settings.timerDuration

      set({
        session: updatedSession,
        timeRemaining: timerDuration,
        isTimerRunning: timerDuration > 0
      })
    },

    acceptPunishment: () => {
      const state = get()
      if (!state.session || !state.session.currentPrompt) return

      if (state.settings.enableSound) soundService.playComplete(0.5)
      if (state.settings.enableHaptics) hapticsService.success()

      // Award bonus 5 sport points for taking the punishment
      const updatedPlayers = state.session.players.map((p, idx) => {
        if (idx === state.session!.activePlayerIndex) {
          return {
            ...p,
            score: p.score + 5,
            skippedCount: p.skippedCount + 1
          }
        }
        return p
      })

      const newHistory = [
        ...state.session.history,
        {
          playerId: state.session.players[state.session.activePlayerIndex].id,
          promptId: state.session.currentPrompt.id,
          action: 'skipped' as const,
          timestamp: Date.now(),
          points: 5
        }
      ]

      set({ isPunishmentModalOpen: false, activePunishment: null })
      advanceTurn(get, set, updatedPlayers, newHistory)
    },

    declinePunishment: () => {
      const state = get()
      if (!state.session || !state.session.currentPrompt) return

      const updatedPlayers = state.session.players.map((p, idx) => {
        if (idx === state.session!.activePlayerIndex) {
          return { ...p, skippedCount: p.skippedCount + 1 }
        }
        return p
      })

      const newHistory = [
        ...state.session.history,
        {
          playerId: state.session.players[state.session.activePlayerIndex].id,
          promptId: state.session.currentPrompt.id,
          action: 'skipped' as const,
          timestamp: Date.now(),
          points: 0
        }
      ]

      set({ isPunishmentModalOpen: false, activePunishment: null })
      advanceTurn(get, set, updatedPlayers, newHistory)
    },

    closePunishmentModal: () => {
      set({ isPunishmentModalOpen: false, activePunishment: null })
    },

    tickTimer: () => {
      const state = get()
      if (!state.isTimerRunning || state.timeRemaining <= 0) return

      const next = state.timeRemaining - 1
      if (next <= 5 && next > 0) {
        if (state.settings.enableSound) soundService.playTimerTick()
        if (state.settings.enableHaptics) hapticsService.tick()
      } else if (next === 0) {
        if (state.settings.enableSound) soundService.playTimerWarning()
        if (state.settings.enableHaptics) hapticsService.warning()
      }

      set({
        timeRemaining: next,
        isTimerRunning: next > 0
      })
    },

    resetTimer: () => {
      const state = get()
      const duration = state.session?.currentPrompt?.duration || state.settings.timerDuration
      set({
        timeRemaining: duration,
        isTimerRunning: duration > 0
      })
    },

    togglePauseModal: (open?: boolean) => {
      set((state) => {
        const next = open !== undefined ? open : !state.isPauseModalOpen
        return {
          isPauseModalOpen: next,
          isTimerRunning: next ? false : (state.timeRemaining > 0 && !state.session?.isPrivacyCoverActive)
        }
      })
    },

    endPartyEarly: () => {
      const state = get()
      if (!state.session) return

      const completed = state.session.players.reduce((acc, p) => acc + p.completedCount, 0)
      const skipped = state.session.players.reduce((acc, p) => acc + p.skippedCount, 0)
      storageService.recordGameCompletion(state.session.zoneId, completed, skipped)
      storageService.clearActiveSession()

      if (state.settings.enableAmbient) {
        soundService.stopAmbient()
      }

      set((s) => ({
        session: s.session ? { ...s.session, isGameOver: true } : null,
        isPauseModalOpen: false,
        isTimerRunning: false
      }))
    },

    playAgainSamePlayers: () => {
      const state = get()
      if (!state.session) return

      const playerNames = state.session.players.map((p) => p.name)
      set({
        setupPlayers: playerNames,
        setupZoneId: state.session.zoneId
      })
      get().startNewParty()
    },

    exitPartyToHome: () => {
      const state = get()
      if (state.settings.enableAmbient) {
        soundService.stopAmbient()
      }
      storageService.clearActiveSession()
      set({
        session: null,
        isPauseModalOpen: false,
        isTimerRunning: false,
        activePunishment: null,
        isPunishmentModalOpen: false
      })
    },

    updateSettings: (newSettings: Partial<GameSettings>) => {
      const updated = storageService.saveSettings(newSettings)
      set({ settings: updated })
      if (!updated.enableAmbient) {
        soundService.stopAmbient()
      }
    }
  }
})

// Helper function to advance turn cleanly and handle round increment / game over
function advanceTurn(
  get: () => GameState,
  set: (partial: Partial<GameState> | ((state: GameState) => Partial<GameState>)) => void,
  updatedPlayers: Player[],
  newHistory: GameSession['history']
) {
  const state = get()
  if (!state.session) return

  const playerCount = updatedPlayers.length
  const nextPlayerIndex = (state.session.activePlayerIndex + 1) % playerCount

  // Check if a full round just completed (all players took a turn)
  const isRoundComplete = nextPlayerIndex === 0
  const nextRound = isRoundComplete ? state.session.currentRound + 1 : state.session.currentRound
  const totalRounds = state.session.totalRounds

  // Check if party reached total rounds (unless endless mode where totalRounds < 0)
  const isGameOver = totalRounds > 0 && nextRound > totalRounds

  if (isGameOver) {
    const completed = updatedPlayers.reduce((acc, p) => acc + p.completedCount, 0)
    const skipped = updatedPlayers.reduce((acc, p) => acc + p.skippedCount, 0)
    storageService.recordGameCompletion(state.session.zoneId, completed, skipped)
    storageService.clearActiveSession()

    if (state.settings.enableAmbient) {
      soundService.stopAmbient()
    }
    if (state.settings.enableSound) {
      soundService.playComplete(0.7)
    }

    set({
      session: {
        ...state.session,
        players: updatedPlayers,
        history: newHistory,
        isGameOver: true,
        updatedAt: Date.now()
      },
      isTimerRunning: false,
      isPauseModalOpen: false
    })
    return
  }

  // Draw next prompt for the new turn
  const allPrompts = getPromptsForZone(state.session.zoneId, state.session.vibeMode)
  const allowedCategories = state.settings.categories.length > 0 ? state.settings.categories : ZONES[state.session.zoneId].categories
  
  const available = allPrompts.filter(
    (p) => allowedCategories.includes(p.category) && !state.session!.usedPromptIds.includes(p.id)
  )

  const nextPrompt = available.length > 0 
    ? available[Math.floor(Math.random() * available.length)] 
    : allPrompts[Math.floor(Math.random() * allPrompts.length)]

  const updatedSession: GameSession = {
    ...state.session,
    players: updatedPlayers,
    activePlayerIndex: nextPlayerIndex,
    currentRound: nextRound,
    currentPrompt: nextPrompt,
    usedPromptIds: nextPrompt ? [...state.session.usedPromptIds, nextPrompt.id] : state.session.usedPromptIds,
    history: newHistory,
    isPrivacyCoverActive: true, // Show "Pass the phone to [Next Player]"
    isGameOver: false,
    updatedAt: Date.now()
  }

  storageService.saveActiveSession(updatedSession)

  set({
    session: updatedSession,
    timeRemaining: nextPrompt?.duration || state.settings.timerDuration,
    isTimerRunning: false, // Don't start timer until privacy cover is unlocked
    isPauseModalOpen: false
  })
}
