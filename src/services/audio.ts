/**
 * Chaos Club Procedural Web Audio API Sound Synthesizer
 * 100% local, zero external network requests, zero latency, works completely offline.
 */

class SoundService {
  private ctx: AudioContext | null = null
  private ambientGain: GainNode | null = null
  private ambientOscillators: OscillatorNode[] = []
  private isAmbientPlaying = false

  private initContext(): AudioContext | null {
    if (typeof window === 'undefined') return null
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (AudioCtx) {
        this.ctx = new AudioCtx()
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {})
    }
    return this.ctx
  }

  // Tactile button click
  playClick(volume = 0.5) {
    const ctx = this.initContext()
    if (!ctx) return
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    const now = ctx.currentTime

    osc.type = 'triangle'
    osc.frequency.setValueAtTime(440, now)
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.04)

    gain.gain.setValueAtTime(volume * 0.3, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.04)
  }

  // Energetic Party Start Chime
  playPartyStart(volume = 0.6) {
    const ctx = this.initContext()
    if (!ctx) return
    const now = ctx.currentTime
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25] // C, E, G, C, E

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      const start = now + idx * 0.08

      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, start)

      gain.gain.setValueAtTime(0, start)
      gain.gain.linearRampToValueAtTime(volume * 0.4, start + 0.03)
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.5)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(start)
      osc.stop(start + 0.5)
    })
  }

  // Card Reveal Whoosh & Shimmer
  playCardReveal(volume = 0.5) {
    const ctx = this.initContext()
    if (!ctx) return
    const now = ctx.currentTime

    // Swoosh sweep
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(180, now)
    osc.frequency.exponentialRampToValueAtTime(620, now + 0.18)

    gain.gain.setValueAtTime(0.01, now)
    gain.gain.linearRampToValueAtTime(volume * 0.4, now + 0.08)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.22)

    // Shimmer accent
    const shimmer = ctx.createOscillator()
    const shimmerGain = ctx.createGain()
    shimmer.type = 'triangle'
    shimmer.frequency.setValueAtTime(987.77, now + 0.08) // B5

    shimmerGain.gain.setValueAtTime(0, now + 0.08)
    shimmerGain.gain.linearRampToValueAtTime(volume * 0.25, now + 0.12)
    shimmerGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35)

    shimmer.connect(shimmerGain)
    shimmerGain.connect(ctx.destination)

    shimmer.start(now + 0.08)
    shimmer.stop(now + 0.35)
  }

  // Triumphant Challenge Completed Chime
  playComplete(volume = 0.6) {
    const ctx = this.initContext()
    if (!ctx) return
    const now = ctx.currentTime
    const chord = [392.00, 493.88, 587.33, 783.99] // G, B, D, G

    chord.forEach((freq, idx) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      const start = now + idx * 0.05

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle'
      osc.frequency.setValueAtTime(freq, start)

      gain.gain.setValueAtTime(0, start)
      gain.gain.linearRampToValueAtTime(volume * 0.4, start + 0.04)
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.6)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(start)
      osc.stop(start + 0.6)
    })
  }

  // Playful Skip Blip
  playSkip(volume = 0.5) {
    const ctx = this.initContext()
    if (!ctx) return
    const now = ctx.currentTime

    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'sine'
    osc.frequency.setValueAtTime(320, now)
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.12)

    gain.gain.setValueAtTime(volume * 0.35, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.12)
  }

  // Timer Tick
  playTimerTick(volume = 0.4) {
    const ctx = this.initContext()
    if (!ctx) return
    const now = ctx.currentTime

    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'triangle'
    osc.frequency.setValueAtTime(800, now)

    gain.gain.setValueAtTime(volume * 0.2, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.02)
  }

  // Urgent Warning Pulse
  playTimerWarning(volume = 0.5) {
    const ctx = this.initContext()
    if (!ctx) return
    const now = ctx.currentTime

    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'sawtooth'
    osc.frequency.setValueAtTime(440, now)
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.1)

    gain.gain.setValueAtTime(volume * 0.35, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.1)
  }

  // Zone Switch Atmospheric Sweep
  playZoneSwitch(volume = 0.5) {
    const ctx = this.initContext()
    if (!ctx) return
    const now = ctx.currentTime

    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'sine'
    osc.frequency.setValueAtTime(120, now)
    osc.frequency.exponentialRampToValueAtTime(340, now + 0.25)

    gain.gain.setValueAtTime(0.01, now)
    gain.gain.linearRampToValueAtTime(volume * 0.35, now + 0.1)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.3)
  }

  // Dramatic Random Punishment Reveal
  playPunishmentReveal(volume = 0.6) {
    const ctx = this.initContext()
    if (!ctx) return
    const now = ctx.currentTime

    const osc1 = ctx.createOscillator()
    const osc2 = ctx.createOscillator()
    const gain = ctx.createGain()

    osc1.type = 'sawtooth'
    osc1.frequency.setValueAtTime(110, now) // A2
    osc1.frequency.linearRampToValueAtTime(146.83, now + 0.3) // D3

    osc2.type = 'sine'
    osc2.frequency.setValueAtTime(220, now)
    osc2.frequency.linearRampToValueAtTime(293.66, now + 0.3)

    gain.gain.setValueAtTime(0.01, now)
    gain.gain.linearRampToValueAtTime(volume * 0.4, now + 0.1)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5)

    osc1.connect(gain)
    osc2.connect(gain)
    gain.connect(ctx.destination)

    osc1.start(now)
    osc2.start(now)
    osc1.stop(now + 0.5)
    osc2.stop(now + 0.5)
  }

  // Zone Ambient Pad / Drone (Toggleable)
  startAmbient(zoneId: string, volume = 0.2) {
    if (this.isAmbientPlaying) {
      this.stopAmbient()
    }
    const ctx = this.initContext()
    if (!ctx) return

    this.ambientGain = ctx.createGain()
    this.ambientGain.gain.setValueAtTime(0.001, ctx.currentTime)
    this.ambientGain.gain.linearRampToValueAtTime(volume * 0.2, ctx.currentTime + 1.5)
    this.ambientGain.connect(ctx.destination)

    // Different gentle drone pitch based on zone atmosphere
    let baseFreq = 110 // A2
    if (zoneId === 'after-dark') baseFreq = 98 // G2 warm late-night
    if (zoneId === 'confession-room') baseFreq = 130.81 // C3 tranquil
    if (zoneId === 'couple-chemistry') baseFreq = 146.83 // D3 sweet

    const osc1 = ctx.createOscillator()
    osc1.type = 'sine'
    osc1.frequency.setValueAtTime(baseFreq, ctx.currentTime)

    const osc2 = ctx.createOscillator()
    osc2.type = 'triangle'
    osc2.frequency.setValueAtTime(baseFreq * 1.5, ctx.currentTime) // fifth

    osc1.connect(this.ambientGain)
    osc2.connect(this.ambientGain)

    osc1.start()
    osc2.start()

    this.ambientOscillators = [osc1, osc2]
    this.isAmbientPlaying = true
  }

  stopAmbient() {
    if (!this.isAmbientPlaying) return
    if (this.ambientGain && this.ctx) {
      this.ambientGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.5)
    }
    setTimeout(() => {
      this.ambientOscillators.forEach((osc) => {
        try {
          osc.stop()
          osc.disconnect()
        } catch {
          // ignore
        }
      })
      this.ambientOscillators = []
      this.ambientGain = null
      this.isAmbientPlaying = false
    }, 600)
  }
}

export const soundService = new SoundService()
