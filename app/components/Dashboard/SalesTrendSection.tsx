import { FunctionComponent, ReactElement, useEffect, useRef, useState } from "react";
import { CaretDownIcon } from "../SVGs/SVGicons";
import useOuterClick from "@/app/hooks/useOuterClick";
import styles from "../../styles/Dashboard.module.scss";
import { useSelector } from "react-redux";
import { RootState } from '@/app/redux/store';
import { Theme } from "@/app/enums/Theme";
import { MonthlyData, WeeklyData, YearlyData, generateRandomChartData, generateValuesAbbreviations } from "@/app/constants/chartDataGenerator";
import { Timeframe } from "@/app/enums/Timeframe";
import { serializeTimeframe } from "@/app/constants/serializeEnum";

interface SalesTrendSectionProps {

}

const SalesTrendSection: FunctionComponent<SalesTrendSectionProps> = (): ReactElement => {


    const appTheme = useSelector((state: RootState) => state.theme.appTheme);
    const [salesTrendFilterDropdownIsVisible, setSalesTrendFilterDropdownIsVisible] = useState(false);
    const [generatedMonthlyData, setGeneratedMonthlyData] = useState<MonthlyData[]>();
    const [generatedWeeklyData, setGeneratedWeeklyData] = useState<WeeklyData[]>();
    const [generatedYearlyData, setGeneratedYearlyData] = useState<YearlyData[]>();

    const [selectedTimeframe, setSelectedTimeframe] = useState(Timeframe.Months);

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

    const salesTrendFilterDropdownRef = useRef<HTMLDivElement>(null);
    useOuterClick(salesTrendFilterDropdownRef, setSalesTrendFilterDropdownIsVisible);

    useEffect(() => {
        generateRandomChartData(0, 50000, generateValuesAbbreviations("months"), generatedMonthlyData, setGeneratedMonthlyData);
    }, []);

    return (
        <div className={styles.salesTrendChartSection}>
            <div className={styles.chartHeader}>
                <h3>Sales Trend</h3>
                <div className={styles.chartSetting}>
                    <p>Sort by:</p>
                    <div className={styles.filterContainer} ref={salesTrendFilterDropdownRef}>
                        <span onClick={() => setSalesTrendFilterDropdownIsVisible(true)}>{serializeTimeframe(selectedTimeframe)} <CaretDownIcon active={appTheme == Theme.Dark} /></span>
                        {
                            salesTrendFilterDropdownIsVisible &&
                            <ul className={styles.dropdownContainer}>
                                <li
                                    className={selectedTimeframe == Timeframe.Days ? styles.selected : ""}
                                    onClick={() => {
                                        setSelectedTimeframe(Timeframe.Days)
                                        setSalesTrendFilterDropdownIsVisible(false);
                                    }} >Daily</li>
                                {/* <li className={selectedTimeframe == Timeframe.Months ? styles.selected : ""} onClick={() => setSelectedTimeframe(Timeframe.Months)} >Weekly</li> */}
                                <li
                                    className={selectedTimeframe == Timeframe.Months ? styles.selected : ""}
                                    onClick={() => {
                                        setSelectedTimeframe(Timeframe.Months)
                                        setSalesTrendFilterDropdownIsVisible(false);
                                    }} >Monthly</li>
                                <li
                                    className={selectedTimeframe == Timeframe.Years ? styles.selected : ""}
                                    onClick={() => {
                                        setSelectedTimeframe(Timeframe.Years)
                                        setSalesTrendFilterDropdownIsVisible(false);
                                    }} >Yearly</li>
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
                            generatedMonthlyData?.map((chartData, index) => (
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
                            generateValuesAbbreviations("months").map((month, index) => (
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