import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={styles.navigation} data-framer-name="Navigation">
      <div className={styles.container}>
        <nav className={styles.desktop} data-framer-name="Desktop">
          <div className={styles.headerContainer} data-framer-name="Container">
            <div className={styles.logoSection} data-framer-name="Top">
              <Link href="/" className={styles.logoLink} data-framer-name="Logo">
                <div className={styles.logoIcon} aria-hidden="true">
                  <div className={styles.svgContainer}>
                    <svg viewBox="0 0 40 40" preserveAspectRatio="none">
                      <defs>
                        <svg id="svg-logo" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="currentColor"/>
                          <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" fill="white"/>
                        </svg>
                      </defs>
                      <use href="#svg-logo"></use>
                    </svg>
                  </div>
                </div>
                <div className={styles.logoText} data-framer-name="Logo Text">
                  <p>Aireal</p>
                </div>
              </Link>
            </div>
            
            <div className={styles.navLinks} data-framer-name="Links">
              <div className={styles.linkContainer}>
                <Link href="#feature" className={styles.navLink}>
                  <div className={styles.linkText}>
                    <p>Features</p>
                  </div>
                </Link>
              </div>
              
              <div className={styles.linkContainer}>
                <Link href="#about" className={styles.navLink}>
                  <div className={styles.linkText}>
                    <p>About</p>
                  </div>
                </Link>
              </div>
              
              <div className={styles.linkContainer}>
                <Link href="#testimonial" className={styles.navLink}>
                  <div className={styles.linkText}>
                    <p>Testimonial</p>
                  </div>
                </Link>
              </div>
              
              <div className={styles.linkContainer}>
                <Link href="#pricing" className={styles.navLink}>
                  <div className={styles.linkText}>
                    <p>Pricing</p>
                  </div>
                </Link>
              </div>
              
              <div className={styles.linkContainer}>
                <Link href="#faq" className={styles.navLink}>
                  <div className={styles.linkText}>
                    <p>FAQ</p>
                  </div>
                </Link>
              </div>
            </div>
            
            <div className={styles.ctaContainer}>
              <Link href="/contact" className={styles.ctaButton}>
                <div className={styles.ctaText} data-framer-name="Text">
                  <div className={styles.ctaTextMain} data-framer-name="Text 1">
                    <p>Contact</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Header; 