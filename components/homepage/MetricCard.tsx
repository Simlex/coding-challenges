import {
  CreditCard,
  DollarSign,
  AlertCircle,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  icon: string;
  title: string;
  value: string;
  change?: string;
  period?: string;
  trend?: "up" | "down";
  alert?: string;
  color: string;
}

export default function MetricCard({
  icon,
  title,
  value,
  change,
  period,
  trend,
  alert,
  color,
}: MetricCardProps) {
  return (
    <Card className="p-4 h-fit shadow-none">
      <div className="flex flex-col items-start gap-2 mb-2">
        {icon === "credit-card" && (
          <div
            className={cn(
              "rounded-full flex items-center justify-center",
              color === "blue" ? "" : ""
            )}
          >
            <CreditCard className="h-4 w-4 text-blue-600" />
          </div>
        )}
        {icon === "dollar-sign" && (
          <div
            className={cn(
              "rounded-full flex items-center justify-center",
              color === "blue" ? "" : ""
            )}
          >
            <DollarSign className="h-4 w-4 text-blue-600" />
          </div>
        )}
        {icon === "alert-circle" && (
          <div
            className={cn(
              "rounded-full flex items-center justify-center",
              color === "orange" ? "" : ""
            )}
          >
            <AlertCircle className="h-4 w-4 text-orange-500" />
          </div>
        )}
        <span className="text-sm text-muted-foreground">{title}</span>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="text-2xl font-bold mb-1">{value}</div>
        {change && (
          <div className="flex flex-row items-center gap-1">
            {trend === "up" ? (
              <TrendingUp className="h-4 w-4 text-green-500" />
            ) : trend === "down" ? (
              <TrendingDown className="h-4 w-4 text-red-500" />
            ) : null}
            <span
              className={cn(
                "text-sm",
                trend === "up"
                  ? "text-green-500"
                  : trend === "down"
                  ? "text-red-500"
                  : ""
              )}
            >
              {change}
            </span>
            <span className="text-xs text-muted-foreground">{period}</span>
          </div>
        )}
      </div>
      {/* {alert && <div className="text-xs text-orange-500 mt-1">{alert}</div>} */}
    </Card>
  );
}
