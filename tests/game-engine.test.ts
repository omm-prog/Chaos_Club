import test from 'node:test'
import assert from 'node:assert/strict'

// Mock browser globals for Node test environment
const mockStorage: Record<string, string> = {}
global.localStorage = {
  getItem: (key: string) => mockStorage[key] || null,
  setItem: (key: string, value: string) => { mockStorage[key] = value },
  removeItem: (key: string) => { delete mockStorage[key] },
  clear: () => { Object.keys(mockStorage).forEach((k) => delete mockStorage[k]) },
  key: (i: number) => Object.keys(mockStorage)[i] || null,
  length: 0
} as unknown as Storage

global.window = {
  AudioContext: class MockAudioContext {
    state = 'running'
    currentTime = 0
    createGain = () => ({
      gain: { setValueAtTime: () => {}, linearRampToValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} },
      connect: () => {}
    })
    createOscillator = () => ({
      frequency: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {}, linearRampToValueAtTime: () => {} },
      connect: () => {},
      start: () => {},
      stop: () => {},
      disconnect: () => {}
    })
    resume = async () => {}
  },
  navigator: { vibrate: () => true }
} as unknown as Window & typeof globalThis

Object.defineProperty(global, 'navigator', {
  value: {
    vibrate: () => true,
    onLine: true,
    clipboard: {
      writeText: async () => {}
    }
  },
  configurable: true,
  writable: true
})

import {
  ZONES,
  ZONE_LIST,
  ALL_PROMPTS_BY_ZONE,
  getPromptsForZone,
  getTotalPromptCounts
} from '../src/data/zones'
import { ALL_18_PLUS_PROMPTS_BY_ZONE, get18PlusPromptsForZone } from '../src/data/zones/18plus'
import { punishments } from '../src/data/punishments'
import { storageService, defaultSettings } from '../src/services/storage'
import { useGameStore } from '../src/store/gameStore'
import { ZoneId } from '../src/types/game'

test('Content Engine: All 6 zones exist with complete configurations', () => {
  const zoneIds: ZoneId[] = [
    'after-dark',
    'unhinged',
    'bestie-wars',
    'confession-room',
    'savage-mode',
    'couple-chemistry'
  ]

  assert.equal(ZONE_LIST.length, 6)
  for (const id of zoneIds) {
    const zone = ZONES[id]
    assert.ok(zone, `Zone ${id} should exist`)
    assert.ok(zone.name.length > 0, `Zone ${id} should have a name`)
    assert.ok(zone.tagline.length > 0, `Zone ${id} should have a tagline`)
    assert.ok(zone.description.length > 0, `Zone ${id} should have a description`)
    assert.ok(zone.categories.length >= 4, `Zone ${id} should have at least 4 categories`)
    assert.ok(zone.theme.bgGradient.length > 0, `Zone ${id} should have bgGradient`)
  }
})

test('Content Engine: Target of 50+ original prompts per zone met', () => {
  const zoneIds: ZoneId[] = [
    'after-dark',
    'unhinged',
    'bestie-wars',
    'confession-room',
    'savage-mode',
    'couple-chemistry'
  ]

  for (const id of zoneIds) {
    const prompts = getPromptsForZone(id)
    assert.ok(
      prompts.length >= 50,
      `Zone ${id} must contain at least 50 prompts, found ${prompts.length}`
    )

    // Verify prompt validity
    const seenIds = new Set<string>()
    for (const p of prompts) {
      assert.ok(p.id.length > 0, 'Prompt must have an id')
      assert.ok(!seenIds.has(p.id), `Duplicate prompt id: ${p.id}`)
      seenIds.add(p.id)
      assert.equal(p.zoneId, id, 'Prompt zoneId must match zone')
      assert.ok(p.text.length > 5, 'Prompt text must be non-empty and substantive')
      assert.ok(
        ['mild', 'spicy', 'chaos'].includes(p.difficulty),
        `Invalid difficulty: ${p.difficulty}`
      )
      assert.ok(
        ZONES[id].categories.includes(p.category),
        `Prompt category '${p.category}' not registered in zone ${id}`
      )
    }
  }
})

test('Punishment System: Harmless, consensual punishments library', () => {
  assert.ok(punishments.length >= 25, 'Should have at least 25 punishments')
  for (const p of punishments) {
    assert.ok(p.id.length > 0)
    assert.ok(p.title.length > 0)
    assert.ok(p.description.length > 0)
    assert.ok(['light', 'hilarious', 'wild'].includes(p.intensity))
  }
})

