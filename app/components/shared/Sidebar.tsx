import { ReactElement, FunctionComponent } from "react";
import styles from '@/app/styles/Sidebar.module.scss';
import { ArrowRightIcon, BoxIcon, CustomerIcon, DashboardIcon, DiscountIcon, InfoCircleIcon, LogoIcon, LogoutIcon, MoonIcon, SettingsIcon, SunIcon, TradeIcon } from "../SVGs/SVGicons";
import useResponsiveness from "@/app/hooks/useResponsiveness";
import { WindowSizes } from "@/app/constants/windowSizes";

interface SidebarProps {

}

const Sidebar: FunctionComponent<SidebarProps> = (): ReactElement => {

    const windowRes = useResponsiveness();
    const onMobile = windowRes.width && windowRes.width < WindowSizes.Tablet_Size;

    return (
        <>
            {
                typeof (onMobile) == "boolean" && !onMobile &&
                <>
                    <div className={styles.sidebarContainer}>
                        <span className={styles.logo}>
                            <LogoIcon />
                        </span>
                        <div className={styles.topMenu}>
                            <span className={styles.active}>
                                <DashboardIcon active />
                            </span>
                            <span>
                                <TradeIcon />
                            </span>
                            <span>
                                <CustomerIcon />
                            </span>
                            <span>
                                <BoxIcon />
                            </span>
                            <span>
                                <DiscountIcon />
                            </span>
                            <span>
                                <InfoCircleIcon />
                            </span>
                            <div className={styles.lightSetting}>
                                <span className={styles.selected}>
                                    <SunIcon />
                                </span>
                                <span>
                                    <MoonIcon />
                                </span>
                            </div>
                        </div>
                        <div className={styles.bottomMenu}>
                            <span>
                                <ArrowRightIcon />
                            </span>
                            <span>
                                <SettingsIcon />
                            </span>
                            <span>
                                <LogoutIcon />
                            </span>
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default Sidebar;