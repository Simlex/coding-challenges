import images from "@/public/images";
import { BoxTickIcon, CartIcon, IncomeIcon, MinDeclineChartIcon, MinGainChartIcon, RefundIcon } from "../components/SVGs/SVGicons";
import { KpiType } from "../enums/KpiType";
import { OrderStatus } from "../enums/OrderStatus";

export const kpisInformation = [
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

export const topPlatforms = [
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

export const orders = [
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