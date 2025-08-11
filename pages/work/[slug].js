import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Work.module.scss"
import { motion, AnimatePresence } from "framer-motion";

// components
import CustomHead from "@/components/CustomHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInOnView from "@/components/FadeInOnView";
import GridLayout from "@/components/GridLayout";
import WorkFilter from "@/components/WorkFilter";
import GridAutoLayout from "@/components/GridAutoLayout";

// data
import { work_development } from "@/data/work_development";
import { work_ux_ui } from "@/data/work_ux_ui";
import { work_graphic } from "@/data/work_graphic";
import { work_motion } from "@/data/work_motion";
import { work_architecture } from "@/data/work_architecture";

export async function getServerSideProps(context) {
	const { params } = context;
	const { slug } = params;
	
	// Filter the data for the specific slug parameter
    const filteredData = (
        slug == 'development' ? work_development :
        slug == 'ux-ui-design' ? work_ux_ui :
        slug == 'architecture' ? work_architecture :
        slug == 'graphic-design' ? work_graphic :
        slug == 'motion-graphics' ? work_motion : ''
    );
	
	return {
		props: {
			slug, filteredData
		}
	};
}

export default function Work({slug, filteredData}) {
    return (
        <div className={styles.work__container}>
            <CustomHead title={'Works'} />
            <div className={styles.work__main_content}>
                <Header/>
                <motion.div 
                    className={styles.filter__section}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2>WORK</h2>
                    <WorkFilter slug={slug}/>
                </motion.div>
                <main className={styles.main__container}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slug}
                            initial={{ opacity: 0, y: 50  }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {slug == 'architecture' || slug == 'motion-graphics' ? (
                                <GridAutoLayout slug={slug} filteredData={filteredData} />
                            ):(
                                <GridLayout slug={slug} filteredData={filteredData}/>
                            )}

                        </motion.div>
                    </AnimatePresence>
                </main>
                <FadeInOnView className={styles.footer__container}>
                    <Footer/>
                </FadeInOnView>
            </div>
        </div>
    )
}