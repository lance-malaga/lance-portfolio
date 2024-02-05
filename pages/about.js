import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/About.module.scss'

// components
import CustomHead from '@/components/CustomHead'
import Header from '@/components/Header'

// assets
import backgroundAbout from '@/public/images/background/background-about.png'
import profile_img from '@/public/images/profile.svg'
import download_icon from '@/public/icons/download-icon.svg'

export default function About() {
    return (
        <div className={styles.about__container}>
            <Image
				src={backgroundAbout}
				alt='background-img-about'
				width={"auto"}
				height={"auto"}
				className={styles.background_img}
			/>
			<CustomHead title={'About'}/>
			<Header/>
            <main>
                <Image
                    src={profile_img}
                    alt='profile'
                    width={"auto"}
                    height={"auto"}
                    className={styles.profile_img}
                />
                <div>
                    <h1>About</h1>
                    <p>
                        Hello, I'm Lance—a versatile professional with a proven track record in crafting impactful websites, mobile applications, and designs. My journey through Graphic Design, UI/UX Design, Frontend Development and Architecture has equipped me with a diverse skill set. I'm always eager to learn new things, and this passion for continuous growth fuels my ability to approach challenges from unique perspectives, fostering creativity and innovation in both development and design. I thrive on delivering solutions that not only meet but exceed the expectations of my clients.
                    </p>
                    <Link href={'/resume.pdf'} target='_blank' download='resume'>
                        <button>
                            <Image
                                src={download_icon}
                                alt='download-icon'
                                width={18}
                                height={18}
                            />
                            <span>resume</span>
                        </button>
                    </Link>
                </div>
            </main>
        </div>
    )
}