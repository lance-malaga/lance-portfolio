import Image from 'next/image'
import styles from '@/styles/Contact.module.scss'

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
                    <h1>Contact</h1>
                    <div className={styles.content__container}>
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

                    </div>
                </main>
            </div>
        </div>
    )
}
