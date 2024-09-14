import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from "@/styles/layout/layout.module.scss";
import type { Viewport } from 'next'

interface LayoutProps {
  children: React.ReactNode;
}
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'resizes-visual',
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.content}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
