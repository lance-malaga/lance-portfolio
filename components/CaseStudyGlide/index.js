import Link from 'next/link'
import Image from 'next/image'
import styles from './CaseStudyGlide.module.scss'
// data
import { work_glide } from '@/data/work_glide'
// assets
import closeIcon from '@/public/icons/close-btn.svg'
import linkIcon from '@/public/icons/link-out-icon.svg'
import mockup1 from '@/public/images/work/development/work02-glide/glide-mockup-01.png'
import mockup2 from '@/public/images/work/development/work02-glide/glide-mockup-02.png'
import mockup3 from '@/public/images/work/development/work02-glide/glide-mockup-03.png'

export default function CaseStudyGlide({category}) {
	const project = work_glide;

    return (
        <div>
            <div className={styles.project__header}>
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
            </div>
            <div className={styles.portait__layout}>
                <Image
                    src={project.banner}
                    alt='banner-img'
                    width={470}
                    height={550}
                    className={styles.banner}
                />
                <div className={styles.overview}>
					<h1>The Essential Aviation AI Copilot</h1>
                    <p>
						Glide AI is a cutting-edge mobile app <span className={styles.highligt}>designed for aviation professionals and enthusiasts.</span> As an AI-powered copilot, it answers aviation-related questions, provides real-time weather updates, and simplifies complex aviation processes for users in Canada and the U.S.
                    </p>
					<p>
						<strong>ROLE</strong> <br/>FRONT-END DEVELOPER, UX/UI DESIGNER
						<br/><br/><strong>TOOLS</strong> <br/>FLUTTER, FIGMA
					</p>
                    { project.link && 
                        <Link href={project.link} target='_blank' className={styles.link__out}>
                            <Image
                                src={linkIcon}
                                alt={'link-out-icon'}
                                width={25}
                                height={25}
                            />
                            EXPERIENCE GLIDE AI
                        </Link>
                    }
                </div>
            </div>
            <div className={styles.intro__container}>
                <div>
                    <h4>PROBLEM</h4>
                    <p>Aviation professionals often struggle with quick <span className={styles.highligt}>access to reliable, context-specific information</span> from complex sources during flight preparation and operations.</p>
                    <h4>SOLUTION</h4>
                    <p>Glide AI <span className={styles.highligt}>empowers</span> aviation professionals by consolidating critical data and tools into a single app, delivering instant, plain-language answers, real-time insights, and reducing cognitive load during operations.</p>
                </div>
                <Image
                    src={mockup1}
                    alt={'other-screens-image'}
                    width={"auto"}
                    height={"auto"}
                />
            </div>
			<div className={styles.ui__container}>
                <h4>UI IMPROVEMENT EXAMPLES</h4>
				<div>
					<Image
						src={mockup2}
						alt={'mockup-image'}
						width={215}
						height={435}
					/>
					<div>
						<div>
							<strong>REQUIREMENT</strong>
							<p>Display both free and paid suggested questions pilots can ask Glide AI.</p>
						</div>
						<div>
							<strong>SOLUTION</strong>
							<p>Differentiated free and Pro questions, added category labels, and included icons to improve visual understanding and provide context for each question type.</p>
						</div>
						<div>
							<strong>GOAL</strong>
							<p>Streamline navigation and enhance usability, ensuring pilots can quickly and intuitively access the information they need.</p>
						</div>
					</div>
				</div>
            </div>
			<div className={styles.other__container}>
                <h4>OTHER SCREENS</h4>
                <Image
                    src={mockup3}
                    alt={'other-screens-image'}
                    width={"auto"}
                    height={"auto"}
                />
            </div>
        </div>
    )
}