import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ZoneId } from './types/game'
import { useGameStore } from './store/gameStore'
import { Navbar } from './components/common/Navbar'
import { ParticleBackground } from './components/common/ParticleBackground'
import { PwaInstallPrompt } from './components/common/PwaInstallPrompt'
import { SplashPage } from './pages/SplashPage'
import { HomePage } from './pages/HomePage'
import { ZoneDetailPage } from './pages/ZoneDetailPage'
import { SetupPage } from './pages/SetupPage'
import { GamePage } from './pages/GamePage'
import { ResultsPage } from './pages/ResultsPage'
import { SettingsModal } from './pages/SettingsModal'
import { RulesModal } from './pages/RulesModal'
import { AgeVerificationModal } from './components/common/AgeVerificationModal'

type ViewMode = 'splash' | 'home' | 'zone-detail' | 'setup' | 'game' | 'results'

export const App: React.FC = () => {
  const {
    session,
    setSetupZoneId,
    resumeSavedSession,
    playAgainSamePlayers,
    exitPartyToHome,
    isAgeVerificationModalOpen,
    confirmAgeVerification,
    closeAgeVerificationModal
  } = useGameStore()
  
  // Check if active session or visited before
  const [currentView, setCurrentView] = useState<ViewMode>(() => {
    if (session && !session.isGameOver) return 'home'
    const visited = localStorage.getItem('chaos_club_has_visited')
    return visited ? 'home' : 'splash'
  })

  const [selectedDetailZone, setSelectedDetailZone] = useState<ZoneId>('after-dark')
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isRulesOpen, setIsRulesOpen] = useState(false)

  // Mark as visited when leaving splash
  const handleLeaveSplash = (nextView: ViewMode) => {
    localStorage.setItem('chaos_club_has_visited', 'true')
    setCurrentView(nextView)
  }

  const handleStartPartyFromHome = (preselectedZone?: ZoneId) => {
    if (preselectedZone) {
      setSetupZoneId(preselectedZone)
    }
    setCurrentView('setup')
  }

  const handleSelectZoneDetail = (zoneId: ZoneId) => {
    setSelectedDetailZone(zoneId)
    setCurrentView('zone-detail')
  }

  const handlePlayZoneFromDetail = (zoneId: ZoneId) => {
    setSetupZoneId(zoneId)
    setCurrentView('setup')
  }

  const handleResumeSession = () => {
    const resumed = resumeSavedSession()
    if (resumed) {
      setCurrentView('game')
    }
  }

  const handlePartyStarted = () => {
    setCurrentView('game')
  }

  const handleGameEnd = () => {
    setCurrentView('results')
  }

  const handlePlayAgain = () => {
    playAgainSamePlayers()
    setCurrentView('game')
  }

  const handleChooseAnotherZone = () => {
    setCurrentView('home')
  }

  const handleReturnHome = () => {
    exitPartyToHome()
    setCurrentView('home')
  }

  // Active theme zone
  const activeZoneId = session?.zoneId || selectedDetailZone || 'after-dark'

  return (
    <div className="min-h-screen bg-[#0B0A0E] text-[#F8F4F7] flex flex-col relative selection:bg-rose-500/30 selection:text-white">
      {/* Dynamic Background Atmosphere */}
      <ParticleBackground zoneId={activeZoneId} />

      {/* Main Top Navigation (hidden during active gameplay for full immersion) */}
      {currentView !== 'splash' && currentView !== 'game' && (
        <Navbar
          onOpenRules={() => setIsRulesOpen(true)}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onLogoClick={() => setCurrentView('home')}
        />
      )}

      {/* Content View Container */}
      <main className="flex-1 relative z-10 w-full overflow-x-hidden">
        <AnimatePresence mode="wait">
          {currentView === 'splash' && (
            <motion.div
              key="splash"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              <SplashPage
                onStartParty={() => handleLeaveSplash('setup')}
                onExploreZones={() => handleLeaveSplash('home')}
              />
            </motion.div>
          )}

          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <HomePage
                onStartParty={handleStartPartyFromHome}
                onSelectZoneDetail={handleSelectZoneDetail}
                onResumeSession={handleResumeSession}
                onOpenRules={() => setIsRulesOpen(true)}
              />
            </motion.div>
          )}

          {currentView === 'zone-detail' && (
            <motion.div
              key="zone-detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <ZoneDetailPage
                zoneId={selectedDetailZone}
                onBack={() => setCurrentView('home')}
                onPlayZone={handlePlayZoneFromDetail}
              />
            </motion.div>
          )}

          {currentView === 'setup' && (
            <motion.div
              key="setup"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              <SetupPage
                onBack={() => setCurrentView('home')}
                onPartyStarted={handlePartyStarted}
              />
            </motion.div>
          )}

          {currentView === 'game' && (
            <motion.div
              key="game"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <GamePage
                onGameEnd={handleGameEnd}
                onOpenRules={() => setIsRulesOpen(true)}
              />
            </motion.div>
          )}

          {currentView === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <ResultsPage
                onPlayAgain={handlePlayAgain}
                onChooseZone={handleChooseAnotherZone}
                onReturnHome={handleReturnHome}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Modals */}
      <AgeVerificationModal
        isOpen={isAgeVerificationModalOpen}
        onConfirm={confirmAgeVerification}
        onCancel={closeAgeVerificationModal}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

      <RulesModal
        isOpen={isRulesOpen}
        onClose={() => setIsRulesOpen(false)}
      />

      {/* PWA Offline Installation Prompt */}
      <PwaInstallPrompt />
    </div>
  )
}

export default App
