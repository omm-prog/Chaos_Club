import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, RotateCcw, Flag, BookOpen, Volume2, VolumeX, Smartphone, X } from 'lucide-react'
import { Button } from '../common/Button'
import { useGameStore } from '../../store/gameStore'

interface PauseModalProps {
  isOpen: boolean
  onResume: () => void
  onRestart: () => void
  onEndEarly: () => void
  onOpenRules: () => void
}

export const PauseModal: React.FC<PauseModalProps> = ({
  isOpen,
  onResume,
  onRestart,
  onEndEarly,
  onOpenRules
}) => {
  const { settings, updateSettings } = useGameStore()
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onResume}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-sm rounded-3xl p-6 sm:p-7 glass-panel-elevated border border-white/20 shadow-2xl z-10 bg-[#16131F]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#A7A0AA]">
                Chaos Club
              </span>
              <h3 className="text-xl font-black text-white">Party Paused</h3>
            </div>
            <button
              onClick={onResume}
              className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#A7A0AA] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Settings Toggles */}
          <div className="grid grid-cols-2 gap-2 mb-5">
            <button
              onClick={() => updateSettings({ enableSound: !settings.enableSound })}
              className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                settings.enableSound
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                  : 'bg-white/5 text-[#6B6474] border-white/10'
              }`}
            >
              {settings.enableSound ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span>Sound {settings.enableSound ? 'On' : 'Off'}</span>
            </button>

            <button
              onClick={() => updateSettings({ enableHaptics: !settings.enableHaptics })}
              className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                settings.enableHaptics
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                  : 'bg-white/5 text-[#6B6474] border-white/10'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Haptics {settings.enableHaptics ? 'On' : 'Off'}</span>
            </button>
          </div>

          {/* Navigation Action Buttons */}
          <div className="space-y-2.5">
            <Button size="lg" fullWidth variant="primary" onClick={onResume}>
              <Play className="w-5 h-5 fill-current" />
              Resume Game
            </Button>

            <Button size="md" fullWidth variant="secondary" onClick={onOpenRules}>
              <BookOpen className="w-4 h-4" />
              Rules & Guidelines
            </Button>

            <Button
              size="md"
              fullWidth
              variant="secondary"
              onClick={onRestart}
            >
              <RotateCcw className="w-4 h-4" />
              Restart Round 1
            </Button>

            <Button
              size="md"
              fullWidth
              variant="danger"
              onClick={onEndEarly}
              className="mt-2"
            >
              <Flag className="w-4 h-4" />
              End Game & View Results
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
