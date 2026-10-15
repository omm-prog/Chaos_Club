import React, { useMemo } from 'react'
import { ZoneId } from '../../types/game'
import { ZONES } from '../../data/zones'

interface ParticleBackgroundProps {
  zoneId?: ZoneId
}

export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ zoneId = 'after-dark' }) => {
  const zone = ZONES[zoneId] || ZONES['after-dark']

  // Stable random positions for subtle glowing orbs
  const orbs = useMemo(() => [
    { size: 280, x: '15%', y: '10%', opacity: 0.18, duration: 18, delay: 0 },
    { size: 360, x: '80%', y: '25%', opacity: 0.12, duration: 24, delay: 2 },
    { size: 320, x: '25%', y: '75%', opacity: 0.15, duration: 20, delay: 4 },
    { size: 240, x: '75%', y: '85%', opacity: 0.1, duration: 16, delay: 1 }
  ], [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic Zone Radial Glow */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{ background: zone.theme.bgGradient }}
      />

      {/* Floating Ambient Light Orbs */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl animate-pulse"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: orb.x,
            top: orb.y,
            backgroundColor: i % 2 === 0 ? zone.theme.primary : zone.theme.accent,
            opacity: orb.opacity,
            transform: 'translate(-50%, -50%)',
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.delay}s`,
            transition: 'background-color 1s ease'
          }}
        />
      ))}

      {/* Subtle Grain Overlay for cinematic texture */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  )
}
