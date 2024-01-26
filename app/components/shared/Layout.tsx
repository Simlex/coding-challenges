"use client"
import type { Metadata } from 'next'
import { FunctionComponent, ReactElement, ReactNode, useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Sidebar from './Sidebar';
import { LogoIcon } from '../SVGs/SVGicons';
import useResponsiveness from '@/app/hooks/useResponsiveness';
import { WindowSizes } from '@/app/constants/windowSizes';
import { Theme } from '@/app/enums/Theme';

export const metadata: Metadata = {
    title: 'Ticket wave web application',
    description: 'Ticket wave web application',
}

interface LayoutProps {
    children?: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement => {

    const [selectedTheme, setSelectedTheme] = useState(Theme.Light);

    const [loaderIsVisible, setLoaderIsVisible] = useState(true);

    const iswindow = typeof window !== "undefined" ? true : false;

    const windowRes = useResponsiveness();
    const onMobile = windowRes.width && windowRes.width < WindowSizes.Tablet_Size;

    useEffect(() => {
        if (typeof window !== "undefined") {
            setLoaderIsVisible(false);
        }
    }, [iswindow]);

    // useEffect(() => {
    //     const preSelectedTheme = window.localStorage.getItem("Theme");

    //     if (preSelectedTheme && (preSelectedTheme != null || preSelectedTheme != undefined)) {
    //         if(preSelectedTheme == Theme.Light) {
    //             setSelectedTheme(Theme.Light);
    //         } else {
    //             setSelectedTheme(Theme.Dark);
    //         }
    //     } else  {   
    //         setSelectedTheme(Theme.Light);
    //         window.localStorage.setItem("Theme", Theme.Light);
    //     }
    // }, [selectedTheme])

    return (
        <html lang="en" data-theme={selectedTheme == Theme.Light ? "light" : "dark"}>
            <body>
                <>
                    {
                        !loaderIsVisible &&
                        <>
                            <div className="appLayout">
                                <Sidebar
                                    selectedTheme={selectedTheme}
                                    setSelectedTheme={setSelectedTheme}
                                />
                                <div className="appLayout__body" style={typeof (onMobile) == "boolean" && onMobile ? { width: '100%' } : {}}>
                                    <Navbar />
                                    <div className="innerBody">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    {
                        loaderIsVisible &&
                        <div className="splashScreen">
                            <div className="image">
                                <LogoIcon />
                            </div>
                        </div>
                    }
                </>
            </body>
        </html>
    )
}

export default Layout;
