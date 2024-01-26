"use client"
import styles from "@/app/styles/Dashboard.module.scss";
import SalesTrendSection from "./components/Dashboard/SalesTrendSection";
import DashboardKpiSection from "./components/Dashboard/DashboardKpiSection";
import LastOrdersSection from "./components/Dashboard/LastOrdersSection";
import TopPlatformSection from "./components/Dashboard/TopPlatformSection";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Theme } from "./enums/Theme";

export default function Home() {

    const router = useRouter();
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