test('Game Store: Player addition, quick add, and removal', () => {
  const store = useGameStore.getState()
  store.setSetupPlayers(['Alice'])
  assert.equal(useGameStore.getState().setupPlayers.length, 1)

  store.addSetupPlayer('Bob')
  store.addSetupPlayer('Charlie')
  assert.deepEqual(useGameStore.getState().setupPlayers, ['Alice', 'Bob', 'Charlie'])

  store.removeSetupPlayer(1) // remove Bob
  assert.deepEqual(useGameStore.getState().setupPlayers, ['Alice', 'Charlie'])
})

test('Game Store: Validation prevents starting party with zero players', () => {
  const store = useGameStore.getState()
  store.setSetupPlayers([])
  const started = store.startNewParty()
  assert.equal(started, false, 'Party should not start with 0 players')
  assert.equal(useGameStore.getState().session, null)
})

test('Game Store: Turn rotation and round progression', () => {
  const store = useGameStore.getState()
  store.setSetupZoneId('after-dark')
  store.setSetupPlayers(['Player1', 'Player2', 'Player3'])
  store.setSetupRounds(2)
  store.setSetupEnableScoring(true)

  const started = store.startNewParty()
  assert.equal(started, true)
  
  let session = useGameStore.getState().session
  assert.ok(session)
  assert.equal(session.players.length, 3)
  assert.equal(session.activePlayerIndex, 0)
  assert.equal(session.currentRound, 1)
  assert.equal(session.isPrivacyCoverActive, true)

  // Reveal prompt for Player 1
  store.revealPrompt()
  assert.equal(useGameStore.getState().session?.isPrivacyCoverActive, false)

  // Complete turn 1 (Player 1)
  store.completePrompt()
  session = useGameStore.getState().session
  assert.ok(session)
  assert.equal(session.activePlayerIndex, 1, 'Should rotate to Player 2')
  assert.equal(session.currentRound, 1, 'Still in Round 1')
  assert.equal(session.players[0].completedCount, 1, 'Player 1 completed 1')
  assert.ok(session.players[0].score > 0, 'Player 1 earned score')
  assert.equal(session.isPrivacyCoverActive, true, 'Privacy cover reappears')

  // Reveal & Complete turn 2 (Player 2)
  store.revealPrompt()
  store.completePrompt()
  session = useGameStore.getState().session
  assert.ok(session)
  assert.equal(session.activePlayerIndex, 2, 'Should rotate to Player 3')
  assert.equal(session.currentRound, 1)

  // Reveal & Skip turn 3 (Player 3) without punishments
  store.revealPrompt()
  store.updateSettings({ enablePunishments: false })
  store.skipPrompt()
  session = useGameStore.getState().session
  assert.ok(session)
  assert.equal(session.activePlayerIndex, 0, 'Should wrap back to Player 1')
  assert.equal(session.currentRound, 2, 'Should increment to Round 2')
  assert.equal(session.players[2].skippedCount, 1)

  // Round 2 turns: Complete all 3 to finish 2 total rounds
  store.revealPrompt()
  store.completePrompt() // P1
  store.revealPrompt()
  store.completePrompt() // P2
  store.revealPrompt()
  store.completePrompt() // P3

  session = useGameStore.getState().session
  assert.ok(session)
  assert.equal(session.isGameOver, true, 'Game should be marked as over when total rounds reached')
})

test('Storage Service: Safe recovery from corrupted JSON in localStorage', () => {
  mockStorage['chaos_club_settings'] = 'INVALID_JSON_CORRUPTED{{{}}'
  const settings = storageService.getSettings()
  assert.deepEqual(settings, defaultSettings, 'Should safely return defaultSettings on corrupted JSON')

  mockStorage['chaos_club_active_session'] = 'CORRUPTED'
  const session = storageService.getActiveSession()
  assert.equal(session, null, 'Should safely return null on corrupted session')
})

test('Storage Service: Saved player groups save and delete', () => {
  const groups = storageService.saveGroup('Board Game Gang', ['Mia', 'Leo', 'Zoe'])
  assert.ok(groups.some((g) => g.name === 'Board Game Gang'))

  const found = groups.find((g) => g.name === 'Board Game Gang')!
  const afterDelete = storageService.deleteGroup(found.id)
  assert.ok(!afterDelete.some((g) => g.id === found.id))
})

