import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './TopButton.module.scss';

import topIcon from '@/public/icons/back-to-top-icon.svg'

export default function TopButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`${styles.top_button__container} ${showButton ? styles.show__button : ''}`}
            onClick={scrollToTop}
        >
            <Image
                src={topIcon}
                alt='back-to-top-icon'
                width={45}
                height={45}
            />
        </button>
    )
}