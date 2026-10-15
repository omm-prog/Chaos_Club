import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, ShieldCheck, Heart, Sparkles, X, CheckCircle2 } from 'lucide-react'
import { Button } from '../components/common/Button'

interface RulesModalProps {
  isOpen: boolean
  onClose: () => void
}

export const RulesModal: React.FC<RulesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative w-full max-w-lg rounded-3xl p-6 sm:p-8 glass-panel-elevated border border-white/20 shadow-2xl z-10 bg-[#15121E] max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 text-white shadow-md">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-rose-400">
                  Party Code of Conduct
                </span>
                <h2 className="text-2xl font-black text-white">How to Play Chaos Club</h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#A7A0AA] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6 text-sm text-[#F8F4F7]">
            {/* The Golden Rule */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-950/40 to-pink-950/30 border border-rose-500/30">
              <div className="flex items-center gap-2 font-black text-rose-300 text-base mb-1.5">
                <Heart className="w-5 h-5 text-rose-400 fill-rose-400/20" />
                <span>The Chaos Club Golden Pledge</span>
              </div>
              <p className="text-xs text-[#A7A0AA] leading-relaxed">
                “Fun is mandatory, pressure is forbidden.” Every player has the absolute right to pass any question or decline any punishment at any time with zero judgment, shame, or penalty.
              </p>
            </div>

            {/* Step-by-Step Gameplay Loop */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-[#A7A0AA] mb-3">
                The 4-Step Turn Loop
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center font-black shrink-0">
                    1
                  </div>
                  <div>
                    <strong className="text-white">Pass the Phone:</strong> The screen locks with a privacy curtain showing the active player's name so other players can't peek ahead.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center font-black shrink-0">
                    2
                  </div>
                  <div>
                    <strong className="text-white">Tap to Reveal:</strong> When holding the phone, tap to unveil your challenge, question, or truth prompt.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-black shrink-0">
                    3
                  </div>
                  <div>
                    <strong className="text-white">Execute or Choose:</strong> Complete the prompt, answer honestly, or take an optional Chaos Punishment if skipping.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black shrink-0">
                    4
                  </div>
                  <div>
                    <strong className="text-white">Pass and Rotate:</strong> Turn advances smoothly to the next player. When all players have taken a turn, the round counter advances!
                  </div>
                </div>
              </div>
            </div>

            {/* Offline and Local Play */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs text-[#A7A0AA]">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Offline Ready:</strong> Chaos Club caches all prompt libraries, sound synths, and rules locally. You can play on a plane, by a campfire, or in a basement without cellular service!
              </div>
            </div>

            <Button size="lg" fullWidth variant="primary" onClick={onClose}>
              <CheckCircle2 className="w-4 h-4" />
              Got It, Let’s Play!
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
