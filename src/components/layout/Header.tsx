import styles from "@/styles/layout/header.module.scss";
import logo from "../../../public/images/logo_with_title_without_padding.svg";
import React, { useCallback, useEffect } from "react";
import Image from 'next/image';

const Header: React.FC = () => {
    
    const headerRef = React.useRef<HTMLHeadElement>(null);
    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY;
        scrollTop > 0 
            ? headerRef.current?.classList.replace(styles.header, styles.header_scrolled)
            : headerRef.current?.classList.replace(styles.header_scrolled, styles.header);
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll, false);
        };
      }, []);

    return <header ref={headerRef} className={styles.header}>
        <nav className={styles.container}>
            <a className={styles.logoLink}>
                <Image src={logo} loading="lazy" className={styles.logo} alt="Logo"/>
            </a>
        </nav>
    </header>
}

export default Header;