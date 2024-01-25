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

export const metadata: Metadata = {
    title: 'Ticket wave web application',
    description: 'Ticket wave web application',
}

interface LayoutProps {
    children?: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement => {

    const [loaderIsVisible, setLoaderIsVisible] = useState(true);

    const iswindow = typeof window !== "undefined" ? true : false;

    const windowRes = useResponsiveness();
    const onMobile = windowRes.width && windowRes.width < WindowSizes.Tablet_Size;

    useEffect(() => {
        if (typeof window !== "undefined") {
            setLoaderIsVisible(false);
        }
    }, [iswindow]);

    const pathname = usePathname();

    return (
        <>
            {
                !loaderIsVisible &&
                <>
                    <div className="appLayout">
                        <Sidebar />
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
    )
}

export default Layout;
