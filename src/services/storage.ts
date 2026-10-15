import { GameSession, GameSettings, SavedPlayerGroup, ZoneId } from '../types/game'

const KEYS = {
  SETTINGS: 'chaos_club_settings',
  ACTIVE_SESSION: 'chaos_club_active_session',
  SAVED_GROUPS: 'chaos_club_saved_groups',
  RECENT_ZONES: 'chaos_club_recent_zones',
  STATS: 'chaos_club_stats',
  DISMISSED_SPLASH: 'chaos_club_dismissed_splash'
}

export interface StoredStats {
  gamesPlayed: number
  challengesCompleted: number
  challengesSkipped: number
  zonePlayCounts: Record<ZoneId, number>
}

export const defaultSettings: GameSettings = {
  zoneId: 'after-dark',
  vibeMode: 'standard',
  is18PlusConfirmed: false,
  categories: [],
  difficulty: 'mild',
  rounds: 10,
  timerDuration: 30,
  enablePunishments: true,
  enableScoring: true,
  enableSound: true,
  enableHaptics: true,
  enableAmbient: false,
  reducedMotion: false,
  autoRevealPrompt: false
}

export const defaultStats: StoredStats = {
  gamesPlayed: 0,
  challengesCompleted: 0,
  challengesSkipped: 0,
  zonePlayCounts: {
    'after-dark': 0,
    'unhinged': 0,
    'bestie-wars': 0,
    'confession-room': 0,
    'savage-mode': 0,
    'couple-chemistry': 0
  }
}

export const defaultPlayerGroups: SavedPlayerGroup[] = [
  {
    id: 'grp-1',
    name: 'Weekend Crew',
    players: ['Alex', 'Jordan', 'Taylor', 'Sam'],
    createdAt: Date.now() - 86400000
  },
  {
    id: 'grp-2',
    name: 'Date Night',
    players: ['You', 'Partner'],
    createdAt: Date.now() - 172800000
  }
]

class StorageService {
  private safeGet<T>(key: string, fallback: T): T {
    if (typeof window === 'undefined') return fallback
    try {
      const item = localStorage.getItem(key)
      if (!item) return fallback
      return JSON.parse(item) as T
    } catch (e) {
      console.warn(`[Chaos Club] Failed to parse ${key} from localStorage, returning fallback:`, e)
      return fallback
    }
  }

  private safeSet<T>(key: string, value: T): boolean {
    if (typeof window === 'undefined') return false
    try {
      localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (e) {
      console.error(`[Chaos Club] Error saving ${key} to localStorage:`, e)
      return false
    }
  }

  // Settings
  getSettings(): GameSettings {
    return this.safeGet<GameSettings>(KEYS.SETTINGS, defaultSettings)
  }

  saveSettings(settings: Partial<GameSettings>): GameSettings {
    const current = this.getSettings()
    const updated = { ...current, ...settings }
    this.safeSet(KEYS.SETTINGS, updated)
    return updated
  }

  // Active Session Recovery
  getActiveSession(): GameSession | null {
    return this.safeGet<GameSession | null>(KEYS.ACTIVE_SESSION, null)
  }

  saveActiveSession(session: GameSession | null): void {
    if (!session || session.isGameOver) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(KEYS.ACTIVE_SESSION)
      }
      return
    }
    this.safeSet(KEYS.ACTIVE_SESSION, session)
  }

  clearActiveSession(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(KEYS.ACTIVE_SESSION)
    }
  }

  // Saved Groups
  getSavedGroups(): SavedPlayerGroup[] {
    return this.safeGet<SavedPlayerGroup[]>(KEYS.SAVED_GROUPS, defaultPlayerGroups)
  }

  saveGroup(name: string, players: string[]): SavedPlayerGroup[] {
    const groups = this.getSavedGroups()
    const newGroup: SavedPlayerGroup = {
      id: `grp-${Date.now()}`,
      name: name.trim() || 'Custom Group',
      players: players.filter((p) => p.trim().length > 0),
      createdAt: Date.now()
    }
    const updated = [newGroup, ...groups.slice(0, 9)] // keep up to 10 groups
    this.safeSet(KEYS.SAVED_GROUPS, updated)
    return updated
  }

  deleteGroup(id: string): SavedPlayerGroup[] {
    const groups = this.getSavedGroups()
    const updated = groups.filter((g) => g.id !== id)
    this.safeSet(KEYS.SAVED_GROUPS, updated)
    return updated
  }

  // Recent Zones
  getRecentZones(): ZoneId[] {
    return this.safeGet<ZoneId[]>(KEYS.RECENT_ZONES, ['after-dark', 'unhinged', 'bestie-wars'])
  }

  addRecentZone(zoneId: ZoneId): ZoneId[] {
    const recents = this.getRecentZones().filter((z) => z !== zoneId)
    const updated = [zoneId, ...recents].slice(0, 5)
    this.safeSet(KEYS.RECENT_ZONES, updated)
    return updated
  }

  // Stats
  getStats(): StoredStats {
    return this.safeGet<StoredStats>(KEYS.STATS, defaultStats)
  }

  recordGameCompletion(zoneId: ZoneId, completed: number, skipped: number): StoredStats {
    const stats = this.getStats()
    const updated: StoredStats = {
      gamesPlayed: stats.gamesPlayed + 1,
      challengesCompleted: stats.challengesCompleted + completed,
      challengesSkipped: stats.challengesSkipped + skipped,
      zonePlayCounts: {
        ...stats.zonePlayCounts,
        [zoneId]: (stats.zonePlayCounts[zoneId] || 0) + 1
      }
    }
    this.safeSet(KEYS.STATS, updated)
    return updated
  }

  // Clear All Local Data
  clearAll(): void {
    if (typeof window === 'undefined') return
    try {
      localStorage.removeItem(KEYS.SETTINGS)
      localStorage.removeItem(KEYS.ACTIVE_SESSION)
      localStorage.removeItem(KEYS.SAVED_GROUPS)
      localStorage.removeItem(KEYS.RECENT_ZONES)
      localStorage.removeItem(KEYS.STATS)
      localStorage.removeItem(KEYS.DISMISSED_SPLASH)
    } catch {
      // ignore
    }
  }
}

export const storageService = new StorageService()
