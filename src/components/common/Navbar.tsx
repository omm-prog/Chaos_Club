import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX, Sparkles, BookOpen, Settings, Wifi, WifiOff } from 'lucide-react'
import { useGameStore } from '../../store/gameStore'
import { soundService } from '../../services/audio'

interface NavbarProps {
  onOpenRules: () => void
  onOpenSettings: () => void
  onLogoClick?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRules, onOpenSettings, onLogoClick }) => {
  const {
    settings,
    updateSettings,
    session,
    setupVibeMode,
    setSetupVibeMode,
    openAgeVerificationModal
  } = useGameStore()
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const toggleSound = () => {
    const next = !settings.enableSound
    updateSettings({ enableSound: next })
    if (next) soundService.playClick()
  }

  const toggleAmbient = () => {
    const next = !settings.enableAmbient
    updateSettings({ enableAmbient: next })
    if (next && session) {
      soundService.startAmbient(session.zoneId)
    } else {
      soundService.stopAmbient()
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-white/5 px-4 py-3 sm:px-6 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Name */}
        <motion.div
          whileTap={{ scale: 0.96 }}
          onClick={onLogoClick}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 via-pink-600 to-amber-500 shadow-md shadow-rose-900/40">
            <span className="text-lg">🎉</span>
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 opacity-0 group-hover:opacity-40 blur transition-opacity" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-lg tracking-tight bg-gradient-to-r from-white via-rose-100 to-pink-200 bg-clip-text text-transparent">
                CHAOS CLUB
              </span>
              <span className="px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 rounded border border-rose-500/30">
                PRO
              </span>
            </div>
            <p className="text-[10px] text-[#A7A0AA] tracking-wider uppercase font-medium hidden sm:block">
              Your Secrets. Your Rules.
            </p>
          </div>
        </motion.div>

        {/* Controls & Badges */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Upper Vibe Mode Quick Switcher */}
          <button
            onClick={() => {
              if (setupVibeMode === 'standard') {
                if (!settings.is18PlusConfirmed) {
                  openAgeVerificationModal()
                } else {
                  setSetupVibeMode('18+')
                }
              } else {
                setSetupVibeMode('standard')
              }
            }}
            title={setupVibeMode === '18+' ? 'Switch to Standard Mode' : 'Switch to After Hours 18+'}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-xs font-black transition-all cursor-pointer border ${
              setupVibeMode === '18+'
                ? 'bg-gradient-to-r from-rose-600/30 to-pink-600/30 border-rose-500/50 text-rose-300 hover:text-white shadow-lg shadow-rose-950/40 animate-pulse'
                : 'bg-white/5 border-white/10 text-[#A7A0AA] hover:text-white hover:border-white/20'
            }`}
          >
            <span>{setupVibeMode === '18+' ? '🔞' : '✨'}</span>
            <span className="text-[11px] font-black uppercase tracking-wider hidden xs:inline">
              {setupVibeMode === '18+' ? '18+ ACTIVE' : 'START 18+'}
            </span>
          </button>

          {/* Offline / Online Badge */}
          <div
            title={isOnline ? 'Online • Cached for offline play' : 'Offline Mode • 100% playable!'}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${
              isOnline
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                : 'bg-amber-500/15 text-amber-300 border-amber-500/30 animate-pulse'
            }`}
          >
            {isOnline ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
            <span className="text-[10px] uppercase tracking-wider font-bold hidden md:inline">
              {isOnline ? 'Offline Ready' : 'Offline'}
            </span>
          </div>

          {/* Ambient Music Toggle (when session active) */}
          {session && (
            <button
              onClick={toggleAmbient}
              title={settings.enableAmbient ? 'Mute Ambient Music' : 'Play Ambient Music'}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                settings.enableAmbient
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 shadow-sm shadow-rose-900/30'
                  : 'bg-white/5 text-[#A7A0AA] border-white/10 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" />
            </button>
          )}

          {/* Sound SFX Toggle */}
          <button
            onClick={toggleSound}
            title={settings.enableSound ? 'Mute Sound Effects' : 'Enable Sound Effects'}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              settings.enableSound
                ? 'bg-white/10 text-white border-white/20'
                : 'bg-white/5 text-[#6B6474] border-white/10'
            }`}
          >
            {settings.enableSound ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Rules Shortcut */}
          <button
            onClick={onOpenRules}
            title="Party Rules & Guidelines"
            className="p-2 rounded-xl bg-white/5 text-[#A7A0AA] border border-white/10 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
          </button>

          {/* Settings Shortcut */}
          <button
            onClick={onOpenSettings}
            title="Settings"
            className="p-2 rounded-xl bg-white/5 text-[#A7A0AA] border border-white/10 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
