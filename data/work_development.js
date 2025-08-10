import spurtBanner from "@/public/images/work/development/work02-glide/glide-header.png";
import glideaiBanner from "@/public/images/work/development/work02-glide/glide-header.png";
import wphBanner from "@/public/images/work/development/work03-wph.png";
import leniBanner from "@/public/images/work/development/work04-leni.png";
import amaiaBanner from "@/public/images/work/development/work-amaia.png";
import redSunBanner from "@/public/images/work/development/work05-redsun.png";
import yoriBanner from "@/public/images/work/development/work08-yori.png";
import roastBanner from "@/public/images/work/development/work07-roast.png";

export const work_development = [
    // spurt
    {
        title: 'SPURT',
        slug: 'spurt',
        subtitle: 'MOBILE DEVELOPMENT | UX/UI | GRAPHIC DESIGN | BRANDING',
        grid_img: '/images/work/development/grid/work01-spurt.svg',
        banner: spurtBanner,
    },
    // glideai
    {
        title: 'GLIDE AI',
        slug: 'glide-ai',
        subtitle: 'FLUTTER APP | MOBILE DEVELOPMENT | BRANDING | UX/UI',
        grid_img: '/images/work/development/grid/work02-glide.svg',
        banner: glideaiBanner,
    },
    // wph
    {
        title: `WEST POINT HOTEL`,
        slug: 'west-point-hotel',
        subtitle: 'WORDPRESS | UX/UI | BRANDING',
        grid_img: '/images/work/development/grid/work03-wph.svg',
        banner: wphBanner,
        programs: 'WORDPRESS, ADOBE ILLUSTRATOR, FIGMA',
        button: 'VIEW PROTOTYPE',
        desc: 'Welcome to West Point Hotel, a luxurious 5-star resort situated in the heart of the Caribbean. Renowned for catering to young adults, businessmen, and couples, this destination exudes class and sophistication. In crafting the website for West Point Hotel, our aim was to capture its upscale ambiance through a modernist and minimalist design approach. The sleek and refined aesthetic mirrors the high-end experience the resort offers, providing a visually compelling online representation that aligns seamlessly with its luxurious identity.',
        link: `https://www.figma.com/proto/WzznboxjDFKUenSajAT4V6/West-Point-Hotel---Prototype?type=design&node-id=426-16312&t=fSxoymWYqUELEBM4-1&scaling=min-zoom&page-id=1%3A3&starting-point-node-id=516%3A12550&mode=design`,
        gallery: [
            '/images/work/development/work03-wph/gallery-00.jpg',
            '/images/work/development/work03-wph/gallery-01.png',
            '/images/work/development/work03-wph/gallery-02.png',
            '/images/work/development/work03-wph/gallery-03.png',
            '/images/work/development/work03-wph/gallery-04.png',
            '/images/work/development/work03-wph/gallery-05.png',
            // '/images/work/development/work03-wph/gallery-06.png',
        ]
    },
    // lenipedia
    {
        title: `LENIPEDIA`,
        slug: 'lenipedia',
        subtitle: 'WORDPRESS | UX/UI',
        grid_img: '/images/work/development/grid/work04-leni.svg',
        banner: leniBanner,
        programs: 'WORDPRESS, FIGMA',
        button: 'VIEW PROTOTYPE',
        desc: `Lenipedia is a website dedicated to shedding light on the profound impact of Leni Robredo during her 2022 presidential campaign in the Philippines. By highlighting her work, ideals, accomplishments, and commitment to good governance, the platform showcases how her supporters were inspired to contribute both funds and volunteer efforts to fuel her entire campaign. The primary objective of Lenipedia is to narrate these events, emphasizing how a single woman ignited a spark of hope within Filipinos. The website's aesthetic draws inspiration from the campaign's theme, incorporating a vibrant pink palette to create an engaging and visually cohesive user experience.`,
        link: `https://www.figma.com/proto/2QAU2W1huwDCcffGdA4kSV/Midterm?type=design&node-id=1-2&t=34BW1f3kQpItGpxq-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design`,
        gallery: [
            '/images/work/development/work04-leni/gallery-01.png',
            '/images/work/development/work04-leni/gallery-02.png',
            '/images/work/development/work04-leni/gallery-03.png',
            '/images/work/development/work04-leni/gallery-04.png',
        ]
    },
    // amaia
    {
        title: `AMAIA`,
        slug: 'amaia',
        subtitle: 'WEB DEVELOPMENT | REACTJS | CMS',
        grid_img: '/images/work/development/grid/work-amaia.svg',
        banner: amaiaBanner,
        programs: 'REACTJS | ADOBE PHOTOSHOP',
        button: 'VIEW WEBSITE',
        desc: `Amaia is the affordable housing arm of Ayala Land, committed to making quality homes accessible to hardworking Filipinos. With over 30 sustainable communities built since 2010, Amaia continues to fulfill the dream of homeownership across the country. The website was designed with a fresh light green and white palette, creating a clean, welcoming interface that reflects Amaia’s approachable and trustworthy brand.`,
        link: `https://www.amaialand.com/`,
        gallery: [
            '/images/work/development/work-amaia/gallery-01.png',
            '/images/work/development/work-amaia/gallery-02.png',
            '/images/work/development/work-amaia/gallery-03.png',
            '/images/work/development/work-amaia/gallery-04.png',
            '/images/work/development/work-amaia/gallery-05.png',
        ]
    },
    // redsun
    {
        title: `RED SUN MENU`,
        slug: 'redsun',
        subtitle: 'WEB DEVELOPMENT | WEB DESIGN',
        grid_img: '/images/work/development/grid/work05-redsun.svg',
        banner: redSunBanner,
        programs: 'NEXTJS, FIGMA',
        progress: true,
        desc: 'This website, "Red Sun Menu", is an e-commerce platform showcasing a variety of authentic Japanese dishes that can be ordered for delivery. The site highlights the diverse flavors of Japanese cuisine and allows customers to choose from a selection of prepared meals.',
        link: `https://redsun-menu.vercel.app/`,
        gallery: [
            '/images/work/development/work05-redsun/gallery-01.png',
            '/images/work/development/work05-redsun/gallery-02.png',
        ]
    },
    // {
    //     title: `TOMO`,
    //     slug: 'tomo',
    //     subtitle: 'WEB DEVELOPMENT | ',
    //     grid_img: '/images/work/development/grid/work06-tomo.svg',
    //     banner: '/images/work/development/work06-tomo.png',
    //     programs: 'NEXTJS, TYPESCRIPT, FIGMA',
    //     desc: 'TOMO is a dynamic weather website that informs users and gives them the ability to search for the current weather and 5 day forecast of a specific city. The website was developed through TypeScript and the openweathermap API.',
    //     link: `https://weather-app-2024-five.vercel.app/`,
    //     gallery: [
    //         '/images/work/development/work06-tomo/gallery-01.png',
    //     ]
    // },

    // yori
    {
        title: `YORI`,
        slug: 'yori',
        subtitle: 'MOBILE DEVELOPMENT | UX/UI | GRAPHIC DESIGN',
        grid_img: '/images/work/development/grid/work08-yori.svg',
        banner: yoriBanner,
        programs: 'NEXTJS, ADOBE ILLUSTRATOR, AFTER EFFECTS, FIGMA',
        desc: 'Yori is a mobile web application cook book that promotes a variety of healthy, affordable meals. Through its interactive children-friendly features, it provides a platform for families to involve their children in the cooking process. As well as an opportunity to educate and develop their cognitive abilities through learning about nutritional benefits.',
        link: `https://yori-nutritional-foods.vercel.app/`,
        gallery: [
            '/images/work/development/work08-yori/gallery-01.png',
            '/images/work/development/work08-yori/gallery-02.png',
            '/images/work/development/work08-yori/gallery-03.png',
            '/images/work/development/work08-yori/gallery-04.png',
            '/images/work/development/work08-yori/gallery-05.png',
            '/images/work/development/work08-yori/gallery-06.png',
            '/images/work/development/work08-yori/gallery-07.png',
            '/images/work/development/work08-yori/gallery-08.png',
        ]
    },
    // roast
    {
        title: `ROAST MASTERS`,
        slug: 'roast-masters',
        subtitle: 'WEB DEVELOPMENT | WEB DESIGN',
        grid_img: '/images/work/development/grid/work07-roast.svg',
        banner: roastBanner,
        programs: 'HTML5, CSS, ADOBE PHOTOSHOP, FIGMA',
        desc: `Roast Masters, stands as a static café website. The website showcases a variety of beverages and pastries, its aesthetic emphasizes the sophistication of classic fonts complemented by a soothing palette of green tones.`,
        link: `https://roast-masters.vercel.app/index.html`,
        gallery: [
            '/images/work/development/work07-roast/gallery-01.png',
            '/images/work/development/work07-roast/gallery-02.png',
            '/images/work/development/work07-roast/gallery-03.png',
        ]
    },
]