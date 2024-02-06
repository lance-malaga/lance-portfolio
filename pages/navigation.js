import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Navigation.module.scss'

// components
import CustomHead from '@/components/CustomHead'
import Header from '@/components/Header'

// assets
import backgroundMenu from '@/public/images/background/background-menu.png'
import navbarShapes from '@/public/images/navbar-shapes.svg'
import linkIcon from '@/public/icons/link-out-icon.svg'

export default function Navigation() {
    const navList = [
        {name: 'Home', link: '/'},
        {name: 'Work', link: '/work/development'},
        {name: 'About', link: '/about'},
        {name: 'Contact', link: '/contact'},
    ];

    return (
        <div className={styles.navigation__container}>
            <Image
				src={backgroundMenu}
				alt='background-img-navigation'
				width={"auto"}
				height={"auto"}
				className={styles.background_img}
			/>
			<CustomHead title={'Navigation'}/>
            <div className={styles.navigation__main_content}>
                <Header/>
                <main>
                    <Image
                        src={navbarShapes}
                        alt='navbar-shapes'
                        width={"auto"}
                        height={"auto"}
                        className={styles.nav_shape}
                    />
                    <div className={styles.content__container}>
                        <div className={styles.nav_list__container}>
                            {navList.map((item, index) => (
                                <Link href={item.link}>
                                    <h1>
                                        <span>0{index + 1} </span>{item.name}
                                    </h1>
                                </Link>
                            ))}
                        </div>
                        <div className={styles.link__container}>
                            <Link href='https://www.linkedin.com/in/lance-matsuo-malaga/' target='_blank'>
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
                        </div>
                    </div> 
                </main>
            </div>
        </div>
    )
}