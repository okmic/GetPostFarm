import { Logo } from "./Logo";

export const SimpleLogoLoading: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <div className="animate-spin rounded-full border-2 border-[#FFA726]/20 border-t-[#FFA726] w-12 h-12" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Logo variant="icon" size="sm" />
        </div>
      </div>
      <div className="flex gap-1">
        <div className="w-1.5 h-1.5 bg-[#FFA726] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-1.5 h-1.5 bg-[#FFA726] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  )
}