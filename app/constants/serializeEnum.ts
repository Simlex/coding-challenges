import { Timeframe } from "../enums/Timeframe";

export function serializeTimeframe(selectedTimeframe: Timeframe) {
    switch (selectedTimeframe) {
        case Timeframe.Days:
            return "Daily"
        case Timeframe.Months:
            return "Monthly"
        case Timeframe.Years:
            return "Yearly"
    
        default:
            return "";
    }
}