test('Content Library: 312 Standard + 312 After Hours 18+ = 624 Total Prompts', () => {
  const counts = getTotalPromptCounts()
  assert.equal(counts.standard, 312, 'Standard library must have exactly 312 prompts (52 * 6)')
  assert.equal(counts.afterHours18, 312, '18+ library must have exactly 312 prompts (52 * 6)')
  assert.equal(counts.total, 624, 'Total library must have exactly 624 prompts')

  const zoneIds: ZoneId[] = [
    'after-dark',
    'unhinged',
    'bestie-wars',
    'confession-room',
    'savage-mode',
    'couple-chemistry'
  ]

  for (const zid of zoneIds) {
    const std = getPromptsForZone(zid, 'standard')
    assert.equal(std.length, 52, `Zone ${zid} must have 52 standard prompts`)

    const mature = getPromptsForZone(zid, '18+')
    assert.equal(mature.length, 52, `Zone ${zid} must have 52 18+ prompts`)
  }
})

test('Content Library: Uniqueness of all 624 prompt IDs and valid 18+ tags', () => {
  const allIds = new Set<string>()
  const zoneIds: ZoneId[] = [
    'after-dark',
    'unhinged',
    'bestie-wars',
    'confession-room',
    'savage-mode',
    'couple-chemistry'
  ]

  for (const zid of zoneIds) {
    const std = getPromptsForZone(zid, 'standard')
    for (const p of std) {
      assert.ok(!allIds.has(p.id), `Duplicate prompt ID in standard: ${p.id}`)
      allIds.add(p.id)
      assert.equal(p.vibeMode, 'standard')
    }

    const mature = getPromptsForZone(zid, '18+')
    for (const p of mature) {
      assert.ok(!allIds.has(p.id), `Duplicate prompt ID in 18+: ${p.id}`)
      allIds.add(p.id)
      assert.equal(p.vibeMode, '18+')
      assert.ok(p.text.length > 5, '18+ prompt text must be substantive')
    }
  }

  assert.equal(allIds.size, 624, 'All 624 prompts across standard and 18+ must have unique IDs')
})

test('Vibe Mode & Age Gate: Confirmation and prompt separation', () => {
  const store = useGameStore.getState()
  // Reset confirmation
  store.updateSettings({ is18PlusConfirmed: false, vibeMode: 'standard' })

  // Trying to set 18+ when unconfirmed triggers modal
  store.setSetupVibeMode('18+')
  assert.equal(useGameStore.getState().isAgeVerificationModalOpen, true)
  assert.equal(useGameStore.getState().setupVibeMode, 'standard')

  // Confirming age unlocks 18+ mode
  store.confirmAgeVerification()
  assert.equal(useGameStore.getState().isAgeVerificationModalOpen, false)
  assert.equal(useGameStore.getState().settings.is18PlusConfirmed, true)
  assert.equal(useGameStore.getState().setupVibeMode, '18+')

  // Start 18+ session
  store.setSetupPlayers(['Sam', 'Taylor'])
  store.setSetupZoneId('after-dark')
  const started = store.startNewParty()
  assert.ok(started)

  const session = useGameStore.getState().session
  assert.ok(session)
  assert.equal(session.vibeMode, '18+')
  assert.equal(session.currentPrompt.vibeMode, '18+')
})

test('Safety & Consent: Safe pass is penalty-free and prompt swap works', () => {
  const store = useGameStore.getState()
  store.updateSettings({ enablePunishments: true })
  store.setSetupPlayers(['Alex', 'Jordan'])
  store.setSetupZoneId('unhinged')
  store.setSetupVibeMode('18+')
  store.startNewParty()

  store.revealPrompt()
  const initialPromptId = useGameStore.getState().session?.currentPrompt.id

  // Player can swap prompt without penalty
  store.swapPrompt()
  const swappedPromptId = useGameStore.getState().session?.currentPrompt.id
  assert.notEqual(initialPromptId, swappedPromptId, 'Swap should draw a new prompt')

  // Player passes prompt safely (zero punishment, zero score penalty)
  store.passPrompt()
  const sessionAfterPass = useGameStore.getState().session
  assert.ok(sessionAfterPass)
  assert.equal(useGameStore.getState().isPunishmentModalOpen, false, 'Safe pass must never trigger punishment')
  assert.equal(sessionAfterPass.players[0].passedCount, 1, 'Player pass count tracked')
  assert.equal(sessionAfterPass.players[0].score, 0, 'No points deducted')
})

