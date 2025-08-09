import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/About.module.scss'
import { motion } from 'framer-motion'

// components
import CustomHead from '@/components/CustomHead'
import Header from '@/components/Header'
import FadeInOnView from '@/components/FadeInOnView'
import Footer from '@/components/Footer'

// assets
import backgroundAbout from '@/public/images/background/yellow-bg-about.png'
import profile_img from '@/public/images/profile.png'
import code_icon from '@/public/icons/code.png'
import color_icon from '@/public/icons/color.png'

export default function About() {
    return (
        <>
            <Image src={backgroundAbout} alt='background-contact' className={styles.background_img} />
            <div className={styles.about__container}>
                <CustomHead title={'About'}/>
                <div className={styles.about__main_content}>
                    <Header/>
                    <main>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Image
                                src={profile_img}
                                alt='profile'
                                width={440}
                                height={430}
                                className={styles.profile_img}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        >
                            <h1>About</h1>
                            <p>
                                Hello, I'm Lance—a versatile professional with a proven track record in crafting impactful websites, mobile applications, and designs. My journey through Graphic Design, UI/UX Design, Frontend Development and Architecture has equipped me with a diverse skill set. I'm always eager to learn new things, and this passion for continuous growth fuels my ability to approach challenges from unique perspectives, fostering creativity and innovation in both development and design. I thrive on delivering solutions that not only meet but exceed the expectations of my clients.
                            </p>
                            <div className={styles.resume_container}>
                                <Link href={'/Resume - Malaga, Lance [Developer].pdf'} target='_blank'>
                                    <button>
                                        <Image
                                            src={code_icon}
                                            alt='download-icon'
                                            width={28}
                                            height={28}
                                        />
                                        <span>developer resume</span>
                                    </button>
                                </Link>
                                <Link href={'/Resume - Malaga, Lance [Designer].pdf'} target='_blank'>
                                    <button>
                                        <Image
                                            src={color_icon}
                                            alt='download-icon'
                                            width={28}
                                            height={28}
                                        />
                                        <span>designer resume</span>
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </main>
                    <FadeInOnView className={styles.footer__container}>
                        <Footer/>
                    </FadeInOnView>
                </div>
            </div>
        </>
    )
}