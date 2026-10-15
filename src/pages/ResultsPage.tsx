import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import {
  Trophy,
  RotateCcw,
  Compass,
  Home,
  Share2,
  Check,
  Award,
  Sparkles,
  Flame,
  Users
} from 'lucide-react'
import { ZONES } from '../data/zones'
import { useGameStore } from '../store/gameStore'
import { Button } from '../components/common/Button'
import { soundService } from '../services/audio'

interface ResultsPageProps {
  onPlayAgain: () => void
  onChooseZone: () => void
  onReturnHome: () => void
}

const SUPERLATIVES = [
  'The Chaos Maestro 🎭',
  'Fearless Daredevil 🔥',
  'The Secret Keeper 🔐',
  'Unfiltered Legend ✨',
  'The Romantic Soul 🖤',
  'The Mastermind 🧠',
  'The Wildcard 🃏',
  'Chief Vibe Officer 👑'
]

export const ResultsPage: React.FC<ResultsPageProps> = ({
  onPlayAgain,
  onChooseZone,
  onReturnHome
}) => {
  const { session, settings } = useGameStore()
  const [copiedShare, setCopiedShare] = useState(false)

  // Fire celebratory confetti on mount
  useEffect(() => {
    soundService.playComplete(0.7)
    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 }
      })
    } catch {
      // ignore
    }
  }, [])

  if (!session) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
        <p className="text-sm text-[#A7A0AA] mb-4">No completed party session found.</p>
        <Button variant="primary" onClick={onReturnHome}>
          Return Home
        </Button>
      </div>
    )
  }

  const activeZone = ZONES[session.zoneId] || ZONES['after-dark']
  const totalCompleted = session.players.reduce((sum, p) => sum + p.completedCount, 0)
  const totalSkipped = session.players.reduce((sum, p) => sum + p.skippedCount, 0)

  // Sort players by score / completed count
  const rankedPlayers = [...session.players].sort((a, b) => {
    if (settings.enableScoring) return b.score - a.score
    return b.completedCount - a.completedCount
  })

  const handleShare = () => {
    const text = `🎉 We just played Chaos Club in ${activeZone.name}!\n🔥 ${totalCompleted} challenges conquered in ${session.currentRound} rounds.\nPlay free at Chaos Club!`
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
      setCopiedShare(true)
      setTimeout(() => setCopiedShare(false), 3000)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 sm:py-8 space-y-6 sm:space-y-8">
      {/* Trophy & Zone Recap */}
      <div
        className="rounded-3xl p-6 sm:p-8 glass-panel-elevated border border-white/20 text-center relative overflow-hidden shadow-2xl"
        style={{
          boxShadow: activeZone.theme.cardGlow
        }}
      >
        <div
          className="absolute -top-24 -right-24 w-52 h-52 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ backgroundColor: activeZone.theme.primary }}
        />

        <motion.div
          initial={{ scale: 0.6, rotate: -15, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 via-orange-500 to-rose-600 flex items-center justify-center text-3xl sm:text-4xl shadow-xl shadow-amber-900/40 mb-4"
        >
          🏆
        </motion.div>

        <span
          className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border"
          style={{
            backgroundColor: `${activeZone.theme.primary}25`,
            color: activeZone.theme.textAccent,
            borderColor: activeZone.theme.borderAccent
          }}
        >
          {activeZone.emoji} {activeZone.name} Complete!
        </span>

        <h1 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-2 tracking-tight">
          Party Finished!
        </h1>
        <p className="text-xs sm:text-sm text-[#A7A0AA] max-w-md mx-auto">
          Secrets were spilled, challenges were crushed, and chaos was unleashed. Here is how your squad performed:
        </p>

        {/* Highlight Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-6 pt-6 border-t border-white/10 text-center">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-lg sm:text-2xl font-black text-white block">
              {session.currentRound}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#A7A0AA]">
              Rounds
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-lg sm:text-2xl font-black text-emerald-400 block">
              {totalCompleted}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#A7A0AA]">
              Completed
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-lg sm:text-2xl font-black text-amber-400 block">
              {totalSkipped}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#A7A0AA]">
              Skipped
            </span>
          </div>
        </div>
      </div>

      {/* Squad Leaderboard & Accolades */}
      <div className="space-y-3">
        <h3 className="text-xs font-black uppercase tracking-wider text-[#A7A0AA] px-1 flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-rose-400" />
          <span>Squad Accolades</span>
        </h3>

        <div className="space-y-2.5">
          {rankedPlayers.map((player, index) => {
            const superlative = SUPERLATIVES[index % SUPERLATIVES.length]
            return (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl glass-panel border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-sm border shrink-0"
                    style={{
                      backgroundColor: `${player.avatarColor}25`,
                      borderColor: player.avatarColor
                    }}
                  >
                    {player.avatarEmoji}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-black text-white leading-tight">
                      {player.name}
                    </h4>
                    <p className="text-[11px] font-bold text-rose-300">
                      {superlative}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  {settings.enableScoring && (
                    <span className="text-sm sm:text-base font-black text-white block">
                      {player.score} pts
                    </span>
                  )}
                  <span className="text-[11px] text-[#A7A0AA]">
                    {player.completedCount} done
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Share Results Button */}
      <div>
        <button
          onClick={handleShare}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl glass-panel border border-white/15 text-xs font-bold text-white hover:bg-white/10 transition-all cursor-pointer active:scale-98"
        >
          {copiedShare ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300">Copied Party Summary to Clipboard!</span>
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4 text-rose-400" />
              <span>Share Party Summary with Friends</span>
            </>
          )}
        </button>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-2">
        <Button
          size="xl"
          fullWidth
          variant="primary"
          onClick={onPlayAgain}
          className="shadow-xl"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Play Again (Same Players)</span>
        </Button>

        <div className="grid grid-cols-2 gap-3">
          <Button
            size="lg"
            variant="secondary"
            onClick={onChooseZone}
          >
            <Compass className="w-4 h-4" />
            <span>Another Zone</span>
          </Button>

          <Button
            size="lg"
            variant="ghost"
            onClick={onReturnHome}
            className="border border-white/10"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
