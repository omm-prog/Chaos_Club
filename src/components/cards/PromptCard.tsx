import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Flame, Award, RefreshCw } from 'lucide-react'
import { Prompt, ZoneConfig } from '../../types/game'

interface PromptCardProps {
  prompt: Prompt
  zone: ZoneConfig
  onSwapPrompt?: () => void
  isSwappingDisabled?: boolean
}

export const PromptCard: React.FC<PromptCardProps> = ({
  prompt,
  zone,
  onSwapPrompt,
  isSwappingDisabled = false
}) => {
  const difficultyBadge = {
    mild: { text: 'Mild', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
    spicy: { text: 'Spicy 🔥', color: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
    chaos: { text: 'Chaos ⚡', color: 'bg-rose-500/20 text-rose-300 border-rose-500/30' }
  }

  const diff = difficultyBadge[prompt.difficulty] || difficultyBadge.mild

  return (
    <motion.div
      key={prompt.id}
      initial={{ opacity: 0, scale: 0.94, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: -15 }}
      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      className="relative w-full rounded-3xl p-6 sm:p-8 glass-panel-elevated border border-white/15 overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[360px]"
      style={{
        boxShadow: zone.theme.cardGlow
      }}
    >
      {/* Background Ambience Highlights */}
      <div
        className="absolute -top-32 -left-32 w-64 h-64 rounded-full blur-3xl opacity-35 pointer-events-none"
        style={{ backgroundColor: zone.theme.primary }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ backgroundColor: zone.theme.accent }}
      />

      {/* Top Bar: Category & Difficulty */}
      <div className="relative z-10 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          {/* Category Badge */}
          <span
            className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border shadow-sm"
            style={{
              backgroundColor: `${zone.theme.primary}30`,
              color: zone.theme.textAccent,
              borderColor: zone.theme.borderAccent
            }}
          >
            {prompt.category}
          </span>

          {/* Difficulty Badge */}
          <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${diff.color}`}>
            {diff.text}
          </span>

          {/* 18+ Mature Badge */}
          {prompt.vibeMode === '18+' && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-rose-600/30 text-rose-300 border border-rose-500/40 shadow-sm shadow-rose-950/40">
              🔞 18+
            </span>
          )}
        </div>

        {/* Duration / Points info */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#A7A0AA]">
          {prompt.duration && (
            <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              {prompt.duration}s
            </span>
          )}
          {prompt.scoring && (
            <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
              <Award className="w-3.5 h-3.5 text-rose-400" />
              +{prompt.scoring.points} pts
            </span>
          )}
        </div>
      </div>

      {/* Main Prompt Text */}
      <div className="relative z-10 my-auto py-6">
        <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F8F4F7] leading-snug sm:leading-relaxed text-center px-1 sm:px-4 tracking-tight drop-shadow-md">
          “{prompt.text}”
        </p>
      </div>

      {/* Bottom Row: Tags & Swap Prompt Button */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          {prompt.tags?.map((tag) => (
            <span key={tag} className="text-[10px] text-[#A7A0AA] bg-white/5 px-2 py-0.5 rounded-md">
              #{tag}
            </span>
          ))}
        </div>

        {onSwapPrompt && (
          <button
            onClick={onSwapPrompt}
            disabled={isSwappingDisabled}
            title="Draw another prompt for this category"
            className="flex items-center gap-1.5 text-xs font-bold text-[#A7A0AA] hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-xl border border-white/10 transition-all cursor-pointer active:scale-95"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reroll</span>
          </button>
        )}
      </div>
    </motion.div>
  )
}
