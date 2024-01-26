import { FunctionComponent, ReactElement, useRef, useState } from "react";
import { CaretDownIcon } from "../SVGs/SVGicons";
import useOuterClick from "@/app/hooks/useOuterClick";
import styles from "../../styles/Dashboard.module.scss"

interface SalesTrendSectionProps {

}

interface MonthlyData {
    month: string;
    price: number;
}

const SalesTrendSection: FunctionComponent<SalesTrendSectionProps> = (): ReactElement => {
    

    const [salesTrendFilterDropdownIsVisible, setSalesTrendFilterDropdownIsVisible] = useState(false);

    function generateSequence(minValue: number, maxValue: number, numberOfSteps: number): number[] {
        const sequence: number[] = [];

        // Calculate the step size
        const stepSize: number = Math.round((maxValue - minValue) / (numberOfSteps - 1) / 1000) * 1000;

        // Generate the sequence
        for (let i = 0; i < numberOfSteps - 1; i++) {
            const value: number = Math.round((minValue + i * stepSize) / 1000) * 1000;
            sequence.push(value);
        }

        // Add the maximum value (rounded to nearest thousand) as the last element
        sequence.push(Math.round(maxValue / 1000) * 1000);

        return sequence;
    };

    function generateMonthAbbreviations(): string[] {
        const months: string[] = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        return months;
    };

    function generateRandomChartData(minValue: number, maxValue: number, months: string[]): MonthlyData[] {
        const data: MonthlyData[] = [];
        const minPrice = minValue; // Minimum price
        const maxPrice = maxValue; // Maximum price

        for (let month of months) {
            const price = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
            data.push({ month, price });
        }

        return data;
    }

    const salesTrendFilterDropdownRef = useRef<HTMLDivElement>(null);
    useOuterClick(salesTrendFilterDropdownRef, setSalesTrendFilterDropdownIsVisible);

    return (
        <div className={styles.salesTrendChartSection}>
            <div className={styles.chartHeader}>
                <h3>Sales Trend</h3>
                <div className={styles.chartSetting}>
                    <p>Sort by:</p>
                    <div className={styles.filterContainer} ref={salesTrendFilterDropdownRef}>
                        <span onClick={() => setSalesTrendFilterDropdownIsVisible(true)}>Weekly <CaretDownIcon /></span>
                        {
                            salesTrendFilterDropdownIsVisible &&
                            <ul className={styles.dropdownContainer}>
                                <li>Daily</li>
                                <li className={styles.selected}>Weekly</li>
                                <li>Monthly</li>
                                <li>Yearly</li>
                            </ul>
                        }
                    </div>
                </div>
            </div>
            <div className={styles.salesTrendChart}>
                <div className={styles.prices}>
                    {
                        generateSequence(0, 50000, 7).reverse().map((price, index) => (
                            <span key={index}>{price}</span>
                        ))
                    }
                </div>
                <div className={styles.mainChartSection}>
                    <div className={styles.chartArea}>
                        {
                            generateRandomChartData(0, 50000, generateMonthAbbreviations()).map((chartData, index) => (
                                <span
                                    // Set the data attribute to the coresponing month value
                                    data-value={chartData.price}
                                    className={styles.bar}
                                    style={{ height: (chartData.price / 50000 * 100) + "%" }}
                                    // style={{ height: 100 + "%" }}
                                    key={index}>
                                    <span className={styles.tooltip}>{chartData.price.toLocaleString()}</span>
                                </span>
                            ))
                        }
                    </div>
                    <div className={styles.months}>
                        {
                            generateMonthAbbreviations().map((month, index) => (
                                <span key={index}>{month}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SalesTrendSection;