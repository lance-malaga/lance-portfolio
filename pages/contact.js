import Image from 'next/image'
import styles from '@/styles/Contact.module.scss'
import { motion } from 'framer-motion'

// components
import CustomHead from '@/components/CustomHead'
import Header from '@/components/Header'

// assets
import backgroundContact from '@/public/images/background/background-contact.png'
import linkIcon from '@/public/icons/link-out-icon.svg'
import Link from 'next/link'

export default function Contact() {
    return (
        <div className={styles.contact__container}>
            <Image
				src={backgroundContact}
				alt='background-img-contact'
				width={"auto"}
				height={"auto"}
				className={styles.background_img}
			/>
			<CustomHead title={'Contact'}/>
            <div className={styles.contact__main_content}>
                <Header/>
                <main>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Contact
                    </motion.h1>
                    <motion.div 
                        className={styles.content__container}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    >
                        <div className={styles.mail__container}>
                            <h4>Mail</h4>
                            <a href='mailto: lance.matsuo@gmail.com' >lance.matsuo@gmail.com</a>
                        </div>
                        <div className={styles.social__container}>
                            <h4>Social Media</h4>
                            <div className={styles.link__container}>
                                <button>
                                    <Image
                                        src={linkIcon}
                                        alt='link-icon'
                                        width={"auto"}
                                        height={"auto"}
                                    />
                                    <Link href={'https://www.linkedin.com/in/lance-malaga/'} target='_blank'>
                                        <span>linkedin</span>
                                    </Link>
                                </button>
                                <button>
                                    <Image
                                        src={linkIcon}
                                        alt='link-icon'
                                        width={"auto"}
                                        height={"auto"}
                                    />
                                    <Link href={'https://www.instagram.com/lancemalaga/'} target='_blank'>
                                        <span>instagram</span>
                                    </Link>
                                </button>
                            </div>
                        </div>

                    </motion.div>
                </main>
            </div>
        </div>
    )
}
