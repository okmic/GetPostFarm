import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaHome, FaArrowLeft } from "react-icons/fa"
import { FiBox } from "react-icons/fi"

export default function NotFound() {
  const navigate = useNavigate()
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 150)
    }, 3000)

    return () => {
      clearInterval(glitchInterval)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center px-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#4CAF50]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#FFA726]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className={`text-6xl lg:text-8xl font-black mb-4 tracking-tighter bg-gradient-to-r from-white via-[#4CAF50] to-[#FFA726] bg-clip-text text-transparent ${isGlitching ? 'animate-glitch-text' : ''}`}>
            404
          </h1>
          
          <div className="space-y-3">
            <h2 className="text-xl lg:text-2xl font-semibold text-white mb-2">
              Страница не найдена
            </h2>
            <p className="text-white/40 text-sm lg:text-base max-w-md mx-auto">
              К сожалению, запрашиваемая страница не существует или была перемещена.
              Проверьте правильность URL или вернитесь на главную.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
            <code className="text-xs text-white/30 font-mono">404 Not Found</code>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/10" />
          <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
            <code className="text-xs text-white/30 font-mono flex items-center gap-1">
              <FiBox className="text-[10px]" />
              PostFarm Constructor
            </code>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 font-medium text-sm transition-all hover:bg-white/10 hover:text-white cursor-pointer"
          >
            <FaArrowLeft className="text-sm transition-transform group-hover:-translate-x-1" />
            Вернуться назад
          </button>
          
          <button
            onClick={() => navigate("/")}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#4CAF50] to-[#FFA726] text-white font-medium text-sm transition-all hover:shadow-lg hover:shadow-[#4CAF50]/25 cursor-pointer"
          >
            <FaHome className="text-sm transition-transform group-hover:-translate-y-0.5" />
            На главную
          </button>
        </div>
      </div>
    </div>
  )
}