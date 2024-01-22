import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'

import forwardIcon from '@/public/icons/forward-icon.svg'

export default function Home() {
	return (
		<main className={styles.main__container}> 
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
		</main>
	)
}
