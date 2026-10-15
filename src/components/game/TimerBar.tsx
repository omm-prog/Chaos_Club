import React from 'react'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

interface TimerBarProps {
  timeRemaining: number
  totalDuration: number
  isRunning: boolean
}

export const TimerBar: React.FC<TimerBarProps> = ({
  timeRemaining,
  totalDuration,
  isRunning
}) => {
  if (totalDuration <= 0) return null

  const progress = Math.max(0, Math.min(100, (timeRemaining / totalDuration) * 100))
  const isUrgent = timeRemaining <= 5 && timeRemaining > 0
  const isWarning = timeRemaining <= 10 && timeRemaining > 5

  const getColor = () => {
    if (isUrgent) return 'from-red-600 to-rose-600'
    if (isWarning) return 'from-amber-500 to-orange-500'
    return 'from-cyan-500 to-blue-500'
  }

  return (
    <div className="w-full space-y-1.5 my-2">
      <div className="flex items-center justify-between text-xs font-bold">
        <div className="flex items-center gap-1.5 text-[#A7A0AA]">
          <Clock className={`w-3.5 h-3.5 ${isUrgent ? 'text-red-400 animate-spin' : ''}`} />
          <span>Timer</span>
        </div>
        <span
          className={`font-black text-sm tabular-nums ${
            isUrgent ? 'text-red-400 animate-pulse text-base' : isWarning ? 'text-amber-400' : 'text-white'
          }`}
        >
          {timeRemaining}s
        </span>
      </div>

      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden p-0.5 border border-white/5">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${getColor()} transition-colors duration-300`}
          style={{ width: `${progress}%` }}
          animate={isUrgent ? { opacity: [1, 0.4, 1] } : { opacity: 1 }}
          transition={isUrgent ? { repeat: Infinity, duration: 0.5 } : undefined}
        />
      </div>
    </div>
  )
}
