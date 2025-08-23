import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Spurt.module.scss"

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
import spurtBanner from "@/public/images/home/project-banners/spurt-banner.jpg"
import aboutImg from "@/public/images/work/development/spurt/about-img.png"
import introBannerImg from "@/public/images/work/development/spurt/intro-banner.png"
import problemImg from "@/public/images/work/development/spurt/problem-img.png"
import personaImg from "@/public/images/work/development/spurt/persona-img.png"
import uxImg from "@/public/images/work/development/spurt/ux-architecture.png"
// branding imgs
import branding1 from "@/public/images/work/development/spurt/branding-1.png"
import branding2 from "@/public/images/work/development/spurt/branding-2.png"
import branding3 from "@/public/images/work/development/spurt/branding-3.png"
// feature imgs
import feature01 from '@/public/images/work/development/spurt/feature-your-garden.svg'
import feature02 from '@/public/images/work/development/spurt/feature-plantaid.svg'
import feature03 from '@/public/images/work/development/spurt/feature-community.svg'
// result imgs
import chueyGIF from "@/public/images/work/development/spurt/chuey-animated.gif"
import splashGIF from "@/public/images/work/development/spurt/spurt-splash.gif"
import emotionalDesignImg from "@/public/images/work/development/spurt/results-img.png"
import otherScreensImg from "@/public/images/work/development/spurt/other-screens.png"

