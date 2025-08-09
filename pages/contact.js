import Image from 'next/image'
import styles from '@/styles/Contact.module.scss'
import Link from 'next/link'

// components
import CustomHead from '@/components/CustomHead'
import Header from '@/components/Header'
import FadeInOnView from '@/components/FadeInOnView'
import Footer from '@/components/Footer'

// assets
import backgroundContact from '@/public/images/background/yellow-bg-contact.png'
import linkIcon from '@/public/icons/link-out-icon.svg'

export default function Contact() {
    return (
        <>
            <Image src={backgroundContact} alt='background-contact' className={styles.background_img} />
            <div className={styles.contact__container}>
                <CustomHead title={'Contact'}/>
                <div className={styles.contact__main_content}>
                    <Header/>
                    <main>
                        <FadeInOnView duration={0.8}><h1>Contact</h1></FadeInOnView>
                        <FadeInOnView duration={0.8} delay={0.5}
                            className={styles.content__container}
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

                        </FadeInOnView>
                    </main>
                    <FadeInOnView duration={0.8} delay={0.5} className={styles.footer__container}>
                        <Footer/>
                    </FadeInOnView>
                </div>
            </div>
        </>
    )
}
