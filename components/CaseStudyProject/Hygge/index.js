import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import styles from "./Hygge.module.scss"

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
import hyggeBanner from "@/public/images/home/project-banners/hygge-banner.jpg"
import aboutImg from "@/public/images/work/ux-ui/hygge/about-img.jpg"
import introBannerImg from "@/public/images/work/ux-ui/hygge/intro-banner.jpg"
// approach imgs
import userSegmentImg from "@/public/images/work/ux-ui/hygge/user-segment-notes.png"
import siteMapImg from "@/public/images/work/ux-ui/hygge/site-map-img.jpg"
import taskFlowImg from "@/public/images/work/ux-ui/hygge/task-flow-img.jpg"
import wireframesImg from "@/public/images/work/ux-ui/hygge/wireframes.jpg"
// branding imgs
import branding1 from "@/public/images/work/ux-ui/hygge/branding-1.jpg"
import branding2 from "@/public/images/work/ux-ui/hygge/branding-2.jpg"
import branding3 from "@/public/images/work/ux-ui/hygge/branding-3.jpg"
// result imgs
import design1 from "@/public/images/work/ux-ui/hygge/1-design.png"
import design2 from "@/public/images/work/ux-ui/hygge/2-design.jpg"
import design3 from "@/public/images/work/ux-ui/hygge/3-design.jpg"
import design4 from "@/public/images/work/ux-ui/hygge/4-design.png"
import design5 from "@/public/images/work/ux-ui/hygge/5-design.jpg"
import design6 from "@/public/images/work/ux-ui/hygge/6-design.png"


