import Image from 'next/image'
import styles from '@/styles/Contact.module.scss'

// components
import CustomHead from '@/components/CustomHead'
import Header from '@/components/Header'

// assets
import backgroundContact from '@/public/images/background/background-contact.png'
import linkIcon from '@/public/icons/link-out-icon.svg'

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
                            <p>lance.matsuo@gmail.com</p>
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
                                    <span>linkedin</span>
                                </button>
                                <button>
                                    <Image
                                        src={linkIcon}
                                        alt='link-icon'
                                        width={"auto"}
                                        height={"auto"}
                                    />
                                    <span>instagram</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    )
}
