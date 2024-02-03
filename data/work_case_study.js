import bannerImg from '@/public/images/work/development/work01-spurt/spurt-header.png'
import userPersona from '@/public/images/work/development/work01-spurt/user-persona.png'
import solutionImg from '@/public/images/work/development/work01-spurt/solution.svg'
import wireframeImg from '@/public/images/work/development/work01-spurt/wireframe.svg'
import brandingImg from '@/public/images/work/development/work01-spurt/branding.svg'
import feature01 from '@/public/images/work/development/work01-spurt/feature-your-garden.svg'
import feature02 from '@/public/images/work/development/work01-spurt/feature-plantaid.svg'
import feature03 from '@/public/images/work/development/work01-spurt/feature-community.svg'

export const work_case_study = {
    title: 'Spurt',
    subtitle: 'MOBILE DEVELOPMENT PROJECT | CASE STUDY',
    banner: feature01,
    desc: 'Spurt represents a mobile application tailored for first time gardeners and community garden administrators alike. Through the use of artificial intelligence (AI) and other integrated features, the app is designed to maximize the potential of diverse factors, including weather conditions, soil composition, temperature fluctuations, and plant-specific data. By utilizing these insights at every stage, Spurt provides comprehensive assistance and support, fostering natural growth and empowering users to address food insecurities with confidence.',
    problem: {
        title: 'PROBLEM IDENTIFICATION',
        desc: 'As food demand is expected to increase by 70% in 2050, the incoming years prove its urgency. Almost one-fifth of the world faces food insecurity due to rising inflation. This escalating crisis proves the need for sustainable solutions, where technology plays an important role in crafting impactful social change, particularly for underrepresented communities.'
    },
    user_persona: {
        title: 'USER PERSONA',
        image: userPersona
    },
    solution: {
        title: 'SOLUTION',
        desc: 'Community gardens address food insecurity, sustainability, and social inequity by enhancing environmental preservation and fostering healthy interactions. Through Spurt, a mobile app for novice gardeners and community administrators, it serves as a platform that leverages artificial intelligence to optimize weather, soil, temperature, and plant data. This empowers users to confidently combat food insecurities by providing comprehensive support for plant growth.',
        image: solutionImg,
    },
    architecture: {
        title: 'ARCHITECTURE',
        desc: 'Spurt was developed as an easy to use modern tool, incorporating key features within the app to ensure a seamless and effortless experience for users.',
        image: wireframeImg,
    },
    branding: {
        title: 'BRANDING',
        image: brandingImg,
    },
    features: [
        {
            name: 'YOUR GARDEN',
            desc: 'A personalized space to effortlessly manage and track the progress of your plants.',
            image: feature01,
        },
        {
            name: 'PLANTAID',
            desc: 'A personalized space to effortlessly manage and track the progress of your plants.',
            image: feature02,
        },
        {
            name: 'COMMUNITY GARDEN',
            desc: 'A personalized space to effortlessly manage and track the progress of your plants.',
            image: feature03,
        },
    ]
}