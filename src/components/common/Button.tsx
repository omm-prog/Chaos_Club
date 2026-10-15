import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { soundService } from '../../services/audio'
import { hapticsService } from '../../services/haptics'
import { useGameStore } from '../../store/gameStore'

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'danger' | 'ghost' | 'glass'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  playSound?: boolean
  playHaptic?: boolean
  glowColor?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  playSound = true,
  playHaptic = true,
  glowColor,
  className = '',
  onClick,
  disabled,
  ...props
}) => {
  const settings = useGameStore((state) => state.settings)

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs font-semibold rounded-lg min-h-[38px]',
    md: 'px-4 py-2.5 text-sm font-semibold rounded-xl min-h-[44px]',
    lg: 'px-6 py-3.5 text-base font-bold rounded-2xl min-h-[52px]',
    xl: 'px-8 py-4 text-lg font-extrabold rounded-2xl min-h-[60px]'
  }

  const variantClasses = {
    primary: 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg shadow-rose-900/40 hover:from-rose-500 hover:to-pink-500 border border-rose-400/30',
    secondary: 'bg-[#221F2D] text-[#F8F4F7] hover:bg-[#2B273A] border border-white/10 shadow-md',
    accent: 'bg-gradient-to-r from-amber-500 to-orange-500 text-black font-extrabold shadow-lg shadow-orange-900/40 hover:from-amber-400 hover:to-orange-400 border border-amber-300/40',
    danger: 'bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-lg shadow-red-950/50 hover:from-red-500 hover:to-rose-600 border border-red-500/30',
    ghost: 'bg-transparent text-[#A7A0AA] hover:text-[#F8F4F7] hover:bg-white/5',
    glass: 'glass-panel text-[#F8F4F7] hover:bg-white/10 hover:border-white/20 shadow-md'
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return
    if (playSound && settings.enableSound) {
      soundService.playClick(0.4)
    }
    if (playHaptic && settings.enableHaptics) {
      hapticsService.tap()
    }
    onClick?.(e)
  }

  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 450, damping: 25 }}
      disabled={disabled}
      onClick={handleClick}
      style={glowColor ? { boxShadow: `0 0 20px -2px ${glowColor}` } : undefined}
      className={`
        inline-flex items-center justify-center gap-2.5 transition-colors cursor-pointer select-none active:outline-none
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  )
}
