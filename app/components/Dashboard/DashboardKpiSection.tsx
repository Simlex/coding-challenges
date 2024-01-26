import { FunctionComponent, ReactElement } from "react";
import { TrendingDownIcon, TrendingUpIcon } from "../SVGs/SVGicons";
import { KpiType } from "@/app/enums/KpiType";
import { kpisInformation } from "@/app/constants/dashboardData";
import styles from "../../styles/Dashboard.module.scss"

interface DashboardKpiSectionProps {

}

const DashboardKpiSection: FunctionComponent<DashboardKpiSectionProps> = (): ReactElement => {
    return (
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
    );
}

export default DashboardKpiSection;