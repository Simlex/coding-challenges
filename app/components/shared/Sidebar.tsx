import { ReactElement, FunctionComponent, Dispatch, SetStateAction, useEffect } from "react";
import styles from '@/app/styles/Sidebar.module.scss';
import { ArrowRightIcon, BoxIcon, CustomerIcon, DashboardIcon, DiscountIcon, InfoCircleIcon, LogoIcon, LogoutIcon, MoonIcon, SettingsIcon, SunIcon, TradeIcon } from "../SVGs/SVGicons";
import useResponsiveness from "@/app/hooks/useResponsiveness";
import { WindowSizes } from "@/app/constants/windowSizes";
import { Theme } from "@/app/enums/Theme";
import { Provider, useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/redux/store";
import { updateAppTheme } from "@/app/redux/features/theme/themeSlice";
import { useRouter } from "next/navigation";

interface SidebarProps {
    setSelectedTheme: Dispatch<SetStateAction<Theme>>
}

const Sidebar: FunctionComponent<SidebarProps> = ({ setSelectedTheme }): ReactElement => {

    const router = useRouter();
    const windowRes = useResponsiveness();
    const onMobile = windowRes.width && windowRes.width < WindowSizes.Tablet_Size;

    const dispatch = useDispatch();
    const appTheme = useSelector((state: RootState) => state.theme.appTheme);

    useEffect(() => {
        if(appTheme) {
            console.log(appTheme);
            setSelectedTheme(appTheme);
        }
    }, [appTheme, router]);

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
                                    onClick={() => dispatch(updateAppTheme(Theme.Light))}
                                    className={appTheme == Theme.Light ? styles.selected : ""}>
                                    <SunIcon />
                                </span>
                                <span
                                    onClick={() => dispatch(updateAppTheme(Theme.Dark))}
                                    className={appTheme == Theme.Dark ? styles.selected : ""}>
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