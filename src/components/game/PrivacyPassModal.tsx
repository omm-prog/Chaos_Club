import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Smartphone, Eye, Sparkles } from 'lucide-react'
import { Player, ZoneConfig } from '../../types/game'
import { Button } from '../common/Button'

interface PrivacyPassModalProps {
  player: Player
  round: number
  totalRounds: number
  zone: ZoneConfig
  isOpen: boolean
  onReveal: () => void
}

export const PrivacyPassModal: React.FC<PrivacyPassModalProps> = ({
  player,
  round,
  totalRounds,
  zone,
  isOpen,
  onReveal
}) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-[#0B0A0E]/95 backdrop-blur-xl"
        />

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 26 }}
          className="relative w-full max-w-sm rounded-3xl p-6 sm:p-8 glass-panel-elevated border border-white/15 shadow-2xl text-center z-10 overflow-hidden"
          style={{
            boxShadow: zone.theme.cardGlow
          }}
        >
          {/* Ambient Glow */}
          <div
            className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ backgroundColor: player.avatarColor }}
          />

          {/* Privacy Icon */}
          <div className="flex justify-center mb-5">
            <div className="relative">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-xl border-2"
                style={{
                  backgroundColor: `${player.avatarColor}25`,
                  borderColor: player.avatarColor
                }}
              >
                {player.avatarEmoji}
              </div>
              <div className="absolute -bottom-2 -right-2 p-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white">
                <Smartphone className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Round Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-[#A7A0AA] mb-2">
            <span>Round {round} {totalRounds > 0 ? `of ${totalRounds}` : ''}</span>
            <span>•</span>
            <span style={{ color: zone.theme.textAccent }}>{zone.name}</span>
          </div>

          {/* Player Turn Callout */}
          <p className="text-xs font-semibold text-[#A7A0AA] uppercase tracking-widest mt-1">
            Pass the phone to
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 mb-2 tracking-tight">
            {player.name}
          </h2>
          <p className="text-xs text-[#A7A0AA] mb-7">
            Tap below when you're holding the phone to reveal your secret prompt!
          </p>

          {/* Action CTA */}
          <Button
            size="lg"
            fullWidth
            onClick={onReveal}
            variant="primary"
            className="shadow-xl"
            glowColor={player.avatarColor}
          >
            <Eye className="w-5 h-5" />
            Tap to Reveal Prompt
          </Button>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
