import React from 'react'
import { motion } from 'framer-motion'
import { Play, RotateCcw, Sparkles, Compass, Flame, Users, BookOpen } from 'lucide-react'
import { ZONE_LIST, ZONES, getTotalPromptCounts } from '../data/zones'
import { ZoneId } from '../types/game'
import { ZoneCard } from '../components/cards/ZoneCard'
import { Button } from '../components/common/Button'
import { useGameStore } from '../store/gameStore'
import { storageService } from '../services/storage'

interface HomePageProps {
  onStartParty: (preselectedZone?: ZoneId) => void
  onSelectZoneDetail: (zoneId: ZoneId) => void
  onResumeSession: () => void
  onOpenRules: () => void
}

export const HomePage: React.FC<HomePageProps> = ({
  onStartParty,
  onSelectZoneDetail,
  onResumeSession,
  onOpenRules
}) => {
  const {
    session,
    setupVibeMode,
    setSetupVibeMode,
    openAgeVerificationModal,
    settings
  } = useGameStore()
  const recentZones = storageService.getRecentZones()
  const hasActiveSession = !!session && !session.isGameOver
  const counts = getTotalPromptCounts()

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      {/* Upper 18+ Mode Quick Switcher & Starter Banner */}
      <div className="rounded-3xl p-4 sm:p-5 glass-panel-elevated border border-rose-500/40 bg-gradient-to-r from-rose-950/50 via-purple-950/30 to-[#16121E] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xl shadow-rose-950/20">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-xl shrink-0 shadow-lg border border-rose-400/30">
            {setupVibeMode === '18+' ? '🔞' : '✨'}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-black uppercase tracking-wider text-rose-300">
                {setupVibeMode === '18+' ? 'After Hours 18+ Active' : 'Standard Mode'}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-black bg-rose-500/20 text-rose-200 border border-rose-500/30">
                {setupVibeMode === '18+' ? `${counts.afterHours18} Spicy Prompts` : `${counts.standard} Family-Friendly Prompts`}
              </span>
              <span className="text-[10px] text-[#A7A0AA] hidden md:inline">
                • {counts.total} Total Library
              </span>
            </div>
            <p className="text-xs text-[#A7A0AA] mt-0.5">
              {setupVibeMode === '18+'
                ? 'Bolder, more mature, flirty, suggestive, and adult-oriented challenges.'
                : 'Funny, friendly, romantic, and suitable for general audiences.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          {setupVibeMode === 'standard' ? (
            <Button
              size="sm"
              variant="accent"
              onClick={() => {
                if (!settings.is18PlusConfirmed) {
                  openAgeVerificationModal()
                } else {
                  setSetupVibeMode('18+')
                  onStartParty()
                }
              }}
              className="text-xs font-extrabold whitespace-nowrap shadow-lg shadow-rose-950/40"
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Start 18+ Mode 🔥</span>
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="primary"
                onClick={() => onStartParty()}
                className="text-xs font-extrabold whitespace-nowrap"
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Play 18+ Party</span>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setSetupVibeMode('standard')}
                className="text-xs font-bold text-[#A7A0AA] hover:text-white"
              >
                <span>Standard</span>
              </Button>
            </div>
          )}
        </div>
      </div>
      {/* Active Session Recovery Banner */}
      {hasActiveSession && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl p-5 sm:p-6 glass-panel-elevated border-2 border-rose-500/40 overflow-hidden shadow-2xl bg-gradient-to-r from-rose-950/40 via-purple-950/30 to-[#16121E]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-2xl shadow-lg shrink-0 animate-pulse">
                🔥
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-rose-300">
                  Party In Progress
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  Resume {ZONES[session.zoneId]?.name || 'Current'} Party
                </h3>
                <p className="text-xs text-[#A7A0AA] mt-0.5">
                  Round {session.currentRound} of {session.totalRounds > 0 ? session.totalRounds : 'Endless'} • Turn: {session.players[session.activePlayerIndex]?.name}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Button size="md" variant="accent" onClick={onResumeSession}>
                <RotateCcw className="w-4 h-4" />
                Resume Turn
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Hero Welcome & Quick Start Banner */}
      <div className="relative rounded-3xl p-6 sm:p-8 glass-panel border border-white/10 overflow-hidden bg-gradient-to-br from-[#1C1827] to-[#120F1A]">
        <div className="max-w-xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-rose-300">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Ready for Tonight</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Choose Your Game Zone.
          </h1>

          <p className="text-xs sm:text-sm text-[#A7A0AA] leading-relaxed">
            Every zone features unique mechanics, audio atmospheres, and over 50 hand-crafted original challenges. Pass one phone around the circle!
          </p>

          <div className="pt-2 flex items-center gap-3 flex-wrap">
            <Button size="lg" variant="primary" onClick={() => onStartParty()}>
              <Play className="w-4 h-4 fill-current" />
              <span>Start a Party</span>
            </Button>
            <Button size="lg" variant="glass" onClick={onOpenRules}>
              <BookOpen className="w-4 h-4" />
              <span>Party Rules</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Recently Played Zones Pills (if any) */}
      {recentZones.length > 0 && (
        <div className="space-y-2.5">
          <h3 className="text-xs font-black uppercase tracking-wider text-[#A7A0AA] px-1 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>Recently Played</span>
          </h3>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {recentZones.map((zid) => {
              const zone = ZONES[zid]
              if (!zone) return null
              return (
                <button
                  key={zid}
                  onClick={() => onSelectZoneDetail(zid)}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-2xl glass-panel border border-white/10 hover:border-white/20 text-xs font-bold text-white whitespace-nowrap transition-all cursor-pointer hover:bg-white/5 active:scale-95"
                >
                  <span className="text-base">{zone.emoji}</span>
                  <span>{zone.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* The 6 Game Zones Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              The 6 Game Zones
            </h2>
            <p className="text-xs text-[#A7A0AA]">
              Tap any zone to inspect categories or jump straight into gameplay.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {ZONE_LIST.map((zone) => (
            <ZoneCard
              key={zone.id}
              zone={zone}
              onClick={() => onSelectZoneDetail(zone.id)}
              onSelectAndPlay={() => onStartParty(zone.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
