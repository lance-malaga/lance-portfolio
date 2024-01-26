import Image from 'next/image'
import styles from '@/styles/Home.module.scss'

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
			<Header/>
			<main className={styles.main__container}> 
				<div className={styles.left__container}>
					<h1>Lance Malaga</h1>
					<h4>front-end web & app developer, ux/ui & graphic designer.</h4>
					<div className={styles.buttons__container}>
						<button>
							<Image
								src={forwardIcon}
								alt={'forward-icon'}
								width={18}
								height={12}
							/>
							<p>see projects</p>
						</button>
						<button>
							<Image
								src={forwardIcon}
								alt={'forward-icon'}
								width={18}
								height={12}
							/>
							<p>more about me</p>
						</button>
					</div>

				</div>
				<div className={styles.right__container}>
					<ShapeAnimation/>
				</div>
			</main>
		</div>
	)
}
