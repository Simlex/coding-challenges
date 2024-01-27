
export interface MonthlyData {
    month: string;
    price: number;
}
export interface WeeklyData {
    week: string;
    price: number;
}
export interface YearlyData {
    year: string;
    price: number;
}

export function generateValuesAbbreviations(type: "months" | "days" | "years"): string[] {
    switch (type) {
        case "months":
            return [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ];
        case "days":
            return [
                "Mon", "Tue", "Web", "Thu", "Fri", "Sat",
                "Sun"
            ];
        case "years":
            return [
                "2014", "2015", "2016", "2017", "2018", "2019",
                "2020", "2021", "2022", "2023", "2024"
            ];
    
        default:
            return [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ];
    }
};

export function generateRandomChartData(minValue: number, maxValue: number, months: string[], generatedMonthlyData: MonthlyData[] | undefined, setGeneratedMonthlyData: React.Dispatch<React.SetStateAction<MonthlyData[] | undefined>>) {
    const data: MonthlyData[] = [];
    const minPrice = minValue; // Minimum price
    const maxPrice = maxValue; // Maximum price

    if (generatedMonthlyData) {
        return generatedMonthlyData;
    }

    for (let month of months) {
        const price = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
        data.push({ month, price });
    }

    setGeneratedMonthlyData(data);
    // return data;
};