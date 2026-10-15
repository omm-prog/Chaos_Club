import React from 'react'
import { motion } from 'framer-motion'
import { Users, Clock, ArrowRight } from 'lucide-react'
import { ZoneConfig } from '../../types/game'

interface ZoneCardProps {
  zone: ZoneConfig
  isSelected?: boolean
  onClick: () => void
  onSelectAndPlay?: () => void
}

export const ZoneCard: React.FC<ZoneCardProps> = ({
  zone,
  isSelected = false,
  onClick,
  onSelectAndPlay
}) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative rounded-3xl p-5 sm:p-6 overflow-hidden cursor-pointer transition-all duration-300
        glass-panel border
        ${isSelected ? 'border-white/40 ring-2 ring-white/20' : 'border-white/10 hover:border-white/25'}
      `}
      style={{
        boxShadow: isSelected ? zone.theme.cardGlow : undefined
      }}
    >
      {/* Zone Gradient Glow Accent */}
      <div
        className="absolute -top-24 -right-24 w-52 h-52 rounded-full blur-3xl opacity-35 pointer-events-none transition-transform"
        style={{ backgroundColor: zone.theme.primary }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-52 h-52 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: zone.theme.accent }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
        <div>
          {/* Top Row: Emoji & Badge */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-3xl filter drop-shadow">{zone.emoji}</span>
            <span
              className="px-2.5 py-1 text-[11px] font-bold rounded-full uppercase tracking-wider border"
              style={{
                backgroundColor: `${zone.theme.primary}25`,
                color: zone.theme.textAccent,
                borderColor: zone.theme.borderAccent
              }}
            >
              {zone.badge}
            </span>
          </div>

          {/* Zone Title & Tagline */}
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {zone.name}
          </h3>
          <p
            className="text-xs sm:text-sm font-semibold mt-1 mb-2.5"
            style={{ color: zone.theme.textAccent }}
          >
            {zone.tagline}
          </p>

          {/* Short description */}
          <p className="text-xs text-[#A7A0AA] line-clamp-2 leading-relaxed">
            {zone.description}
          </p>
        </div>

        {/* Bottom Metadata & CTA */}
        <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-[#A7A0AA]">
          <div className="flex items-center gap-3 font-medium">
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-white/60" />
              {zone.recommendedPlayers}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-white/60" />
              {zone.estimatedDuration}
            </span>
          </div>

          <div
            className="flex items-center gap-1 font-bold text-xs group-hover:translate-x-1 transition-transform"
            style={{ color: zone.theme.textAccent }}
            onClick={(e) => {
              if (onSelectAndPlay) {
                e.stopPropagation()
                onSelectAndPlay()
              }
            }}
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
