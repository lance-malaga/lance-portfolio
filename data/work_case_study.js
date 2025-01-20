import bannerImg from '@/public/images/work/development/work01-spurt/spurt-header.png'
import userPersona from '@/public/images/work/development/work01-spurt/katie-photo.png'
import solutionImg from '@/public/images/work/development/work01-spurt/solution.svg'
import wireframeImg from '@/public/images/work/development/work01-spurt/wireframe.svg'
// branding
import logo from '@/public/images/work/development/work01-spurt/spurt-logo.svg'
import font from '@/public/images/work/development/work01-spurt/poppins.svg'
// features
import feature01 from '@/public/images/work/development/work01-spurt/feature-your-garden.svg'
import feature02 from '@/public/images/work/development/work01-spurt/feature-plantaid.svg'
import feature03 from '@/public/images/work/development/work01-spurt/feature-community.svg'
// other
import otherImg from '@/public/images/work/development/work01-spurt/other.png'

export const work_case_study = {
    title: 'Spurt',
    subtitle: 'MOBILE DEVELOPMENT PROJECT | CASE STUDY',
    banner: bannerImg,
    desc: 'Spurt represents a mobile application tailored for first time gardeners and community garden administrators alike. Through the use of artificial intelligence (AI) and other integrated features, the app is designed to maximize the potential of diverse factors, including weather conditions, soil composition, temperature fluctuations, and plant-specific data. By utilizing these insights at every stage, Spurt provides comprehensive assistance and support, fostering natural growth and empowering users to address food insecurities with confidence.',
    problem: {
        title: 'PROBLEM IDENTIFICATION',
        desc: 'As food demand is expected to increase by 70% in 2050, the incoming years prove its urgency. Almost one-fifth of the world faces food insecurity due to rising inflation. This escalating crisis proves the need for sustainable solutions, where technology plays an important role in crafting impactful social change, particularly for underrepresented communities.'
    },
    user_persona: {
        title: 'USER PERSONA',
        image: userPersona,
        info: [
            {
                title: 'Name',
                desc: 'KATIE HAMILTON'
            },
            {
                title: 'Age',
                desc: '23'
            },
            {
                title: 'Occupation',
                desc: 'BARISTA'
            },
            {
                title: 'Location',
                desc: 'BURNABY, BC'
            },
            {
                title: 'Annual Income',
                desc: '25K'
            }, 
        ],
        background: `Katie, a lively 23-year-old UBC student in Burnaby, cherishes life's simple pleasures. She finds joy in nature and embraces gardening to grow fresh produce. She aims to save time and money on groceries while living independently.`,
        motivations: [
            `Embracing a sustainable lifestyle by growing her own food and reducing her ecological footprint.`,
            `Katie dreams of a thriving garden to save time on grocery trips and fulfill her needs.`,
            `Seeks simple pleasures in connecting with nature and finding joy in gardening.`,
            `Katie aspires to save time on future grocery trips through a self-sufficient garden.`,
        ],
        goals: [
            `Enjoy gardening and connect with nature.`,
            `Plans to join a local gardening community for tips and advice.`,
            `Aims to learn basic care requirements for plants.`,
            `Aspires to successfully grow fruits and vegetables, to lessen future grocery trips.`,
        ],
        frustrations: [
            `Struggles with unexpected pests and lacks knowledge on effective control methods.`,
            `Faces difficulty with gardening due to Vancouver’s frequent rainy weather.`,
            `Challenges of independent living in a small space hinder growing diverse plants.`,
            `Forgets to track gardening routines.`,
        ],
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
        logo_img: logo,
        font_img: font,
        colors: [
            '#14171F', 
            '#4267FA', 
            '#F25292', 
            '#5AA000', 
            '#169F91', 
            '#FF4934', 
            '#FFB800', 
        ],
    },
    features: [
        {
            name: 'YOUR GARDEN',
            desc: 'A personalized space to effortlessly manage and track the progress of your plants.',
            image: feature01,
        },
        {
            name: 'PLANTAID',
            desc: 'Introducing your AI assistant, "Chuey," from PlantAid! Chuey guides you through best practices and offers customized recommendations for each of your plants.',
            image: feature02,
        },
        {
            name: 'COMMUNITY GARDEN',
            desc: 'Connect with like-minded individuals, share your experiences, and elevate your gardening knowledge.',
            image: feature03,
        },
    ],
    other: {
        title: 'OTHER SCREENS',
        image: otherImg
    }
}