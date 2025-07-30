import Image from 'next/image';
import styles from '@/styles/WorkDetails.module.scss'

// components
import CustomHead from '@/components/CustomHead';
import ProjectLayout from '@/components/ProjectLayout';
import Banner from '@/components/Banner';
import ProjectPortraitLayout from '@/components/ProjectPortraitLayout';
import TopButton from '@/components/TopButton';
import CaseStudyGlide from '@/components/CaseStudyGlide';
import Spurt from '@/components/CaseStudyProject/Spurt';
import FadeInOnView from '@/components/FadeInOnView';
import Footer from '@/components/Footer';

// data
import { work_development } from "@/data/work_development";
import { work_ux_ui } from "@/data/work_ux_ui";
import { work_graphic } from "@/data/work_graphic";
import { work_motion } from '@/data/work_motion';

// assets
import backgroundCase from '@/public/images/background/background-case.png'
import GraphicHygge from '@/components/GraphicHygge';
import Hygge from '@/components/CaseStudyProject/Hygge';

export async function getServerSideProps(context) {
	const { params } = context;
	const { slug } = params;

    const category = slug[0];
    const projectName = slug[1];
	
	// Use the data for the specific slug parameter
    const filteredData = (
        category == 'development' ? work_development :
        category == 'ux-ui-design' ? work_ux_ui :
        category == 'graphic-design' ? work_graphic :
        category == 'motion-graphics' ? work_motion : ''
    );
    // Find the project with the same slug name
    const project = filteredData.find(data => data.slug == projectName)
	
	return {
		props: {
			category, projectName, project
		}
	};
}

export default function WorkDetails({category, projectName, project}) {
    const formatProjectName = (title) => {
        return title.toLowerCase().replace(/\b(?!')[\w']+/g, (match) => {
            return match.charAt(0).toUpperCase() + match.slice(1);
        })
    }

    return (
        <>
            { projectName == "spurt" ?
                <Spurt/>
            : projectName == "hygge" ?
                <Hygge/>
            : 
                <div className={styles.work_details__container}>
                    <Image
                        src={backgroundCase}
                        alt='background-img-work'
                        width={"auto"}
                        height={"auto"}
                        className={styles.background_img}
                    />
                    <CustomHead title={`Works | ${formatProjectName(project.title)}`}/>
                    {project.portrait_layout ? (
                        <div className={styles.work_details__main_container}>
                            <ProjectPortraitLayout category={category} project={project} />
                            <TopButton/>
                        </div>
                    ) : project.slug == 'glide-ai' ? (
                        <div className={styles.work_details__main_container}>
                            <CaseStudyGlide category={category}/>
                            <TopButton/>
                        </div>
                    ) : project.slug == 'hygge-graphic' ? (
                        <div className={styles.work_details__main_container}>
                            <GraphicHygge category={category}/>
                            <TopButton/>
                        </div>
                    ) : (
                        <div className={styles.work_details__main_container}>
                            <Banner category={category} project={project} />
                            <ProjectLayout 
                                project={project}
                                category={category}
                            />
                            <TopButton/>
                        </div>
                    )}
                    <FadeInOnView className={styles.footer__container}>
                        <Footer/>
                    </FadeInOnView>
                </div>
            }
        </>
    )
}