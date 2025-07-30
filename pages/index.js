import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'

// components
import Header from '@/components/Header'
import CustomHead from '@/components/CustomHead'
import ShapeAnimation from '@/components/ShapeAnimation'
import Footer from '@/components/Footer'
import FadeInOnView from '@/components/FadeInOnView'
import CaseStudyItem from '@/components/CaseStudyItem'

// assets
import forwardIcon from '@/public/icons/forward-icon.svg'
import linkIcon from '@/public/icons/link-out-icon.svg'
import asteriskIcon from '@/public/icons/asterisk-icon.svg'
import circleArrow from '@/public/icons/circle-arrow.svg'
import stripShapes from '@/public/images/home/strip-shapes.png'
import stripShapes2 from '@/public/images/home/strip-shapes-2.png'
import exploreMore from '@/public/images/home/explore-more.png'
import backgroundHome from '@/public/images/background/background-home-new.png'
import spurtBanner from "@/public/images/home/project-banners/spurt-banner.jpg"
import hyggeBanner from "@/public/images/home/project-banners/hygge-banner.jpg"

export default function Home() {
	return (
		<div className={styles.home__container}>
			<Image
				src={backgroundHome}
				alt='background-img-home'
				width={"auto"}
				height={"auto"}
				className={styles.background_img}
			/>
			<CustomHead/>
			<div className={styles.home__main_content}>
				<Header/>
				<main className={styles.main__container}> 
					<motion.div 
						className={styles.left__container}
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<h1>Lance Malaga</h1>
						<h4>full stack developer, ux/ui & graphic designer.</h4>
						{/* <div className={styles.buttons__container}>
							<Link href={`/work/development`}>
								<Image
									src={forwardIcon}
									alt={'forward-icon'}
									width={18}
									height={12}
								/>
								<p>see projects</p>
							</Link>
							<Link href={'/about'}>
								<Image
									src={forwardIcon}
									alt={'forward-icon'}
									width={18}
									height={12}
								/>
								<p>more about me</p>
							</Link>
						</div> */}
						<div className={styles.buttons__container}>
							<Link href={"#case-studies-section"}>
								<Image
									src={circleArrow}
									alt={'forward-icon'}
								/>
								<p>case studies</p>
							</Link>
						</div>
					</motion.div>
					<motion.div 
						className={styles.right__container}
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<ShapeAnimation/>
					</motion.div>
				</main>
				<FadeInOnView className={styles.marquee__container}>
					<Marquee gradient={false} speed={100} delay={1.5}>
						<Image
							src={stripShapes}
							alt={"strip-shapes"}
						/>
						<h1>WELCOME TO MY STUDIO</h1>
						<Image
							src={stripShapes2}
							alt={"strip-shapes"}
						/>
						<h1>WELCOME TO MY STUDIO</h1>
					</Marquee>
					<div id='case-studies-section'></div>
				</FadeInOnView>
				<FadeInOnView className={styles.case_study__container}>
					<div className={styles.case_study__header}>
						<Image src={asteriskIcon} alt='asterisk-icon'/>
						<h2>CASE STUDIES</h2>
					</div>
					<div className={styles.case_study__list}>
						<Link href={'work/ux-ui-design/hygge'}>
							<CaseStudyItem
								image={hyggeBanner}
								number={"01"}
								title={"Hygge Design House"}
								tags={["ux/ui", "web design", "branding"]}
							/>
						</Link>
						<Link href={'work/development/spurt'}>
							<CaseStudyItem
								image={spurtBanner}
								number={"02"}
								title={"Spurt"}
								tags={["mobile development", "ux/ui", "graphic design", "branding"]}
							/>
						</Link>
					</div>
				</FadeInOnView>
				<FadeInOnView className={styles.explore__container}>
					<Image
						src={exploreMore}
						alt='explore-more-img'
						className={styles.explore_img}
					/>
					<div className={styles.link__container}>
						<Link href='/work/graphic-design'>
							<Image
								src={linkIcon}
								alt='link-icon'
								width={"auto"}
								height={"auto"}
							/>
							<span>see other work</span>
						</Link>
						<Link href='/contact' >
							<Image
								src={linkIcon}
								alt='link-icon'
								width={"auto"}
								height={"auto"}
							/>
							<span>contact me</span>
						</Link>
					</div>
				</FadeInOnView>
				<FadeInOnView className={styles.footer__container}>
					<Footer/>
				</FadeInOnView>
			</div>
		</div>
	)
}
