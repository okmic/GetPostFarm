import React, { useState, useEffect } from 'react'
import { FiGrid } from 'react-icons/fi'

interface PostFarmLogoProps {
  variant?: 'full' | 'icon' | 'wordmark'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeMap = {
  sm: { container: 'w-9 h-9', text: 'text-lg', subtitle: 'text-[7px]' },
  md: { container: 'w-12 h-12', text: 'text-2xl', subtitle: 'text-[9px]' },
  lg: { container: 'w-20 h-20', text: 'text-4xl', subtitle: 'text-[10px]' },
  xl: { container: 'w-28 h-28', text: 'text-6xl', subtitle: 'text-[12px]' },
}

const WheatMark: React.FC<{ sizeKey: 'sm' | 'md' | 'lg' | 'xl'; className?: string }> = ({ sizeKey, className = '' }) => {
  const { container } = sizeMap[sizeKey]
  const w = 100
  const h = 100

  const stemH = 70
  const stemW = 2
  const stemY = 15
  const grainW = 5
  const grainH = 9
  const grainRx = 2

  const positions = [
    { x: 25, accent: false },
    { x: 50, accent: true },
    { x: 75, accent: false },
  ]

  const grainsForStem = (cx: number, topY: number) => {
    const grains = []
    for (let i = 0; i < 7; i++) {
      const y = topY + i * 8
      const offset = i % 2 === 0 ? -grainW - 0.5 : grainW + 0.5
      grains.push({ x: cx + offset, y })
      grains.push({ x: cx - offset, y })
    }
    return grains
  }

  return (
    <div className={`relative ${container} ${className}`}>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" style={{ display: 'block' }}>
        <defs>
          <linearGradient id="wheatStemGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
          </linearGradient>
          <linearGradient id="wheatStemAccent" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFD54F" />
            <stop offset="40%" stopColor="#FFA726" />
            <stop offset="100%" stopColor="#4CAF50" />
          </linearGradient>
          <linearGradient id="wheatGrainGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
          </linearGradient>
          <linearGradient id="wheatGrainAccent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="100%" stopColor="#FFA726" />
          </linearGradient>
        </defs>

        {positions.map((pos) => {
          const stemGradient = pos.accent ? 'url(#wheatStemAccent)' : 'url(#wheatStemGrad)'
          const grainGradient = pos.accent ? 'url(#wheatGrainAccent)' : 'url(#wheatGrainGrad)'
          const grainOpacity = pos.accent ? 1 : 0.7

          return (
            <g key={pos.x}>
              <rect
                x={pos.x - stemW / 2}
                y={stemY}
                width={stemW}
                height={stemH}
                rx={1}
                fill={stemGradient}
              />
              {grainsForStem(pos.x, stemY + 5).map((g, i) => (
                <rect
                  key={i}
                  x={g.x - grainW / 2}
                  y={g.y - grainH / 2}
                  width={grainW}
                  height={grainH}
                  rx={grainRx}
                  fill={grainGradient}
                  opacity={grainOpacity}
                  transform={`rotate(${(i % 4) * 2 - 2} ${g.x} ${g.y})`}
                />
              ))}
            </g>
          )
        })}

        <line
          x1={15}
          y1={stemY + stemH}
          x2={85}
          y2={stemY + stemH}
          stroke="rgba(255,255,255,0.15)"
          strokeWidth={1}
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export const PostFarmIcon: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string }> = ({
  size = 'xl',
  className = '',
}) => <WheatMark sizeKey={size} className={className} />

export const Logo: React.FC<PostFarmLogoProps> = ({
  variant = 'full',
  size = 'lg',
  className = '',
}) => {
  const { text, subtitle } = sizeMap[size]

  if (variant === 'icon') {
    return <WheatMark sizeKey={size} className={className} />
  }

  if (variant === 'wordmark') {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <div className={`font-black tracking-[-0.03em] text-white ${text} leading-none`}>
          Пост<span className="text-[#FFA726]">Ф</span>ерма
        </div>
        <div className="font-mono tracking-[0.4em] text-[#4CAF50]/40 mt-1" style={{ fontSize: subtitle.replace('text-[', '').replace(']', '') }}>
          POSTFARM
        </div>
      </div>
    )
  }

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <WheatMark sizeKey={size} />
      <div className="mt-4 flex flex-col items-center">
        <div className={`font-black tracking-[-0.03em] text-white ${text} leading-none`}>
          Пост<span className="text-[#FFA726]">Ф</span>ерма
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="w-1 h-1 rounded-full bg-[#4CAF50]/60" />
          <span className="font-mono tracking-[0.4em] text-[#4CAF50]/40" style={{ fontSize: subtitle.replace('text-[', '').replace(']', '') }}>
            POSTFARM
          </span>
          <span className="w-1 h-1 rounded-full bg-[#FFA726]/60" />
        </div>
      </div>
    </div>
  )
}

