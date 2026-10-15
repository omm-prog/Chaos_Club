import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Flame, ShieldAlert, Check, X } from 'lucide-react'
import { Button } from './Button'

interface AgeVerificationModalProps {
  isOpen: boolean
  onConfirm: () => void
  onCancel: () => void
}

export const AgeVerificationModal: React.FC<AgeVerificationModalProps> = ({
  isOpen,
  onConfirm,
  onCancel
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
          onClick={onCancel}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-md rounded-3xl p-6 sm:p-8 glass-panel-elevated border-2 border-rose-500/50 shadow-2xl z-10 bg-[#16121E] overflow-hidden"
          style={{
            boxShadow: '0 0 50px -5px rgba(225, 29, 72, 0.4)'
          }}
        >
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-52 h-52 rounded-full bg-rose-600/25 blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-2xl shadow-lg border border-rose-400/30">
              🔞
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-rose-400">
                Age Verification Required
              </span>
              <h3 className="text-xl font-black text-white">Enter After Hours (18+)?</h3>
            </div>
          </div>

          {/* Warning & Description */}
          <div className="space-y-3 my-5 text-xs text-[#F8F4F7]/90 leading-relaxed">
            <p className="p-3.5 rounded-2xl bg-rose-950/40 border border-rose-500/30 text-rose-200">
              You are unlocking <strong>Chaos Club After Hours</strong> — featuring 312 spicy, suggestive, adult-themed truths and bold flirty challenges intended for adult audiences.
            </p>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-[#A7A0AA]">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Consensual Play:</strong> Participation in any prompt or dare is always 100% voluntary. Any player can pass without shame or penalty.
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5 pt-2">
            <Button
              size="lg"
              fullWidth
              variant="primary"
              onClick={onConfirm}
              className="shadow-xl shadow-rose-950/60 font-black"
            >
              <Check className="w-5 h-5 stroke-[2.5]" />
              <span>I am 18 or older — Enter 18+</span>
            </Button>

            <Button
              size="md"
              fullWidth
              variant="ghost"
              onClick={onCancel}
              className="text-xs text-[#A7A0AA] hover:text-white"
            >
              <X className="w-4 h-4" />
              <span>Keep Standard Mode (All Ages)</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
