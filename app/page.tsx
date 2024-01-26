"use client"
import styles from "@/app/styles/Dashboard.module.scss";
import SalesTrendSection from "./components/Dashboard/SalesTrendSection";
import DashboardKpiSection from "./components/Dashboard/DashboardKpiSection";
import LastOrdersSection from "./components/Dashboard/LastOrdersSection";
import TopPlatformSection from "./components/Dashboard/TopPlatformSection";

export default function Home() {

    const maxValue = 5000000;

    return (
        <main className={styles.main}>
            <div className={styles.topAreaAnalytics}>
                <SalesTrendSection />
                <DashboardKpiSection />
            </div>
            <div className={styles.bottomAreaAnalytics}>
                <LastOrdersSection />
                <TopPlatformSection maxValue={maxValue} />
            </div>
        </main>
    );
}