export default function Hygge() {
	const hyggeData = {
		title: 'Hygge Design House',
		subtitle: 'ux/ui | web design | branding',
		banner: hyggeBanner,
		overview: `Elevating a Scandinavian-inspired home and lifestyle brand through refined user experience, updated visual identity, and a more inviting online presence.`,
	};

	return (
		<div className={styles.case_study}>
            <div>
                <CustomHead title={`Works | Hygge Design House`}/>
            </div>
            <div className={styles.case_study__banner}>
                <Banner category={"ux-ui-design"} project={hyggeData} />
                <FadeInOnView>
                    <p className={styles.overview}>{hyggeData.overview}</p>
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
                            "Hygge Design House is a Canadian home and lifestyle brand offering ",
                            {text:"Scandinavian-style furniture and thoughtfully curated goods", highlight: true},
                            "—from mugs and candles to floral arrangements and textiles. The brand emphasizes comfort, simplicity, and intentional living while supporting Canadian makers and artisans."
                        ]}
                        title2={'Role'}
                        parag2={'I collaborated with the team to enhance Hygge’s visual identity across digital and physical touch points. My work focused on improving user experience, establishing stronger brand consistency, and transforming the website into a warmer, more elevated reflection of the in-store experience.'}
                        link={`https://hyggedesignhouse.ca/`}
                        linkText={`Visit Hygge Design House`}
                    />
                </FadeInOnView>
                <FadeInOnView className={styles.links_section}>
                    <h4>Jump To</h4>
                    <Image src={linkArrow} alt="link-arrow"/>
                    <div className={styles.links}>
                        <Link href={'#approach_section'}>01 Approach & Process</Link>
                        <Link href={'#branding_section'}>02 Branding</Link>
                        <Link href={'#web_design_section'}>03 Website Design</Link>
                    </div>
                </FadeInOnView>
                <FadeInOnView className={styles.banner_section}>
                    <Image src={introBannerImg} alt="intro-banner-img"/>
                </FadeInOnView>
                <div className={styles.approach_section} id="approach_section">
                    <FadeInOnView className={styles.section_header}>
                        <h1><span>01</span> approach & process</h1>
                    </FadeInOnView>
                    <FadeInOnView className={styles.user_segment_container}>
                        <TextLayoutHorizontal 
							image={userSegmentImg}
							title1={'user segment'}
							parag1={[
								"I created a user segment based on insights from Hygge’s in-store interactions and social media engagement. ",
								{ text: "Customers are style-conscious but value simplicity and warmth",  highlight: true },
								" in their homes. Many are drawn to the brand’s Scandinavian-inspired aesthetic, neutral tones, and commitment to local makers. They appreciate a sense of curation and intentionality—wanting their homes to feel both elevated and personal."
							]}
							parag2={[
								"Understanding this helped shape the online experience into one that feels inviting, clean, and reflective of the cozy atmosphere customers love in-store. It also ",
								{ text: "emphasized the importance of storytelling, product clarity, and visual breathing",  highlight: true },
								" room across the website."
							]}

						/>
                    </FadeInOnView>
                    <FadeInOnView className={styles.site_map_container}>
                        <TextLayoutVertical
                            title1={`Site map`}
                            parag1={`The original site had functional navigation, but it didn’t fully support discovery or guide users through the brand story. Key pages like About, Trade Program, and Design Services weren’t clearly linked, and the homepage overwhelmed users with dense grids that resembled a product listing page.`}
                            parag2={[
                                "I restructured the sitemap to simplify navigation and create more intentional pathways. By highlighting key sections and improving internal linking, I ",
                                { text: "helped users explore the full range of what Hygge offers", highlight: true },
                                "—from shopping to learning about the brand’s values—without friction.",
                            ]}
                            image={siteMapImg}
                            sectionWidth={true}
                        />
                    </FadeInOnView>
                    <FadeInOnView className={styles.task_flow_container}>
                        <TextLayoutVertical
							image={taskFlowImg}
							sectionWidth
                            title1={`Task Flow`}
                            parag1={[
								"The original homepage felt cluttered and lacked visual hierarchy, which made browsing passive and directionless. ",
								{ text: "I restructured the layout into goal-oriented sections", highlight: true },
								": a “Shop by Room” carousel to encourage browsing, a cleaner “New Arrivals” layout, and distinct modules for About, Programs, and Social Media. Each section includes clear calls-to-action to guide users deeper into the site."
							]}
							parag1_extra={[
								"On product pages, I ",
								{ text: "streamlined the layout for clarity and ease of use", highlight: true },
								". Specs and dimensions were organized using accordion dropdowns, reducing clutter while keeping details accessible. CTA buttons were placed near the top to allow for quicker purchasing decisions."
							]}
                            parag2={[
								"These adjustments were guided by small task flows focused on two goals: ",
								{ text: "helping users easily discover Hygge’s other services", highlight: true },
								" and ",
								{ text: "making product research feel less overwhelming", highlight: true },
								". By aligning the design with user intent, the new flow feels smoother, more premium, and more supportive of decision-making.",
							]}
                        />
                    </FadeInOnView>
                    <FadeInOnView className={styles.wireframes_container}>
                        <FadeInOnView>
                            <TextLayoutVertical
                                title1={`Wireframes`}
                                parag1={`The user flow and site map served as the blueprints for low fidelity wireframes. I used these wireframes to further refine my designs through prototyping and usability testing.`}
                                image={wireframesImg}
                                sectionWidth
                            />
                        </FadeInOnView>
                    </FadeInOnView>
                </div>
                <div className={styles.branding_section} id="branding_section">
                    <FadeInOnView className={styles.section_header}>
                        <h1><span>02</span> branding</h1>
                    </FadeInOnView>
					<div className={styles.branding_container}>
						<FadeInOnView>
							<TextLayoutVertical
								title1={`Logo`}
								parag1={[
									"The brand previously relied on a plain text-based logo. I designed a minimal, calming icon to complement their identity—reworking their original leaf motif into a solid, modern mark with better scalability and balance.",
									<br/>, <br/>, 
									"Multiple logo variants were provided, including icon-only, lockup, and inverted styles.",
								]}
								title2={`color & typography`}
								parag2={[
									"The color palette stayed neutral with soft browns and off-whites, adding warmth while allowing product photography to shine.",
									<br/>, <br/>,
									"I paired Playfair Display for headers with Inter for body text to create contrast while maintaining a refined, modern feel. Playfair adds softness and elegance, while Inter ensures clarity and flexibility across screens."
								]}
								image={branding1}
							/>
						</FadeInOnView>
						<FadeInOnView>
							<TextLayoutVertical 
								image={branding2}
								title2={'ui kit'}
								parag2={'To ensure scalability and consistency, I created a UI Kit with states for all components—buttons, inputs, hover interactions, and form fields. These design tokens helped create a maintainable system for future updates and component additions.'}
							/>
						</FadeInOnView>
						<FadeInOnView>
							<TextLayoutVertical image={branding3} />
						</FadeInOnView>
					</div>
                </div>
                <div className={styles.results_section} id="web_design_section">
                    <FadeInOnView className={styles.section_header}>
                        <h1><span>03</span> web design</h1>
                    </FadeInOnView>
                    <FadeInOnView>
                        <TextLayoutVertical
							title1={'Results'}
                            parag1={"The redesigned site now feels more cohesive, inviting, and brand-aligned."}
							parag1_extra={"After user testing with internal teams and the store owner, feedback confirmed improved clarity, better layout, and a more premium feel. The updates strengthened the online brand presence and offered users a more guided, elegant browsing experience."}
                        />
                    </FadeInOnView>
                </div>
            </div>
            <div className={styles.marquee__container}>
				<Marquee gradient={false} speed={100} delay={1.5} pauseOnHover>
					<Image className={styles.first_img} src={design1} alt={"design-1-img"}/>
					<Image src={design2} alt={"design-2-img"}/>
					<Image src={design3} alt={"design-3-img"}/>
					<Image src={design4} alt={"design-4-img"}/>
					<Image src={design5} alt={"design-5-img"}/>
					<Image src={design6} alt={"design-6-img"}/>
				</Marquee>
			</div>
            <FadeInOnView className={styles.case_study__footer}>
                <Footer/>
            </FadeInOnView>
            <TopButton/>
        </div>
	)
}