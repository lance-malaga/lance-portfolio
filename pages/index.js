import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'

// components
import Header from '@/components/Header'
import CustomHead from '@/components/CustomHead'
import Footer from '@/components/Footer'
import FadeInOnView from '@/components/FadeInOnView'
import CaseStudyItem from '@/components/CaseStudyItem'
import ShapeFlip from '@/components/ShapeFlip'

// assets
import forwardIcon from '@/public/icons/forward-icon.svg'
import linkIcon from '@/public/icons/link-out-icon.svg'
import asteriskIcon from '@/public/icons/asterisk-icon.svg'
import circleArrow from '@/public/icons/circle-arrow.svg'
import stripShapes from '@/public/images/home/strip-shapes.png'
import stripShapes2 from '@/public/images/home/strip-shapes-2.png'
import exploreMore from '@/public/images/home/explore-more.png'
import redBgBlur from '@/public/images/background/red-bg-group.png'
import yellowBgBlur from '@/public/images/background/yellow-bg-group.png'
import spurtBanner from "@/public/images/home/project-banners/spurt-banner.jpg"
import hyggeBanner from "@/public/images/home/project-banners/hygge-banner.jpg"
import squigglyLine from '@/public/icons/squiggly-line.svg'

// data
import { shapes } from '@/data/shapes'

export default function Home() {
	return (
		<>
			<Image src={redBgBlur} alt='background-img-red' className={`${styles.background_img} ${styles.background_img__red}`} />
			<Image src={yellowBgBlur} alt='background-img-yellow' className={`${styles.background_img} ${styles.background_img__yellow}`} />
			<div className={styles.home__container}>
				<CustomHead/>
				<div className={styles.home__main_content}>
					<Header/>
					<main>
						<FadeInOnView className={styles.intro__container}>
							<div className={styles.intro__top_section}>
								<div className={styles.intro__row1}>
									<div className={styles.shapes__container}>
										{shapes.slice(0, 3).map((data, index) => (
											<ShapeFlip key={index} data={data} />
										))}
									</div>
									<h1>hello there</h1>
								</div>
								<div className={styles.intro__row2}>
									<h1>my name is</h1>
									<div className={styles.shapes__container}>
										{shapes.slice(3, 5).map((data, index) => (
											<ShapeFlip key={index} data={data} />
										))}
									</div>
								</div>
							</div>
							<div className={styles.intro__btm_section}>
								<div className={styles.intro__left_content}>
									<p className={styles.description}>I’m a <span>graphic designer, ux/ui designer</span> & <span>front-end developer</span></p>
									<div className={styles.buttons__container}>
										<Link href={"#case-studies-section"}>
											<Image
												src={circleArrow}
												alt={'forward-icon'}
											/>
											<p>case studies</p>
										</Link>
									</div>
								</div>
								<div className={styles.intro__right_content}>
									<div className={styles.intro__row3}>
										<div className={styles.shapes__container}>
											{shapes.slice(5, 7).map((data, index) => (
												<ShapeFlip key={index} data={data} />
											))}
										</div>
										<h1 className={styles.name}>lance</h1>
									</div>
									<div className={styles.intro__row4}>
										<h1>malaga</h1>
										<div className={styles.shapes__container}>
											<div className={styles.shape__instructions}>
												<ShapeFlip data={shapes[7]} />
												<div className={styles.hover__container}>
													<Image
														src={squigglyLine}
														alt={"squigglyLine"}
														width={"auto"}
														height={"auto"}
													/>
													<p>hover over me</p>
												</div>
											</div>
											<ShapeFlip data={shapes[8]} />
										</div>
									</div>
								</div>
							</div>
						</FadeInOnView>
						<FadeInOnView className={styles.marquee__container}>
							<Marquee gradient={false} speed={100} delay={1.5}>
								<Image
									src={stripShapes}
									alt={"strip-shapes"}
									height={40}
								/>
								<h1>WELCOME TO MY STUDIO</h1>
								<Image
									src={stripShapes2}
									alt={"strip-shapes"}
									height={40}
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
					</main>
					<FadeInOnView className={styles.footer__container}>
						<Footer/>
					</FadeInOnView>
				</div>
			</div>
		</>
	)
}
