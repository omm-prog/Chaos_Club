import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Volume2,
  VolumeX,
  Sparkles,
  Smartphone,
  EyeOff,
  Trash2,
  Users,
  ShieldCheck,
  X,
  AlertTriangle,
  RefreshCw
} from 'lucide-react'
import { useGameStore } from '../store/gameStore'
import { storageService } from '../services/storage'
import { Button } from '../components/common/Button'

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { settings, updateSettings, exitPartyToHome } = useGameStore()
  const [savedGroups, setSavedGroups] = useState(() => storageService.getSavedGroups())
  const [showConfirmClear, setShowConfirmClear] = useState(false)

  if (!isOpen) return null

  const handleDeleteGroup = (id: string) => {
    const updated = storageService.deleteGroup(id)
    setSavedGroups(updated)
  }

  const handleClearAllData = () => {
    storageService.clearAll()
    exitPartyToHome()
    setShowConfirmClear(false)
    onClose()
    window.location.reload()
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

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative w-full max-w-lg rounded-3xl p-6 sm:p-8 glass-panel-elevated border border-white/20 shadow-2xl z-10 bg-[#15121E] max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-rose-400">
                Preferences & Persistence
              </span>
              <h2 className="text-2xl font-black text-white">Settings</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#A7A0AA] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Audio & Haptic Controls */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-[#A7A0AA] mb-3">
                Sound & Feedback
              </h3>
              <div className="space-y-2.5">
                {/* Sound SFX */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-rose-500/15 text-rose-400">
                      {settings.enableSound ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Sound Effects</p>
                      <p className="text-xs text-[#A7A0AA]">Tactile clicks, card sweeps, fanfare</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.enableSound}
                    onChange={(e) => updateSettings({ enableSound: e.target.checked })}
                    className="w-5 h-5 accent-rose-500 rounded cursor-pointer"
                  />
                </div>

                {/* Ambient Drone */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-500/15 text-purple-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Zone Ambiance</p>
                      <p className="text-xs text-[#A7A0AA]">Subtle synthesizer background drone</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.enableAmbient}
                    onChange={(e) => updateSettings({ enableAmbient: e.target.checked })}
                    className="w-5 h-5 accent-purple-500 rounded cursor-pointer"
                  />
                </div>

                {/* Haptics */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-cyan-500/15 text-cyan-400">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Vibration Haptics</p>
                      <p className="text-xs text-[#A7A0AA]">Tactile vibration on mobile taps</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.enableHaptics}
                    onChange={(e) => updateSettings({ enableHaptics: e.target.checked })}
                    className="w-5 h-5 accent-cyan-500 rounded cursor-pointer"
                  />
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400">
                      <EyeOff className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Reduced Motion</p>
                      <p className="text-xs text-[#A7A0AA]">Calmer card transitions & less animations</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.reducedMotion}
                    onChange={(e) => updateSettings({ reducedMotion: e.target.checked })}
                    className="w-5 h-5 accent-amber-500 rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Saved Groups Manager */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#A7A0AA]">
                  Saved Player Groups ({savedGroups.length})
                </h3>
              </div>
              {savedGroups.length === 0 ? (
                <p className="text-xs text-[#6B6474] italic p-3 text-center bg-white/5 rounded-xl">
                  No saved player groups yet. Save groups during Party Setup!
                </p>
              ) : (
                <div className="space-y-2">
                  {savedGroups.map((grp) => (
                    <div
                      key={grp.id}
                      className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5 text-xs"
                    >
                      <div>
                        <p className="font-bold text-white">{grp.name}</p>
                        <p className="text-[#A7A0AA] text-[11px] mt-0.5">{grp.players.join(', ')}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteGroup(grp.id)}
                        title="Delete Group"
                        className="p-1.5 rounded-lg text-[#6B6474] hover:text-red-400 hover:bg-white/10 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Privacy & Storage Guarantee */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
              <div className="flex items-center gap-2 font-bold mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Private & Local</span>
              </div>
              <p className="text-emerald-300/80 leading-relaxed text-[11px]">
                Chaos Club never transmits player names, answers, or confessions to any server or cloud. Everything runs strictly on your device.
              </p>
            </div>

            {/* Danger Zone: Clear Stored Data */}
            <div className="pt-4 border-t border-white/10">
              {showConfirmClear ? (
                <div className="p-4 rounded-2xl bg-red-950/40 border border-red-500/40 space-y-3">
                  <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Confirm Data Reset?</span>
                  </div>
                  <p className="text-xs text-[#A7A0AA]">
                    This will clear saved preferences, active party sessions, and saved player groups.
                  </p>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="danger" onClick={handleClearAllData}>
                      Yes, Clear All
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setShowConfirmClear(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setShowConfirmClear(true)}
                  className="flex items-center gap-2 text-xs font-bold text-red-400 hover:text-red-300 transition-colors cursor-pointer py-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All Stored App Data</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