export default function Spurt() {
    const [feature, setFeature] = useState(0);

    const spurtData = {
        title: 'Spurt',
        subtitle: 'mobile development | ux/ui | graphic design | branding',
        banner: spurtBanner,
        overview: `Empowering first-time gardeners and community garden administrators with AI-driven tools for sustainable food production and community engagement.`,
        features: [
            {
                name: 'YOUR GARDEN',
                desc: 'A personalized dashboard to manage, track, and celebrate plant growth progress.',
                image: feature01,
            },
            {
                name: 'PLANTAID',
                subname: '(AI Assistant)',
                desc: 'Meet Chuey, your gardening co-pilot, offering real-time, tailored recommendations to help users troubleshoot problems and optimize care.',
                image: feature02,
            },
            {
                name: 'COMMUNITY GARDEN',
                desc: 'An integrated forum for connecting with local growers, sharing advice, and fostering community resilience through gardening.',
                image: feature03,
            },
        ],
    };

    return (
        <div className={styles.case_study}>
            <div>
                <CustomHead title={`Works | Spurt`}/>
            </div>
            <div className={styles.case_study__banner}>
                <Banner category={"development"} project={spurtData} />
                <FadeInOnView>
                    <p className={styles.overview}>{spurtData.overview}</p>
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
                            "Spurt is a mobile app designed for novice gardeners and community garden leaders, ",
                            {text:"offering intelligent, personalized guidance for growing food", highlight: true},
                            " successfully. As climate challenges and rising food costs put pressure on households, Spurt helps users connect with local gardening communities and optimize plant growth through tailored advice on weather, soil, and care."
                        ]}
                        title2={'Role'}
                        parag2={'My role in this project involved designing the user experience, interface design, branding, and collaborating on mobile development.'}
                        link={`https://www.figma.com/proto/gpqY4VUMLCw8YpqCz8WLhs/Spurt-Prototype?kind=proto&node-id=764-5915&page-id=0%3A1&scaling=scale-down&starting-point-node-id=764%3A5850&t=CFXWaXb3BRdYaSkh-1&type=design&viewport=-670%2C24%2C0.38`}
                        linkText={'Visit Spurt Prototype'}
                    />
                </FadeInOnView>
                <FadeInOnView className={styles.links_section}>
                    <h4>Jump To</h4>
                    <Image src={linkArrow} alt="link-arrow"/>
                    <div className={styles.links}>
                        <Link href={'#approach_section'}>01 Approach & Process</Link>
                        <Link href={'#features_section'}>02 Features</Link>
                        <Link href={'#results_section'}>03 Results & Reflections</Link>
                    </div>
                </FadeInOnView>
                <FadeInOnView className={styles.banner_section}>
                    <Image src={introBannerImg} alt="intro-banner-img"/>
                </FadeInOnView>
                <div className={styles.approach_section} id="approach_section">
                    <FadeInOnView className={styles.section_header}>
                        <h1><span>01</span> approach & process</h1>
                    </FadeInOnView>
                    <FadeInOnView className={styles.problem_container}>
                        <TextLayoutVertical
                            title1={`Defining the Problem`}
                            parag1={`With global food insecurity on the rise, particularly affecting urban communities, Spurt’s goal was to empower individuals by providing tools for sustainable, homegrown food solutions.`}
                            image={problemImg}
                        />
                    </FadeInOnView>
                    <FadeInOnView className={styles.persona_container}>
                        <TextLayoutVertical
                            title1={`User Research & Persona Development`}
                            parag1={`Creating user personas helped align feature priorities with real needs. Katie, our primary persona, represents young adults living independently who want to save on groceries by growing their own food but face challenges like lack of space, gardening knowledge, and Vancouver’s unpredictable weather.`}
                            parag2={[
                                "This guided my focus on ",
                                { text: "simplifying plant care guidance", highlight: true },
                                ", building ",
                                { text: "AI assistance", highlight: true },
                                " for troubleshooting, and integrating a ",
                                { text: "community-driven", highlight: true },
                                " knowledge base."
                            ]}
                            image={personaImg}
                            sectionWidth={true}
                        />
                    </FadeInOnView>
                    <FadeInOnView className={styles.ux_container}>
                        <TextLayoutVertical
                            title1={`UX Architecture`}
                            parag1={`I mapped out user flows with accessibility and simplicity in mind, focusing on minimizing friction for first-time users. Key paths included: onboarding → setting up ‘Your Garden’ → engaging with AI assistant → connecting with the community.`}
                            image={uxImg}
                        />
                    </FadeInOnView>
                    <div className={styles.branding_container}>
                        <FadeInOnView>
                            <TextLayoutVertical
                                title1={`Branding`}
                                parag1={`Spurt’s visual identity combines natural greens and earth tones with vibrant accent colors to reflect both the organic nature of gardening and the energy of community collaboration.`}
                                parag2={`The earthy base grounds the brand in sustainability, while the bright highlights bring a sense of optimism, growth, and accessibility. This balance positions Spurt as friendly, approachable, and future-facing. This invites new gardeners to engage with confidence.`}
                                image={branding1}
                                sectionWidth
                            />
                        </FadeInOnView>
                        <FadeInOnView>
                            <TextLayoutVertical image={branding2} />
                        </FadeInOnView>
                        <FadeInOnView>
                            <TextLayoutVertical image={branding3} />
                        </FadeInOnView>
                    </div>
                </div>
                <div className={styles.features_section} id="features_section">
                    <FadeInOnView className={styles.section_header}>
                        <h1><span>02</span> features</h1>
                    </FadeInOnView>
                     <FadeInOnView className={styles.features_container}>
                        <div className={styles.features__items}>
                            <h4>FEATURES</h4>
                            {spurtData.features.map((item, index) => (
                                <div 
                                    key={index} 
                                    className={styles.item__details} 
                                    onClick={() => setFeature(index)}
                                    style={{backgroundColor: feature === index ? 'var(--color-spurt-highlight)' : 'transparent'}}
                                >
                                    <h2>{index + 1}</h2>
                                    <div>
                                        <h4>{item.name} <span>{item.subname}</span></h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Image
                            src={spurtData.features[feature].image}
                            alt={'branding'}
                            width={"auto"}
                            height={"auto"}
                        />
                    </FadeInOnView>
                </div>
                <div className={styles.results_section} id="results_section">
                    <FadeInOnView className={styles.section_header}>
                        <h1><span>03</span> results & reflections</h1>
                    </FadeInOnView>
                    <FadeInOnView>
                        <TextLayoutHorizontal
                            image={chueyGIF}
                            backgroundColor={'var(--color-spurt-highlight)'}
                            imageWidth={'50%'}
                            title1={'Emotional Design'}
                            parag1={[
                                "One of the key takeaways from this project was the value of emotional design in driving engagement. Gardening is deeply personal, and for many users, small wins—like a sprouting seed or thriving plant—carry emotional weight. I leaned into this by ",
                                {text:"designing interactions that felt encouraging and celebratory", highlight: true},
                                ", such as Chuey's gentle animations and milestone prompts when progress was made."
                            ]}
                            parag2={[
                                "These micro-interactions weren’t just decorative—they were strategic. By making plant care feel more rewarding, users were more likely to ",
                                {text:"stay motivated and build habits", highlight: true},
                                ". Emotional cues, playful visuals, and positive reinforcement helped create feedback that felt more like a conversation than an instruction manual."
                            ]}
                        />
                    </FadeInOnView>
                    <FadeInOnView className={styles.images_container}>
                        <Image src={emotionalDesignImg} alt="emotional-design-img"/>
                        <Image src={splashGIF} alt="spurt-splash-gif"/>
                    </FadeInOnView>
                    <FadeInOnView>
                        <TextLayoutVertical
                            image={otherScreensImg}
                            parag1={[
                                "Overall, this project pushed me to think beyond functionality. It strengthened my ability to ",
                                {text:"design accessible, user-centered tools that also resonate emotionally", highlight: true},
                                ". I walked away with a deeper understanding of how to bridge utility and empathy—translating abstract challenges like food insecurity and climate anxiety into a product that feels hopeful, personal, and empowering."
                            ]}
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