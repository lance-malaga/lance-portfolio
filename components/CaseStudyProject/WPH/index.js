import Link from 'next/link'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
import styles from './wph.module.scss'
// components
import CustomHead from '@/components/CustomHead'
import FadeInOnView from '@/components/FadeInOnView'
import Footer from '@/components/Footer'
import TopButton from '@/components/TopButton'
// assets
import closeIcon from '@/public/icons/close-btn.svg'
import linkIcon from '@/public/icons/link-out-icon.svg'
import bannerImg from '@/public/images/work/development/work03-wph/banner.png'
import branding from '@/public/images/work/development/work03-wph/branding.png'
import wireframes from '@/public/images/work/development/work03-wph/wireframes.png'
import results1 from '@/public/images/work/development/work03-wph/results 1.png'
import results2 from '@/public/images/work/development/work03-wph/results 2.png'
import results3 from '@/public/images/work/development/work03-wph/results 3.png'
import results4 from '@/public/images/work/development/work03-wph/results 4.png'
import results5 from '@/public/images/work/development/work03-wph/results 5.png'
import results6 from '@/public/images/work/development/work03-wph/results 6.png'

export default function WestPointHotel() {
	const projectLink = 'https://www.figma.com/proto/WzznboxjDFKUenSajAT4V6/West-Point-Hotel---Prototype?type=design&node-id=426-16312&t=fSxoymWYqUELEBM4-1&scaling=min-zoom&page-id=1%3A3&starting-point-node-id=516%3A12550&mode=design';

    return (
		<>
			<div className={styles.case_study}>
				<div>
					<CustomHead title={`Works | Spurt`}/>
				</div>
				<motion.div 
					className={styles.project__header}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<div>
						<h2>WEST POINT HOTEL</h2>
						<p>WORDPRESS,UX/UI, BRANDING</p>
					</div>
					<Link href={`/work/development`}>
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
						src={bannerImg}
						alt='banner-img'
						width={570}
						height={550}
						className={styles.banner}
					/>
					<div className={styles.overview}>
						<p>
							West Point Hotel is a luxury 5-star resort in the heart of the Caribbean, designed for young professionals, couples, and business travelers seeking a refined escape. The hotel embodies modern elegance and relaxation, offering world-class amenities and oceanfront experiences. The website design reflects this sophistication through a minimalist, high-contrast aesthetic that mirrors the resort’s exclusive and contemporary character.
						</p>
						<p>
							<strong>ROLE</strong> <br/>WORDPRESS DEVELOPER, UX/UI DESIGNER
							<br/><br/><strong>TOOLS</strong> <br/>WORDPRESS, FIGMA, ADOBE (ILLUSTRATOR, PHOTOSHOP)
						</p>
						<Link href={projectLink} target='_blank' className={styles.link__out}>
							<Image
								src={linkIcon}
								alt={'link-out-icon'}
								width={25}
								height={25}
							/>
							VIEW PROTOTYPE
						</Link>
					</div>
				</motion.div>
				<FadeInOnView className={styles.other__container}>
					<h4>BRANDING</h4>
					<Image
						src={branding}
						alt={'branding-image'}
						width={"auto"}
						height={"auto"}
					/>
				</FadeInOnView>
				<FadeInOnView className={styles.other__container}>
					<h4>WIREFRAMES</h4>
					<Image
						src={wireframes}
						alt={'flyer-image'}
						width={"auto"}
						height={"auto"}
					/>
				</FadeInOnView>
				<FadeInOnView className={styles.other__container}>
					<h4>RESULTS</h4>
				</FadeInOnView>
			</div>
			<div className={styles.marquee__container}>
				<Marquee gradient={false} speed={100} delay={1.5} pauseOnHover>
					<Image className={styles.first_img} src={results1} alt={"design-1-img"}/>
					<Image src={results2} alt={"design-2-img"}/>
					<Image src={results3} alt={"design-3-img"}/>
					<Image src={results4} alt={"design-4-img"}/>
					<Image src={results5} alt={"design-5-img"}/>
					<Image src={results6} alt={"design-6-img"}/>
				</Marquee>
			</div>
			<FadeInOnView className={styles.case_study__footer}>
				<Footer/>
			</FadeInOnView>
			<TopButton/>
		</>
    )
}