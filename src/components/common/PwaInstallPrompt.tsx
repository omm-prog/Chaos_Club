import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, X, Share2, PlusSquare } from 'lucide-react'
import { Button } from './Button'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export const PwaInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check if running in standalone mode (already installed)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true
    if (isStandalone) return

    // iOS detection
    const isIosDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as unknown as { MSStream?: unknown }).MSStream
    setIsIOS(isIosDevice)

    // Android/Desktop prompt
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      // Show prompt after 3 seconds of engagement
      setTimeout(() => setShowPrompt(true), 3000)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstall)
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall)
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    await deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      setShowPrompt(false)
    }
    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    setIsDismissed(true)
  }

  if (isDismissed) return null

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto"
        >
          <div className="glass-panel-elevated p-4 rounded-2xl border border-rose-500/30 flex items-start justify-between gap-3 shadow-2xl bg-[#171420]/95">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center shrink-0 shadow-md">
                <span className="text-xl">🎉</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Install Chaos Club</h4>
                <p className="text-xs text-[#A7A0AA] mt-0.5 leading-relaxed">
                  {isIOS
                    ? 'Tap Share below and choose "Add to Home Screen" for instant fullscreen offline play!'
                    : 'Install app on your phone for faster launches and 100% offline party mode.'}
                </p>

                {isIOS ? (
                  <div className="flex items-center gap-2 mt-2 text-[11px] font-semibold text-rose-300">
                    <Share2 className="w-3.5 h-3.5" /> Tap Share <PlusSquare className="w-3.5 h-3.5 ml-1" /> Add to Home Screen
                  </div>
                ) : (
                  <div className="mt-2.5">
                    <Button size="sm" variant="accent" onClick={handleInstallClick}>
                      <Download className="w-3.5 h-3.5" />
                      Install Now
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={handleDismiss}
              className="p-1 rounded-lg text-[#A7A0AA] hover:text-white hover:bg-white/10 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
