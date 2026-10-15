import React from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Play,
  Compass,
  ShieldCheck,
  Flame,
  CheckCircle2,
  Lock,
  ChevronRight,
  BookOpen
} from 'lucide-react'
import { Button } from '../components/common/Button'
import { useGameStore } from '../store/gameStore'
import { getTotalPromptCounts } from '../data/zones'

interface SplashPageProps {
  onStartParty: () => void
  onExploreZones: () => void
}

export const SplashPage: React.FC<SplashPageProps> = ({
  onStartParty,
  onExploreZones
}) => {
  const {
    setupVibeMode,
    setSetupVibeMode,
    settings,
    openAgeVerificationModal
  } = useGameStore()

  const counts = getTotalPromptCounts()

  const handleStartStandard = () => {
    setSetupVibeMode('standard')
    onStartParty()
  }

  const handleStart18Plus = () => {
    if (!settings.is18PlusConfirmed) {
      openAgeVerificationModal()
    } else {
      setSetupVibeMode('18+')
      onStartParty()
    }
  }

  return (
    <div className="relative min-h-[calc(100vh-65px)] flex flex-col items-center justify-center px-4 py-8 text-center max-w-2xl mx-auto space-y-8">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-tr from-rose-600/30 via-pink-600/20 to-amber-500/20 blur-3xl pointer-events-none" />

      {/* Upper Side Quick 18+ Starter Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md mx-auto"
      >
        <button
          onClick={handleStart18Plus}
          className="w-full flex items-center justify-between px-4 py-2.5 rounded-2xl glass-panel-elevated border border-rose-500/40 hover:border-rose-400 bg-gradient-to-r from-rose-950/60 via-purple-950/40 to-[#181322] shadow-lg shadow-rose-950/30 cursor-pointer group transition-all"
        >
          <div className="flex items-center gap-2.5 text-left">
            <span className="text-xl">🔞</span>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black text-rose-300 group-hover:text-white uppercase tracking-wider">
                  Quick Start: After Hours 18+
                </span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-black bg-rose-600/40 text-rose-200 border border-rose-500/40">
                  NEW
                </span>
              </div>
              <p className="text-[10px] text-[#A7A0AA]">
                312 bolder, mature & flirty challenges • Age confirmation required
              </p>
            </div>
          </div>
          <Flame className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform shrink-0" />
        </button>
      </motion.div>

      {/* Brand Hero Icon */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative"
      >
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-rose-600 via-pink-600 to-amber-500 flex items-center justify-center text-5xl sm:text-6xl shadow-2xl shadow-rose-900/50 border border-white/20">
          🎉
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          className="absolute -inset-2 rounded-3xl border border-dashed border-rose-400/30 pointer-events-none"
        />
      </motion.div>

      {/* App Title & Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-2.5"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-black uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Mobile-First Party Experience</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
          CHAOS CLUB
        </h1>

        <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-rose-200 via-pink-200 to-amber-200 bg-clip-text text-transparent italic">
          “Your Secrets. Your Rules. Your Chaos.”
        </p>

        <p className="text-xs sm:text-sm text-[#A7A0AA] max-w-lg mx-auto leading-relaxed pt-1">
          Truth, Dare, unfiltered confessions, spicy romance, and absurd challenges. Pass one phone around the circle — zero accounts or downloads needed.
        </p>
      </motion.div>

      {/* CHOOSE YOUR VIBE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full space-y-3.5 text-left"
      >
        <div className="text-center sm:text-left flex items-center justify-between px-1">
          <div>
            <h2 className="text-base sm:text-lg font-black text-white tracking-tight flex items-center gap-2">
              <span>Choose your vibe</span>
            </h2>
            <p className="text-xs text-[#A7A0AA]">
              Select your party mood before jumping into the challenge zones.
            </p>
          </div>
          <span className="text-[11px] font-bold text-rose-300 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-full hidden sm:inline-block">
            {counts.total} Original Prompts
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* 1. Standard Mode Card */}
          <div
            onClick={() => setSetupVibeMode('standard')}
            className={`p-5 rounded-3xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
              setupVibeMode === 'standard'
                ? 'glass-panel-elevated border-emerald-500/50 shadow-lg shadow-emerald-950/30 ring-2 ring-emerald-500/20'
                : 'glass-panel border-white/10 hover:border-white/25 opacity-85 hover:opacity-100'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl">✨</span>
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {counts.standard} Prompts
                </span>
              </div>
              <h3 className="text-lg font-black text-white">Standard Mode</h3>
              <p className="text-xs text-[#A7A0AA] leading-relaxed">
                Funny, friendly, romantic, and suitable for general audiences.
              </p>
            </div>

            <div className="pt-4">
              <Button
                size="md"
                fullWidth
                variant={setupVibeMode === 'standard' ? 'primary' : 'glass'}
                onClick={(e) => {
                  e.stopPropagation()
                  handleStartStandard()
                }}
                className="font-bold text-xs"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Play Standard Mode</span>
              </Button>
            </div>
          </div>

          {/* 2. After Hours 18+ Card */}
          <div
            onClick={() => {
              if (!settings.is18PlusConfirmed) {
                openAgeVerificationModal()
              } else {
                setSetupVibeMode('18+')
              }
            }}
            className={`p-5 rounded-3xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
              setupVibeMode === '18+'
                ? 'glass-panel-elevated border-rose-500/60 shadow-lg shadow-rose-950/40 ring-2 ring-rose-500/30 bg-gradient-to-b from-rose-950/30 to-[#181322]'
                : 'glass-panel border-rose-500/25 hover:border-rose-500/50 opacity-90 hover:opacity-100'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl">🔞</span>
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1">
                  <Flame className="w-3 h-3 text-rose-400" />
                  <span>{counts.afterHours18} New Prompts</span>
                </span>
              </div>
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <span>After Hours 18+</span>
              </h3>
              <p className="text-xs text-[#A7A0AA] leading-relaxed">
                Bolder, more mature, flirty, suggestive, and adult-oriented.
              </p>
              <p className="text-[10px] text-amber-300/90 bg-amber-500/10 p-2 rounded-xl border border-amber-500/20 leading-tight">
                Requires 18+ confirmation. All dares are 100% voluntary with safe pass.
              </p>
            </div>

            <div className="pt-4">
              <Button
                size="md"
                fullWidth
                variant={setupVibeMode === '18+' ? 'accent' : 'secondary'}
                onClick={(e) => {
                  e.stopPropagation()
                  handleStart18Plus()
                }}
                className="font-bold text-xs"
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Start After Hours 18+</span>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CONTENT LIBRARY EXPANSION TABLE / OVERVIEW */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full rounded-3xl p-4 sm:p-5 glass-panel border border-white/10 text-left space-y-3"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-wider text-rose-300">
            Content Library Overview
          </span>
          <span className="text-xs font-bold text-white bg-white/10 px-2.5 py-0.5 rounded-full">
            {counts.total} Total Handcrafted Prompts
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-[10px] uppercase font-bold text-[#A7A0AA] block mb-1">
              Standard Mode
            </span>
            <span className="text-lg font-black text-white">{counts.standard}</span>
            <span className="text-[10px] text-emerald-400 block mt-0.5">All Audiences</span>
          </div>

          <div className="p-3 rounded-2xl bg-rose-950/30 border border-rose-500/20">
            <span className="text-[10px] uppercase font-bold text-rose-300 block mb-1">
              After Hours 18+
            </span>
            <span className="text-lg font-black text-rose-200">+{counts.afterHours18}</span>
            <span className="text-[10px] text-rose-400 block mt-0.5">Spicy & Mature</span>
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] uppercase font-bold text-amber-300 block mb-1">
              Total Library
            </span>
            <span className="text-lg font-black text-amber-200">{counts.total}</span>
            <span className="text-[10px] text-[#A7A0AA] block mt-0.5">Across 6 Zones</span>
          </div>
        </div>
      </motion.div>

      {/* Secondary Exploration CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full space-y-3 max-w-sm"
      >
        <Button
          size="lg"
          fullWidth
          variant="secondary"
          onClick={onExploreZones}
        >
          <Compass className="w-4 h-4" />
          <span>Explore 6 Game Zones</span>
        </Button>
      </motion.div>

      {/* Offline Ready Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="flex items-center gap-2 text-xs text-[#A7A0AA] bg-white/5 px-4 py-2 rounded-full border border-white/5"
      >
        <ShieldCheck className="w-4 h-4 text-emerald-400" />
        <span>Works 100% offline once loaded • Local multiplayer</span>
      </motion.div>
    </div>
  )
}
