import { topPlatforms } from "@/app/constants/dashboardData";
import { FunctionComponent, ReactElement } from "react";
import styles from "../../styles/Dashboard.module.scss"

interface TopPlatformSectionProps {
    maxValue: number;
}

const TopPlatformSection: FunctionComponent<TopPlatformSectionProps> = ({ maxValue }): ReactElement => {

    return (
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
    );
}

export default TopPlatformSection;