export const LoadingLogo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'lg' }) => {
  return (
    <div className="relative flex flex-col items-center">
      <WheatMark sizeKey={size} />
      <div className="flex gap-2 mt-5">
        <div className="w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" />
        <div className="w-1.5 h-1.5 bg-[#FFA726]/60 rounded-full animate-pulse [animation-delay:0.2s]" />
        <div className="w-1.5 h-1.5 bg-[#4CAF50]/50 rounded-full animate-pulse [animation-delay:0.4s]" />
      </div>
    </div>
  )
}

export const HeroBrand: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-gradient-to-br from-[#4CAF50]/5 to-[#FFA726]/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <FiGrid className="w-full h-full max-w-md text-white" />
      </div>

      <div className={`relative flex flex-col items-center transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-br from-[#4CAF50]/10 via-transparent to-[#FFA726]/10 rounded-full blur-2xl animate-pulse" />
          <div className="relative">
            <WheatMark sizeKey="xl" />
          </div>
        </div>

        <div className={`mt-6 flex flex-col items-center transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-6xl font-black tracking-[-0.03em] text-white leading-none">
            Пост<span className="text-[#FFA726]">Ф</span>ерма
          </h1>
          <div className="flex items-center gap-3 mt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]/60" />
            <span className="font-mono text-xs tracking-[0.4em] text-[#4CAF50]/40">
              POSTFARM
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFA726]/60" />
          </div>
        </div>

        <p className={`mt-4 text-white/40 text-sm font-medium transition-all duration-700 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          Выращиваем контент. Автоматически.
        </p>
      </div>
    </div>
  )
}

export const PostHubLogo: React.FC<PostFarmLogoProps> = ({
  variant = 'full',
  size = 'lg',
  className = '',
}) => {
  const { text, subtitle } = sizeMap[size]

  if (variant === 'icon') {
    return <WheatMark sizeKey={size} className={className} />
  }

  if (variant === 'wordmark') {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <div className={`font-black tracking-[-0.03em] text-white ${text} leading-none`}>
          Пост<span className="text-[#FFA726]">H</span>ub
        </div>
        <div className="font-mono tracking-[0.4em] text-[#4CAF50]/40 mt-1" style={{ fontSize: subtitle.replace('text-[', '').replace(']', '') }}>
          POSTHUB
        </div>
      </div>
    )
  }

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <WheatMark sizeKey={size} />
      <div className="mt-4 flex flex-col items-center">
        <div className={`font-black tracking-[-0.03em] text-white ${text} leading-none`}>
          Пост<span className="text-[#FFA726]">H</span>ub
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="w-1 h-1 rounded-full bg-[#4CAF50]/60" />
          <span className="font-mono tracking-[0.4em] text-[#4CAF50]/40" style={{ fontSize: subtitle.replace('text-[', '').replace(']', '') }}>
            POSTHUB
          </span>
          <span className="w-1 h-1 rounded-full bg-[#FFA726]/60" />
        </div>
      </div>
    </div>
  )
}