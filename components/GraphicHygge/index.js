import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './GraphicHygge.module.scss'
// data
import { work_hygge } from '@/data/work_hygge'
// assets
import closeIcon from '@/public/icons/close-btn.svg'
import linkIcon from '@/public/icons/link-out-icon.svg'
import mockup1 from '@/public/images/work/graphic/work-hygge/branding.png'
import mockup2 from '@/public/images/work/graphic/work-hygge/flyer.png'
import mockup3 from '@/public/images/work/graphic/work-hygge/newsletters.png'
import FadeInOnView from '../FadeInOnView'

export default function GraphicHygge({category}) {
	const project = work_hygge;

    return (
        <div>
            <motion.div 
                className={styles.project__header}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div>
                    <h2>{project.title}</h2>
                    <p>{project.subtitle}</p>
                </div>
                <Link href={`/work/${category}`}>
                    <Image
                        src={closeIcon}
                        alt='close-icon'
                        width={"auto"}
                        height={"auto"}
                    />
                </Link>
            </motion.div>
            <motion.div 
                className={styles.portait__layout}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
                <Image
                    src={project.banner}
                    alt='banner-img'
                    width={470}
                    height={550}
                    className={styles.banner}
                />
                <div className={styles.overview}>
                    <p>
						Hygge Design House is a home and lifestyle brand focused on Scandinavian-inspired furniture that promotes comfort, simplicity, and intentional living. As part of the design team, I’ve contributed to strengthening the brand’s visual identity across packaging, print, and digital assets.
                    </p>
					<p>
						<strong>ROLE</strong> <br/>GRAPHIC, UX/UI DESIGNER
						<br/><br/><strong>TOOLS</strong> <br/>FIGMA, ADOBE CREATIVE SUITE (ILLUSTRATOR, PHOTOSHOP, INDESIGN, AFTER EFFECTS, PREMIERE PRO), SHOPIFY
					</p>
                    { project.link && 
                        <Link href={project.link} target='_blank' className={styles.link__out}>
                            <Image
                                src={linkIcon}
                                alt={'link-out-icon'}
                                width={25}
                                height={25}
                            />
                            Visit Hygge Design House
                        </Link>
                    }
                </div>
            </motion.div>
			<FadeInOnView className={styles.other__container}>
                <h4>BRANDING</h4>
                <Image
                    src={mockup1}
                    alt={'branding-image'}
                    width={"auto"}
                    height={"auto"}
                />
            </FadeInOnView>
			<FadeInOnView className={styles.other__container}>
                <h4>FLYER PROJECT</h4>
                <Image
                    src={mockup2}
                    alt={'flyer-image'}
                    width={"auto"}
                    height={"auto"}
                />
            </FadeInOnView>
			<FadeInOnView className={styles.other__container}>
                <h4>NEWSLETTERS</h4>
                <Image
                    src={mockup3}
                    alt={'newsletter-image'}
                    width={"auto"}
                    height={"auto"}
                />
            </FadeInOnView>
        </div>
    )
}