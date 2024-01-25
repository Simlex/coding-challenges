"use client"
import Image from "next/image";
import styles from "@/app/styles/Dashboard.module.scss";
import { BoxTickIcon, CaretDownIcon, CartIcon, IncomeIcon, MinDeclineChartIcon, MinGainChartIcon, RefundIcon, TrendingDownIcon, TrendingUpIcon, ViewIcon } from "./components/SVGs/SVGicons";
import images from "@/public/images";
import { useRef, useState } from "react";
import useOuterClick from "./hooks/useOuterClick";

enum KpiType {
    "Up",
    "Down",
}

enum OrderStatus {
    "Paid",
    "Refund",
}

interface MonthlyData {
    month: string;
    price: number;
}

export default function Home() {

    const [salesTrendFilterDropdownIsVisible, setSalesTrendFilterDropdownIsVisible] = useState(false);
    const maxValue = 5000000;

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


    const kpisInformation = [
        {
            title: "Total Order",
            value: 350,
            pastPerformance: 23.5,
            pastPerformanceType: KpiType.Up,
            icon: <BoxTickIcon />,
            chart: <MinGainChartIcon />
        },
        {
            title: "Total Refund",
            value: 270,
            pastPerformance: 23.5,
            pastPerformanceType: KpiType.Down,
            icon: <RefundIcon />,
            chart: <MinDeclineChartIcon />
        },
        {
            title: "Average Sales",
            value: 1567,
            pastPerformance: 23.5,
            pastPerformanceType: KpiType.Down,
            icon: <CartIcon />,
            chart: <MinDeclineChartIcon />
        },
        {
            title: "Total Income",
            value: 350.000,
            pastPerformance: 23.5,
            pastPerformanceType: KpiType.Up,
            icon: <IncomeIcon />,
            chart: <MinGainChartIcon />
        },
    ];

    const topPlatforms = [
        {
            name: "Book Bazaar",
            color: "#6160DC",
            amount: 2500000,
            percentage: 15,
        },
        {
            name: "Artisan Aisle",
            color: "#54C5EB",
            amount: 1800000,
            percentage: 10,
        },
        {
            name: "Toy Troop",
            color: "#FFB74A",
            amount: 1200000,
            percentage: 8,
        },
        {
            name: "XStore",
            color: "#FF4A55",
            amount: 600000,
            percentage: 5,
        },
    ];

    const orders = [
        {
            name: "Marcus Bergson",
            date: "Nov 15, 2023",
            amount: 350000,
            status: OrderStatus.Paid,
            image: images.Marcus,
        },
        {
            name: "Jaydon Vaccaro",
            date: "Nov 15, 2023",
            amount: 150000,
            status: OrderStatus.Refund,
            image: images.Jaydon,
        },
        {
            name: "Corey Schleifer",
            date: "Nov 15, 2023",
            amount: 87000,
            status: OrderStatus.Paid,
            image: images.Corey,
        },
        {
            name: "Cooper Press",
            date: "Nov 15, 2023",
            amount: 100000,
            status: OrderStatus.Refund,
            image: images.Cooper,
        },
        {
            name: "Phillip Lubin",
            date: "Nov 15, 2023",
            amount: 78000,
            status: OrderStatus.Paid,
            image: images.Phillip,
        },
    ]

    const salesTrendFilterDropdownRef = useRef<HTMLDivElement>(null);
    useOuterClick(salesTrendFilterDropdownRef, setSalesTrendFilterDropdownIsVisible);

    return (
        <main className={styles.main}>
            <div className={styles.topAreaAnalytics}>
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
                <div className={styles.dashboardKpis}>
                    {
                        kpisInformation.map((kpi, index) => (
                            <div className={styles.kpiCard} key={index}>
                                <div className={styles.indicatorOverview}>
                                    <span>
                                        {kpi.icon}
                                    </span>
                                    <span className={styles.miniChart}>
                                        {kpi.chart}
                                    </span>
                                </div>
                                <div className={styles.indicatorInfo}>
                                    <p>{kpi.title}</p>
                                    <h3>{kpi.title == "Total Income" ? "$" : ""}{kpi.value}</h3>
                                </div>
                                {
                                    kpi.pastPerformanceType === KpiType.Up ?
                                        <div className={styles.pastPerformanceComp}>
                                            <span className={styles.up}>
                                                <TrendingUpIcon />
                                                {kpi.pastPerformance}%
                                            </span>
                                            <p>vs. previous month</p>
                                        </div> :
                                        <div className={styles.pastPerformanceComp}>
                                            <span className={styles.down}>
                                                <TrendingDownIcon />
                                                {kpi.pastPerformance}%
                                            </span>
                                            <p>vs. previous month</p>
                                        </div>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.bottomAreaAnalytics}>
                <div className={styles.lastOrdersSection}>
                    <div className={styles.lastOrdersHeader}>
                        <h3>Last Orders</h3>
                        <span className={styles.textButton}>See All</span>
                    </div>

                    <div className={styles.tableContainer}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Invoice</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className={styles.customerInfo}>
                                                    <span><Image src={order.image} alt="Customer photo" /></span>
                                                    <p>{order.name}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <p className={styles.date}>{order.date}</p>
                                            </td>
                                            <td>&#8358; {order.amount.toLocaleString()}</td>
                                            <td>
                                                {order.status === OrderStatus.Paid && <span className={styles.statusPaid}>Paid</span>}
                                                {order.status === OrderStatus.Refund && <span className={styles.statusRefund}>Refund</span>}
                                            </td>
                                            <td>
                                                <button><ViewIcon />View</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.topPlatformSection}>
                    <div className={styles.platformHeader}>
                        <h3>Top Platform</h3>
                        <button>See All</button>
                    </div>

                    <div className={styles.platforms}>
                        {
                            topPlatforms.map((topPlatform, index) => (
                                <div className={styles.platform} key={index}>
                                    <h5>{topPlatform.name}</h5>
                                    <span className={styles.indicatorContainer}>
                                        <span
                                            className={styles.indicator}
                                            style={{ backgroundColor: topPlatform.color, width: ((topPlatform.amount / maxValue) * 100) + "%" }}>
                                        </span>
                                    </span>
                                    <div className={styles.metrics}>
                                        <p>&#36;{(topPlatform.amount).toLocaleString()}</p>
                                        <p>+{topPlatform.percentage}%</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
