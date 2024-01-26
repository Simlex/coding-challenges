import { ReactElement, FunctionComponent, Dispatch, SetStateAction } from "react";
import styles from '@/app/styles/Sidebar.module.scss';
import { ArrowRightIcon, BoxIcon, CustomerIcon, DashboardIcon, DiscountIcon, InfoCircleIcon, LogoIcon, LogoutIcon, MoonIcon, SettingsIcon, SunIcon, TradeIcon } from "../SVGs/SVGicons";
import useResponsiveness from "@/app/hooks/useResponsiveness";
import { WindowSizes } from "@/app/constants/windowSizes";
import { Theme } from "@/app/enums/Theme";

interface SidebarProps {
    selectedTheme: Theme
    setSelectedTheme: Dispatch<SetStateAction<Theme>>
}

const Sidebar: FunctionComponent<SidebarProps> = ({ selectedTheme, setSelectedTheme }): ReactElement => {

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
                                <span
                                    onClick={() => setSelectedTheme(Theme.Light)}
                                    className={selectedTheme == Theme.Light ? styles.selected : ""}>
                                    <SunIcon />
                                </span>
                                <span
                                    onClick={() => setSelectedTheme(Theme.Dark)}
                                    className={selectedTheme == Theme.Dark ? styles.selected : ""}>
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