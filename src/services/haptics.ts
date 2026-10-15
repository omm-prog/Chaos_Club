/**
 * Chaos Club Haptics Service
 * Provides tactile vibration feedback for mobile devices with safe feature detection.
 */

class HapticsService {
  private isSupported(): boolean {
    return typeof window !== 'undefined' && typeof navigator !== 'undefined' && 'vibrate' in navigator
  }

  // Light tap for button clicks & small interactions
  tap(enabled = true) {
    if (!enabled || !this.isSupported()) return
    try {
      navigator.vibrate(15)
    } catch {
      // ignore
    }
  }

  // Triumphant pattern for completing a challenge
  success(enabled = true) {
    if (!enabled || !this.isSupported()) return
    try {
      navigator.vibrate([25, 40, 35])
    } catch {
      // ignore
    }
  }

  // Double pulse for skip or pass
  skip(enabled = true) {
    if (!enabled || !this.isSupported()) return
    try {
      navigator.vibrate([40, 30, 20])
    } catch {
      // ignore
    }
  }

  // Urgent buzz for timer warning
  warning(enabled = true) {
    if (!enabled || !this.isSupported()) return
    try {
      navigator.vibrate([70, 40, 70])
    } catch {
      // ignore
    }
  }

  // Micro pulse for timer ticks
  tick(enabled = true) {
    if (!enabled || !this.isSupported()) return
    try {
      navigator.vibrate(8)
    } catch {
      // ignore
    }
  }

  // Dramatic buzz for punishment reveal
  punishment(enabled = true) {
    if (!enabled || !this.isSupported()) return
    try {
      navigator.vibrate([60, 50, 100])
    } catch {
      // ignore
    }
  }
}

export const hapticsService = new HapticsService()
