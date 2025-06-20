import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import { motion } from 'framer-motion'

// components
import Header from '@/components/Header'
import CustomHead from '@/components/CustomHead'
import ShapeAnimation from '@/components/ShapeAnimation'

// assets
import forwardIcon from '@/public/icons/forward-icon.svg'
import backgroundHome from '@/public/images/background/background-home.png'

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
						<div className={styles.buttons__container}>
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
			</div>
		</div>
	)
}
