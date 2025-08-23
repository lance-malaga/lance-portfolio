import Image from "next/image";
import Link from "next/link";
import styles from "./Glide.module.scss"

// components
import CustomHead from "@/components/CustomHead";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import TopButton from "@/components/TopButton";
import FadeInOnView from "@/components/FadeInOnView";
import TextLayoutVertical from "@/components/TextLayoutVertical";
import TextLayoutHorizontal from "@/components/TextLayoutHorizontal";

// assets
import linkArrow from '@/public/icons/link-arrow.svg'
import arrowDown from '@/public/icons/squiggly-arrow-down.png'
import glideBanner from "@/public/images/home/project-banners/glide-banner.jpg"
import aboutImg from "@/public/images/work/development/glide/about-img.png"
import introBannerImg from "@/public/images/work/development/glide/intro-banner.png"
// approach imgs
import problemImg from "@/public/images/work/development/glide/problem-img.png"
import solutionImg from "@/public/images/work/development/glide/solution-img.png"
// improvements imgs
import test1 from "@/public/images/work/development/glide/test-1.png"
import test2 from "@/public/images/work/development/glide/test-2.png"
import test3 from "@/public/images/work/development/glide/test-3.png"
// result imgs
import otherScreensImg from "@/public/images/work/development/glide/other-screens.png"


export default function Glide() {
	const glideData = {
		title: 'Glide Ai',
		subtitle: 'ux/ui | branding | flutter | mapbox',
		banner: glideBanner,
		overview: `Supporting aviation professionals with an AI-powered copilot that delivers instant answers, real-time weather updates, and simplified workflows.`,
	};

	return (
		<div className={styles.case_study}>
            <div>
                <CustomHead title={`Works | Glide Ai`}/>
            </div>
            <div className={styles.case_study__banner}>
                <Banner category={"development"} project={glideData} />
                <FadeInOnView>
                    <p className={styles.overview}>{glideData.overview}</p>
                </FadeInOnView>
            </div>
            <FadeInOnView className={styles.case_study__arrow}>
                <Image src={arrowDown} alt="squiggly-arrow-down"/>
            </FadeInOnView>
            <div className={styles.case_study__main_container}>
                <FadeInOnView className={styles.about_section}>
                    <TextLayoutHorizontal
                        image={aboutImg}
                        title1={'About'}
                        parag1={[
                            "Glide AI is a next-generation mobile app for pilots, aviation staff, and enthusiasts across Canada and the U.S. Acting as a digital copilot, ",
                            {text:"it streamlines flight preparation and operations", highlight: true},
                            " by answering aviation-related questions, providing live weather insights, and simplifying complex procedures into clear, accessible steps."
                        ]}
                        title2={'Role'}
                        parag2={'My role focused on leading the UX/UI redesign for the app’s second launch—introducing new features, rethinking key interfaces, and aligning graphics and branding for a more cohesive and professional experience. I also contributed to Flutter development to implement and test these improvements.'}
                        link={`https://www.glideai.io/`}
                        linkText={`Experience Glide AI`}
                    />
                </FadeInOnView>
                <FadeInOnView className={styles.links_section}>
                    <h4>Jump To</h4>
                    <Image src={linkArrow} alt="link-arrow"/>
                    <div className={styles.links}>
                        <Link href={'#approach_section'}>01 Approach & Process</Link>
                        <Link href={'#improvements_section'}>02 UI Improvements</Link>
                        <Link href={'#results_section'}>03 Design & Results</Link>
                    </div>
                </FadeInOnView>
                <FadeInOnView className={styles.banner_section}>
                    <Image src={introBannerImg} alt="intro-banner-img"/>
                </FadeInOnView>
                <div className={styles.approach_section} id="approach_section">
                    <FadeInOnView className={styles.section_header}>
                        <h1><span>01</span> approach & process</h1>
                    </FadeInOnView>
                    <div className={styles.approach_container}>
                        <FadeInOnView className={styles.problem_container}>
                            <TextLayoutVertical
                                title1={`Defining the Problem`}
                                parag1={`Aviation professionals often struggle with quick access to reliable, context-specific information from complex sources during flight preparation and operations.`}
                                image={problemImg}
                            />
                        </FadeInOnView>
                        <FadeInOnView className={styles.solution_container}>
                            <TextLayoutHorizontal 
                                image={solutionImg}
                                title1={'app solution'}
                                parag1={[
                                    "Glide AI consolidates these tools into one streamlined platform. It ",
                                    { text: "delivers plain-language answers, organizes resources logically, and provides real-time updates",  highlight: true },
                                    "—reducing cognitive load and improving decision-making during operations."
                                ]}
                            />
                        </FadeInOnView>
                    </div>
                </div>
                <div className={styles.improvements_section} id="improvements_section">
                    <FadeInOnView className={styles.section_header}>
                        <h1><span>02</span> ui improvements</h1>
                    </FadeInOnView>
					<div className={styles.improvements_container}>
						<FadeInOnView>
							<TextLayoutVertical
								title1={`User Testing`}
								parag1={`Initial designs were tested to evaluate clarity, usability, and efficiency. Feedback highlighted key friction points, which shaped the redesigned interface:`}
								image={test1}
							/>
						</FadeInOnView>
                        <FadeInOnView>
                            <Image src={test2} alt="user-test-img"/>
                        </FadeInOnView>
                        <FadeInOnView>
                            <Image src={test3} alt="user-test-img"/>
                        </FadeInOnView>
					</div>
                </div>
                <div className={styles.results_section} id="results_section">
                    <FadeInOnView className={styles.section_header}>
                        <h1><span>03</span> design & results</h1>
                    </FadeInOnView>
                    <FadeInOnView>
                        <TextLayoutVertical
                            image={otherScreensImg}
                            title1={'Results'}
                            parag1={`The redesign gave Glide AI a more cohesive, premium, and aviation-aligned brand feel. Internal testing confirmed improvements in clarity, navigation flow, and feature accessibility—allowing pilots and aviation staff to focus on flying, not fumbling with fragmented tools.`}
                        />
                    </FadeInOnView>
                </div>
            </div>
            <FadeInOnView className={styles.case_study__footer}>
                <Footer/>
            </FadeInOnView>
            <TopButton/>
        </div>
	)
}