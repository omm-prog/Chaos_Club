import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Play,
  Users,
  Clock,
  Sparkles,
  Shuffle,
  ShieldCheck,
  CheckCircle2,
  Flame
} from 'lucide-react'
import { ZoneId } from '../types/game'
import { ZONES, getPromptsForZone } from '../data/zones'
import { Button } from '../components/common/Button'
import { soundService } from '../services/audio'

interface ZoneDetailPageProps {
  zoneId: ZoneId
  onBack: () => void
  onPlayZone: (zoneId: ZoneId) => void
}

export const ZoneDetailPage: React.FC<ZoneDetailPageProps> = ({
  zoneId,
  onBack,
  onPlayZone
}) => {
  const zone = ZONES[zoneId]
  const allPrompts = getPromptsForZone(zoneId)

  // Interactive sample prompt preview
  const [sampleIndex, setSampleIndex] = useState(() => Math.floor(Math.random() * allPrompts.length))
  const samplePrompt = allPrompts[sampleIndex] || allPrompts[0]

  const handleShuffleSample = () => {
    soundService.playCardReveal(0.3)
    let nextIndex = Math.floor(Math.random() * allPrompts.length)
    if (nextIndex === sampleIndex && allPrompts.length > 1) {
      nextIndex = (nextIndex + 1) % allPrompts.length
    }
    setSampleIndex(nextIndex)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 space-y-6 sm:space-y-8">
      {/* Back to Zones Nav */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#A7A0AA] hover:text-white px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Game Zones</span>
        </button>
      </div>

      {/* Hero Zone Card */}
      <div
        className="relative rounded-3xl p-6 sm:p-10 glass-panel-elevated border border-white/20 overflow-hidden shadow-2xl"
        style={{
          boxShadow: zone.theme.cardGlow
        }}
      >
        {/* Glow Spheres */}
        <div
          className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{ backgroundColor: zone.theme.primary }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ backgroundColor: zone.theme.accent }}
        />

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl sm:text-5xl filter drop-shadow">{zone.emoji}</span>
            <span
              className="px-3 py-1 text-xs font-black rounded-full uppercase tracking-wider border shadow-sm"
              style={{
                backgroundColor: `${zone.theme.primary}30`,
                color: zone.theme.textAccent,
                borderColor: zone.theme.borderAccent
              }}
            >
              {zone.badge}
            </span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {zone.name}
            </h1>
            <p
              className="text-base sm:text-lg font-bold mt-1"
              style={{ color: zone.theme.textAccent }}
            >
              {zone.tagline}
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#F8F4F7]/80 leading-relaxed">
            {zone.description}
          </p>

          {/* Quick Metrics */}
          <div className="flex items-center gap-4 pt-2 text-xs font-bold text-white/80 flex-wrap">
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
              <Users className="w-4 h-4 text-white/60" />
              <span>{zone.recommendedPlayers}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
              <Clock className="w-4 h-4 text-white/60" />
              <span>{zone.estimatedDuration}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
              <Flame className="w-4 h-4 text-orange-400" />
              <span>{allPrompts.length} Original Prompts</span>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="pt-4">
            <Button
              size="xl"
              variant="primary"
              onClick={() => onPlayZone(zoneId)}
              glowColor={zone.theme.primary}
              className="w-full sm:w-auto shadow-2xl"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>Play {zone.name}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Included Categories & Game Modes */}
      <div className="space-y-3">
        <h3 className="text-xs font-black uppercase tracking-wider text-[#A7A0AA] px-1 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span>Included Game Modes & Categories ({zone.categories.length})</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {zone.categories.map((cat) => (
            <div
              key={cat}
              className="p-3.5 rounded-2xl glass-panel border border-white/10 flex items-center gap-2.5"
            >
              <CheckCircle2
                className="w-4 h-4 shrink-0"
                style={{ color: zone.theme.textAccent }}
              />
              <span className="text-xs font-bold text-white">{cat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Sample Prompt Preview */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-xs font-black uppercase tracking-wider text-[#A7A0AA]">
            Sample Prompt Preview
          </h3>
          <button
            onClick={handleShuffleSample}
            className="flex items-center gap-1.5 text-xs font-bold text-[#A7A0AA] hover:text-white transition-colors cursor-pointer"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Shuffle Another</span>
          </button>
        </div>

        {samplePrompt && (
          <motion.div
            key={samplePrompt.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl p-6 sm:p-7 glass-panel border border-white/15 bg-gradient-to-r from-white/5 to-white/[0.02]"
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span
                className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                style={{
                  backgroundColor: `${zone.theme.primary}25`,
                  color: zone.theme.textAccent,
                  borderColor: zone.theme.borderAccent
                }}
              >
                {samplePrompt.category}
              </span>
              <span className="text-[11px] font-bold text-[#A7A0AA] uppercase">
                Difficulty: {samplePrompt.difficulty}
              </span>
            </div>
            <p className="text-lg sm:text-xl font-black text-white italic py-2">
              “{samplePrompt.text}”
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
