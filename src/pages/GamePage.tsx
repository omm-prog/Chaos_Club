import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import {
  Pause,
  Check,
  SkipForward,
  CornerDownRight,
  Sparkles,
  Users,
  Award,
  Flame,
  RotateCcw
} from 'lucide-react'
import { ZONES } from '../data/zones'
import { useGameStore } from '../store/gameStore'
import { PromptCard } from '../components/cards/PromptCard'
import { PrivacyPassModal } from '../components/game/PrivacyPassModal'
import { TimerBar } from '../components/game/TimerBar'
import { PauseModal } from '../components/game/PauseModal'
import { PunishmentCard } from '../components/cards/PunishmentCard'
import { Button } from '../components/common/Button'

interface GamePageProps {
  onGameEnd: () => void
  onOpenRules: () => void
}

export const GamePage: React.FC<GamePageProps> = ({ onGameEnd, onOpenRules }) => {
  const {
    session,
    settings,
    timeRemaining,
    isTimerRunning,
    activePunishment,
    isPunishmentModalOpen,
    isPauseModalOpen,
    revealPrompt,
    completePrompt,
    skipPrompt,
    passPrompt,
    swapPrompt,
    acceptPunishment,
    declinePunishment,
    closePunishmentModal,
    tickTimer,
    togglePauseModal,
    endPartyEarly,
    startNewParty
  } = useGameStore()

  // Timer interval hook
  useEffect(() => {
    if (!isTimerRunning) return
    const interval = setInterval(() => {
      tickTimer()
    }, 1000)
    return () => clearInterval(interval)
  }, [isTimerRunning, tickTimer])

  // Trigger results transition when isGameOver is true
  useEffect(() => {
    if (session?.isGameOver) {
      onGameEnd()
    }
  }, [session?.isGameOver, onGameEnd])

  if (!session || !session.currentPrompt) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
        <p className="text-sm text-[#A7A0AA] mb-4">No active party in progress.</p>
        <Button variant="primary" onClick={onGameEnd}>
          Return to Hub
        </Button>
      </div>
    )
  }

  const activeZone = ZONES[session.zoneId] || ZONES['after-dark']
  const activePlayer = session.players[session.activePlayerIndex] || session.players[0]

  // Celebration confetti trigger
  const handleComplete = () => {
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: [activeZone.theme.primary, activeZone.theme.accent, '#FFFFFF']
      })
    } catch {
      // ignore
    }
    completePrompt()
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-4 sm:py-6 space-y-4">
      {/* Top Header: Zone Badge, Round Progress & Pause */}
      <div className="flex items-center justify-between gap-2 pb-2">
        {/* Zone Badge */}
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl">{activeZone.emoji}</span>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xs sm:text-sm font-black text-white leading-tight">
                {activeZone.name}
              </h2>
              {session.vibeMode === '18+' && (
                <span className="px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-rose-600/30 text-rose-300 border border-rose-500/40">
                  🔞 18+
                </span>
              )}
            </div>
            <p className="text-[10px] text-[#A7A0AA] font-bold">
              Round {session.currentRound} {session.totalRounds > 0 ? `of ${session.totalRounds}` : '(Endless)'}
            </p>
          </div>
        </div>

        {/* Pause Button */}
        <button
          onClick={() => togglePauseModal(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel border border-white/10 hover:border-white/20 text-xs font-bold text-white transition-all cursor-pointer active:scale-95"
        >
          <Pause className="w-3.5 h-3.5" />
          <span>Pause</span>
        </button>
      </div>

      {/* Active Player Card */}
      <div className="flex items-center justify-between p-3.5 rounded-2xl glass-panel border border-white/10">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-md border"
            style={{
              backgroundColor: `${activePlayer.avatarColor}25`,
              borderColor: activePlayer.avatarColor
            }}
          >
            {activePlayer.avatarEmoji}
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-[#A7A0AA]">
              Current Turn
            </span>
            <h3 className="text-base sm:text-lg font-black text-white leading-tight">
              {activePlayer.name}
            </h3>
          </div>
        </div>

        {/* Player stats / score */}
        {settings.enableScoring && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-rose-300">
            <Award className="w-4 h-4 text-rose-400" />
            <span>{activePlayer.score} pts</span>
          </div>
        )}
      </div>

      {/* Timer Bar (if timer is enabled) */}
      <TimerBar
        timeRemaining={timeRemaining}
        totalDuration={session.currentPrompt.duration || settings.timerDuration}
        isRunning={isTimerRunning}
      />

      {/* Animated Prompt Card */}
      <PromptCard
        prompt={session.currentPrompt}
        zone={activeZone}
        onSwapPrompt={swapPrompt}
      />

      {/* Gameplay Action Bar */}
      <div className="space-y-2.5 pt-2">
        {/* Main "Complete Challenge" Button */}
        <Button
          size="xl"
          fullWidth
          variant="primary"
          onClick={handleComplete}
          glowColor={activeZone.theme.primary}
          className="shadow-2xl shadow-rose-950/50 text-lg font-black"
        >
          <Check className="w-6 h-6 stroke-[3]" />
          <span>Complete Challenge</span>
        </Button>

        {/* Secondary Actions: Skip & Pass */}
        <div className="grid grid-cols-2 gap-2.5">
          <Button
            size="lg"
            variant="secondary"
            onClick={skipPrompt}
            className="text-xs sm:text-sm font-bold"
          >
            <SkipForward className="w-4 h-4 text-amber-400" />
            <span>Skip {settings.enablePunishments ? '(Penalty)' : ''}</span>
          </Button>

          <Button
            size="lg"
            variant="ghost"
            onClick={passPrompt}
            className="text-xs sm:text-sm font-bold border border-white/10 hover:bg-white/5"
          >
            <CornerDownRight className="w-4 h-4 text-[#A7A0AA]" />
            <span>Pass (Safe)</span>
          </Button>
        </div>
      </div>

      {/* Privacy Cover Modal ("Pass the phone to [Player]") */}
      <PrivacyPassModal
        player={activePlayer}
        round={session.currentRound}
        totalRounds={session.totalRounds}
        zone={activeZone}
        isOpen={session.isPrivacyCoverActive}
        onReveal={revealPrompt}
      />

      {/* Random Punishment Modal (when player skips with consequences on) */}
      <PunishmentCard
        punishment={activePunishment}
        isOpen={isPunishmentModalOpen}
        onAccept={acceptPunishment}
        onDecline={declinePunishment}
        onClose={closePunishmentModal}
      />

      {/* Pause Menu Modal */}
      <PauseModal
        isOpen={isPauseModalOpen}
        onResume={() => togglePauseModal(false)}
        onRestart={() => {
          togglePauseModal(false)
          startNewParty()
        }}
        onEndEarly={endPartyEarly}
        onOpenRules={onOpenRules}
      />
    </div>
  )
}
