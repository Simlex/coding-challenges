import { CreditCard } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface QuickAccessCardProps {
  icon: string
  title: string
  color: string
}

export default function QuickAccessCard({ icon, title, color }: QuickAccessCardProps) {
  return (
    <Card className="p-4 bg-slate-100 hover:bg-slate-50 cursor-pointer transition-colors shadow-none rounded-2xl group">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center",
              color === "blue" ? "bg-blue-700 group-hover:bg-blue-100" : "",
            )}
          >
            <CreditCard className="h-4 w-4 text-blue-100 group-hover:text-blue-600" />
          </div>
          <span className="font-medium">{title}</span>
        </div>
        <div className="text-muted-foreground">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Card>
  )
}
