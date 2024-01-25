"use client"
import { FunctionComponent, ReactElement, useState, useRef, useEffect } from 'react';
import styles from '@/app/styles/Navbar.module.scss';
import useResponsive from '../../hooks/useResponsiveness';
import { WindowSizes } from '@/app/constants/windowSizes';
import { CalendarIcon, CaretDownIcon, HamburgerIcon, LogoIcon, NotificationIcon, SearchIcon } from '../SVGs/SVGicons';
import Image from 'next/image';
import images from '@/public/images';

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = (): ReactElement => {

    const windowRes = useResponsive();
    const onMobile = windowRes.width && windowRes.width < WindowSizes.Tablet_Size;

    return (
        <>
            {
                typeof (onMobile) == "boolean" && onMobile &&
                <div className={styles.mNavbarContainer}>
                    <span className={styles.seachIcon}><SearchIcon /></span>
                    <span className={styles.logoIcon}><LogoIcon /></span>
                    <span className={styles.navIcon}><HamburgerIcon /></span>
                </div>
            }
            {
                typeof (onMobile) == "boolean" && !onMobile &&
                <div className={styles.navbarContainer}>
                    <h2>Dashboard</h2>
                    <div className={styles.rhsSection}>
                        <div className={styles.searchInputContainer}>
                            <SearchIcon />
                            <input type="search" placeholder='Search...' />
                        </div>
                        <div className={styles.dateSection}>
                            <CalendarIcon />
                            November 15, 2023
                        </div>
                        <span className={styles.notificationIcon}>
                            <NotificationIcon />
                        </span>
                        <div className={styles.profileSection}>
                            <span className={styles.profileImage}>
                                <Image src={images.profile_photo} alt='User profile photo' />
                            </span>
                            <div className={styles.userInfo}>
                                <h5>Justin Bergson</h5>
                                <p>Justin@gmail.com</p>
                            </div>
                            <CaretDownIcon />
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Navbar;