import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Flame, Clock, Check, X, ShieldAlert } from 'lucide-react'
import { Punishment } from '../../types/game'
import { Button } from '../common/Button'

interface PunishmentCardProps {
  punishment: Punishment | null
  isOpen: boolean
  onAccept: () => void
  onDecline: () => void
  onClose: () => void
}

export const PunishmentCard: React.FC<PunishmentCardProps> = ({
  punishment,
  isOpen,
  onAccept,
  onDecline,
  onClose
}) => {
  if (!punishment || !isOpen) return null

  const intensityColor = {
    light: 'text-amber-300 bg-amber-500/20 border-amber-500/30',
    hilarious: 'text-pink-300 bg-pink-500/20 border-pink-500/30',
    wild: 'text-rose-300 bg-rose-500/20 border-rose-500/30'
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 30 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="relative w-full max-w-md rounded-3xl p-6 sm:p-8 glass-panel-elevated border-2 border-rose-500/50 shadow-2xl overflow-hidden z-10 bg-[#16121E]"
          style={{
            boxShadow: '0 0 50px -5px rgba(225, 29, 72, 0.45)'
          }}
        >
          {/* Pulsating background ambient glow */}
          <div className="absolute -top-24 -right-24 w-52 h-52 rounded-full bg-rose-600/30 blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-52 h-52 rounded-full bg-amber-600/20 blur-3xl pointer-events-none" />

          {/* Header Badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30">
                <Flame className="w-5 h-5 animate-bounce" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-rose-400">
                  Skipped Prompt Penalty
                </span>
                <h4 className="text-lg font-black text-white">Chaos Punishment!</h4>
              </div>
            </div>

            <span className={`px-2.5 py-1 text-[10px] font-extrabold uppercase rounded-full border ${intensityColor[punishment.intensity]}`}>
              {punishment.intensity}
            </span>
          </div>

          {/* Punishment Content */}
          <div className="my-6 text-center">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3 tracking-tight">
              {punishment.title}
            </h3>
            <p className="text-base sm:text-lg font-medium text-[#F8F4F7] bg-white/5 p-4 rounded-2xl border border-white/10 leading-relaxed">
              "{punishment.description}"
            </p>

            {punishment.duration && (
              <div className="flex items-center justify-center gap-1.5 mt-3 text-xs font-bold text-amber-300">
                <Clock className="w-4 h-4" />
                <span>Perform for {punishment.duration} seconds</span>
              </div>
            )}
          </div>

          {/* Safety Reminder */}
          <div className="flex items-center gap-2 text-[11px] text-[#A7A0AA] mb-6 justify-center">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400/80 shrink-0" />
            <span>Always optional & consensual. Pass anytime without shame.</span>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="secondary"
              size="md"
              onClick={onDecline}
              className="text-xs sm:text-sm"
            >
              <X className="w-4 h-4 text-[#A7A0AA]" />
              Decline (No shame!)
            </Button>

            <Button
              variant="accent"
              size="md"
              onClick={onAccept}
              className="text-xs sm:text-sm"
            >
              <Check className="w-4 h-4 text-black" />
              Do It (+5 pts)
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
