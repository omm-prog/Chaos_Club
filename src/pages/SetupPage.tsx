import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Users,
  Plus,
  Trash2,
  Play,
  ArrowLeft,
  Sparkles,
  Clock,
  Flame,
  Award,
  Bookmark,
  Check,
  Shuffle
} from 'lucide-react'
import { ZONE_LIST, ZONES } from '../data/zones'
import { DifficultyLevel, ZoneId } from '../types/game'
import { useGameStore, AVATAR_COLORS, AVATAR_EMOJIS } from '../store/gameStore'
import { storageService } from '../services/storage'
import { Button } from '../components/common/Button'
import { soundService } from '../services/audio'

interface SetupPageProps {
  onBack: () => void
  onPartyStarted: () => void
}

const QUICK_NAME_SUGGESTIONS = ['Alex', 'Jordan', 'Taylor', 'Sam', 'Riley', 'Morgan', 'Chris', 'Casey', 'Jamie']

export const SetupPage: React.FC<SetupPageProps> = ({ onBack, onPartyStarted }) => {
  const {
    setupZoneId,
    setSetupZoneId,
    setupVibeMode,
    setSetupVibeMode,
    openAgeVerificationModal,
    settings,
    setupPlayers,
    setSetupPlayers,
    addSetupPlayer,
    removeSetupPlayer,
    setupCategories,
    toggleSetupCategory,
    setSetupCategories,
    setupDifficulty,
    setSetupDifficulty,
    setupRounds,
    setSetupRounds,
    setupTimerDuration,
    setSetupTimerDuration,
    setupEnablePunishments,
    setSetupEnablePunishments,
    setupEnableScoring,
    setSetupEnableScoring,
    startNewParty
  } = useGameStore()

  const [newPlayerName, setNewPlayerName] = useState('')
  const [savedGroups, setSavedGroups] = useState(() => storageService.getSavedGroups())
  const [isSavingGroup, setIsSavingGroup] = useState(false)
  const [newGroupName, setNewGroupName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const activeZone = ZONES[setupZoneId]

  const handleAddPlayer = (e?: React.FormEvent) => {
    e?.preventDefault()
    const trimmed = newPlayerName.trim()
    if (!trimmed) return
    addSetupPlayer(trimmed)
    setNewPlayerName('')
    setErrorMessage('')
    soundService.playClick(0.3)
  }

  const handleQuickAdd = (name: string) => {
    if (setupPlayers.includes(name)) return
    addSetupPlayer(name)
    soundService.playClick(0.3)
  }

  const handleLoadGroup = (players: string[]) => {
    setSetupPlayers([...players])
    soundService.playClick(0.4)
  }

  const handleSaveCurrentGroup = () => {
    if (!newGroupName.trim() || setupPlayers.length === 0) return
    const updated = storageService.saveGroup(newGroupName.trim(), setupPlayers)
    setSavedGroups(updated)
    setNewGroupName('')
    setIsSavingGroup(false)
    soundService.playClick(0.5)
  }

  const handleSelectAllCategories = () => {
    setSetupCategories([...activeZone.categories])
  }

  const handleStart = () => {
    if (setupPlayers.length < 1) {
      setErrorMessage('Please add at least 1 player to start!')
      return
    }
    const success = startNewParty()
    if (success) {
      onPartyStarted()
    } else {
      setErrorMessage('Failed to start party. Please check player names.')
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8 space-y-7">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#A7A0AA] hover:text-white px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back</span>
        </button>

        <span className="text-xs font-bold text-[#A7A0AA]">
          Party Setup
        </span>
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Configure Your Party
        </h1>
        <p className="text-xs sm:text-sm text-[#A7A0AA]">
          Add players, choose your game zone, and customize rules. Sensible defaults are already set!
        </p>
      </div>

      {/* Choose Your Vibe */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <label className="text-xs font-black uppercase tracking-wider text-[#A7A0AA] block">
            Choose Your Vibe
          </label>
          <span className="text-[10px] text-amber-300 font-bold">
            All dares 100% voluntary & optional
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Standard Mode Card */}
          <button
            type="button"
            onClick={() => setSetupVibeMode('standard')}
            className={`p-4 rounded-2xl text-left border transition-all cursor-pointer relative overflow-hidden ${
              setupVibeMode === 'standard'
                ? 'glass-panel-elevated border-emerald-500/60 ring-2 ring-emerald-500/30 bg-gradient-to-br from-emerald-950/20 to-transparent'
                : 'glass-panel border-white/10 hover:border-white/20 opacity-75 hover:opacity-100'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-black text-white">✨ Standard Mode</span>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                312 Prompts
              </span>
            </div>
            <p className="text-xs text-[#A7A0AA] leading-relaxed">
              Funny, friendly, romantic, and suitable for general audiences.
            </p>
          </button>

          {/* After Hours 18+ Card */}
          <button
            type="button"
            onClick={() => {
              if (!settings.is18PlusConfirmed) {
                openAgeVerificationModal()
              } else {
                setSetupVibeMode('18+')
              }
            }}
            className={`p-4 rounded-2xl text-left border transition-all cursor-pointer relative overflow-hidden ${
              setupVibeMode === '18+'
                ? 'glass-panel-elevated border-rose-500/60 ring-2 ring-rose-500/30 bg-gradient-to-br from-rose-950/30 to-[#181322]'
                : 'glass-panel border-rose-500/20 hover:border-rose-500/40 opacity-75 hover:opacity-100'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-black text-rose-200 flex items-center gap-1.5">
                <span>🔞</span>
                <span>After Hours 18+</span>
              </span>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                312 New Prompts 🔥
              </span>
            </div>
            <p className="text-xs text-[#A7A0AA] leading-relaxed">
              Bolder, more mature, flirty, suggestive, and adult-oriented. Requires age confirmation.
            </p>
          </button>
        </div>
      </div>

      {/* 1. Zone Selection */}
      <div className="space-y-2.5">
        <label className="text-xs font-black uppercase tracking-wider text-[#A7A0AA] block">
          1. Select Game Zone
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {ZONE_LIST.map((zone) => {
            const isSelected = zone.id === setupZoneId
            return (
              <button
                key={zone.id}
                type="button"
                onClick={() => setSetupZoneId(zone.id)}
                className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'glass-panel-elevated border-white/50 ring-2 ring-white/20'
                    : 'glass-panel border-white/10 hover:border-white/20 opacity-75 hover:opacity-100'
                }`}
                style={{
                  boxShadow: isSelected ? zone.theme.cardGlow : undefined
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{zone.emoji}</span>
                  <span className="text-xs font-black text-white truncate">{zone.name}</span>
                </div>
                <p className="text-[10px] text-[#A7A0AA] line-clamp-1">{zone.badge}</p>
              </button>
            )
          })}
        </div>
      </div>

      {/* 2. Player Management */}
      <div className="space-y-3 p-5 rounded-3xl glass-panel border border-white/10">
        <div className="flex items-center justify-between">
          <label className="text-xs font-black uppercase tracking-wider text-[#A7A0AA] flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-rose-400" />
            <span>2. Players in Party ({setupPlayers.length})</span>
          </label>

          {/* Saved Groups Dropdown */}
          {savedGroups.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#A7A0AA] hidden sm:inline">Load saved:</span>
              <select
                onChange={(e) => {
                  const grp = savedGroups.find((g) => g.id === e.target.value)
                  if (grp) handleLoadGroup(grp.players)
                }}
                defaultValue=""
                className="bg-[#221F2D] text-xs text-white rounded-lg px-2.5 py-1 border border-white/15 outline-none cursor-pointer"
              >
                <option value="" disabled>Saved Groups...</option>
                {savedGroups.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.name} ({g.players.length} players)
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Add Player Input Form */}
        <form onSubmit={handleAddPlayer} className="flex gap-2">
          <input
            type="text"
            value={newPlayerName}
            onChange={(e) => setNewPlayerName(e.target.value)}
            placeholder="Type player name..."
            maxLength={20}
            className="flex-1 bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#6B6474] focus:outline-none focus:border-rose-400 transition-colors"
          />
          <Button type="submit" size="md" variant="primary">
            <Plus className="w-4 h-4" />
            <span>Add</span>
          </Button>
        </form>

        {/* Quick Suggestions */}
        <div className="flex items-center gap-1.5 flex-wrap pt-1">
          <span className="text-[10px] text-[#6B6474]">Quick suggestions:</span>
          {QUICK_NAME_SUGGESTIONS.filter((n) => !setupPlayers.includes(n)).slice(0, 6).map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => handleQuickAdd(name)}
              className="text-[11px] font-semibold text-[#A7A0AA] hover:text-white bg-white/5 hover:bg-white/10 px-2 py-0.5 rounded-lg border border-white/5 transition-colors cursor-pointer"
            >
              + {name}
            </button>
          ))}
        </div>

        {/* Current Players Tag List */}
        <div className="space-y-2 pt-2">
          {setupPlayers.length === 0 ? (
            <div className="text-center py-6 text-xs text-[#6B6474] italic">
              No players added yet. Add at least 2 friends to start local multiplayer!
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {setupPlayers.map((name, index) => {
                const color = AVATAR_COLORS[index % AVATAR_COLORS.length]
                const emoji = AVATAR_EMOJIS[index % AVATAR_EMOJIS.length]
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2.5 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center text-sm shadow-sm border"
                        style={{
                          backgroundColor: `${color}25`,
                          borderColor: color
                        }}
                      >
                        {emoji}
                      </div>
                      <span className="text-xs font-bold text-white truncate max-w-[140px]">
                        {name}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeSetupPlayer(index)}
                      className="p-1 rounded-lg text-[#6B6474] hover:text-red-400 hover:bg-white/10 transition-colors cursor-pointer"
                      title="Remove player"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Save Current Group Button */}
        {setupPlayers.length >= 2 && (
          <div className="pt-2 border-t border-white/5">
            {isSavingGroup ? (
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="text"
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                  placeholder="Group Name (e.g. Friday Squad)"
                  maxLength={25}
                  className="flex-1 bg-white/5 border border-white/20 rounded-xl px-3 py-1.5 text-xs text-white placeholder-[#6B6474] outline-none"
                />
                <Button size="sm" variant="accent" onClick={handleSaveCurrentGroup}>
                  Save
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setIsSavingGroup(false)}>
                  Cancel
                </Button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsSavingGroup(true)}
                className="text-[11px] font-bold text-rose-300 hover:text-rose-200 flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>Save this group for future parties</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* 3. Categories Filter */}
      <div className="space-y-2.5 p-5 rounded-3xl glass-panel border border-white/10">
        <div className="flex items-center justify-between">
          <label className="text-xs font-black uppercase tracking-wider text-[#A7A0AA]">
            3. Active Categories ({setupCategories.length}/{activeZone.categories.length})
          </label>
          <button
            type="button"
            onClick={handleSelectAllCategories}
            className="text-[11px] font-bold text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
          >
            Select All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {activeZone.categories.map((cat) => {
            const isChecked = setupCategories.includes(cat)
            return (
              <button
                key={cat}
                type="button"
                onClick={() => toggleSetupCategory(cat)}
                className={`flex items-center justify-between p-2.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                  isChecked
                    ? 'bg-rose-500/15 text-white border-rose-500/40'
                    : 'bg-white/5 text-[#6B6474] border-white/5 hover:text-[#A7A0AA]'
                }`}
              >
                <span>{cat}</span>
                {isChecked && <Check className="w-3.5 h-3.5 text-rose-400 shrink-0" />}
              </button>
            )
          })}
        </div>
      </div>

      {/* 4. Rounds, Difficulty & Game Rules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Rounds */}
        <div className="p-4 rounded-3xl glass-panel border border-white/10 space-y-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#A7A0AA] block">
            Rounds
          </label>
          <div className="grid grid-cols-4 gap-1.5">
            {[5, 10, 15, -1].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setSetupRounds(r)}
                className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  setupRounds === r
                    ? 'bg-rose-600 text-white border-rose-400 shadow-md'
                    : 'bg-white/5 text-[#A7A0AA] border-white/5 hover:text-white'
                }`}
              >
                {r === -1 ? 'Endless' : `${r}`}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty */}
        <div className="p-4 rounded-3xl glass-panel border border-white/10 space-y-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#A7A0AA] block">
            Difficulty
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {(['mild', 'spicy', 'chaos'] as DifficultyLevel[]).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setSetupDifficulty(d)}
                className={`py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                  setupDifficulty === d
                    ? 'bg-rose-600 text-white border-rose-400 shadow-md'
                    : 'bg-white/5 text-[#A7A0AA] border-white/5 hover:text-white'
                }`}
              >
                {d === 'spicy' ? 'Spicy 🔥' : d === 'chaos' ? 'Chaos ⚡' : 'Mild'}
              </button>
            ))}
          </div>
        </div>

        {/* Timer Duration */}
        <div className="p-4 rounded-3xl glass-panel border border-white/10 space-y-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#A7A0AA] block">
            Turn Timer
          </label>
          <div className="grid grid-cols-4 gap-1.5">
            {[0, 15, 30, 45].map((sec) => (
              <button
                key={sec}
                type="button"
                onClick={() => setSetupTimerDuration(sec)}
                className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  setupTimerDuration === sec
                    ? 'bg-rose-600 text-white border-rose-400 shadow-md'
                    : 'bg-white/5 text-[#A7A0AA] border-white/5 hover:text-white'
                }`}
              >
                {sec === 0 ? 'Off' : `${sec}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Toggles: Punishments & Scoring */}
        <div className="p-4 rounded-3xl glass-panel border border-white/10 space-y-3">
          <label className="text-xs font-black uppercase tracking-wider text-[#A7A0AA] block">
            Optional Rules
          </label>
          <div className="space-y-2">
            <label className="flex items-center justify-between text-xs font-bold text-white cursor-pointer select-none">
              <span>Chaos Punishments on Skip</span>
              <input
                type="checkbox"
                checked={setupEnablePunishments}
                onChange={(e) => setSetupEnablePunishments(e.target.checked)}
                className="w-4 h-4 accent-rose-500 rounded cursor-pointer"
              />
            </label>
            <label className="flex items-center justify-between text-xs font-bold text-white cursor-pointer select-none">
              <span>Friendly Score Tracker</span>
              <input
                type="checkbox"
                checked={setupEnableScoring}
                onChange={(e) => setSetupEnableScoring(e.target.checked)}
                className="w-4 h-4 accent-rose-500 rounded cursor-pointer"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className="p-3.5 rounded-2xl bg-red-500/15 border border-red-500/30 text-xs font-bold text-red-300 text-center animate-shake">
          {errorMessage}
        </div>
      )}

      {/* Launch Party CTA */}
      <div className="pt-2">
        <Button
          size="xl"
          fullWidth
          variant="primary"
          onClick={handleStart}
          className="shadow-2xl shadow-rose-900/50 text-lg font-black"
        >
          <Play className="w-6 h-6 fill-current" />
          <span>Launch Party 🎉</span>
        </Button>
      </div>
    </div>
  )
}
