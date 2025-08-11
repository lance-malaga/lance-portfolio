import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Navigation.module.scss'
import { motion } from 'framer-motion'

// components
import CustomHead from '@/components/CustomHead'
import Header from '@/components/Header'

// assets
import backgroundMenu from '@/public/images/background/yellow-bg-nav.png'
import linkIcon from '@/public/icons/link-out-icon.svg'

export default function Navigation() {
    const navList = [
        {name: 'Home', link: '/'},
        {name: 'Work', link: '/work/graphic-design'},
        {name: 'About', link: '/about'},
        {name: 'Contact', link: '/contact'},
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // delay between children
                delayChildren: 0.3,   // initial delay
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 80 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <>
            <Image src={backgroundMenu} alt='background-menu-yellow' className={styles.background_img} />
            <div className={styles.navigation__container}>
                <CustomHead title={'Navigation'}/>
                <div className={styles.navigation__main_content}>
                    <Header/>
                    <main>
                        <div className={styles.content__container}>
                            <motion.div
                                className={styles.nav_list__container}
                                variants={containerVariants}
                                initial="hidden"
                                animate="show"
                            >
                                {navList.map((item, index) => (
                                    <motion.div variants={itemVariants} key={index}>
                                        <Link href={item.link}>
                                            <h1>
                                                <span>0{index + 1} </span>{item.name}
                                            </h1>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                            <motion.div
                                className={styles.link__container}
                                initial={{ opacity: 0, x: 80 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 + navList.length * 0.1, duration: 0.8, ease: "easeOut" }}
                            >
                                <Link href='https://www.linkedin.com/in/lance-malaga/' target='_blank'>
                                    <Image
                                        src={linkIcon}
                                        alt='link-icon'
                                        width={"auto"}
                                        height={"auto"}
                                    />
                                    <span>linkedin</span>
                                </Link>
                                <Link href='https://www.instagram.com/lancemalaga/' target='_blank'>
                                    <Image
                                        src={linkIcon}
                                        alt='link-icon'
                                        width={"auto"}
                                        height={"auto"}
                                    />
                                    <span>instagram</span>
                                </Link>
                            </motion.div>
                        </div> 
                    </main>
                </div>
            </div>
        </>
    )
}