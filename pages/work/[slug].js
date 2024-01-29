import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Work.module.scss"

// components
import CustomHead from "@/components/CustomHead";
import Header from "@/components/Header";

// data
import { work_development } from "@/data/work_development";
import { work_graphic } from "@/data/work_graphic";

// assets
import backgroundWork from '@/public/images/background/background-work.png'
import GridLayout from "@/components/GridLayout";
import WorkFilter from "@/components/WorkFilter";

export async function getServerSideProps(context) {
	const { params } = context;
	const { slug } = params;
	
	// Filter the data for the specific slug parameter
    const filteredData = (
        slug == 'development' ? work_development :
        slug == 'graphic-design' ? work_graphic : ''
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
            <Image
				src={backgroundWork}
				alt='background-img-work'
				width={"auto"}
				height={"auto"}
				className={styles.background_img}
			/>
            <CustomHead title={'Works'} />
            <Header/>
            <div className={styles.filter__section}>
                <h2>WORK</h2>
                <WorkFilter slug={slug}/>
            </div>
            <main className={styles.main__container}>
                <GridLayout slug={slug} filteredData={filteredData}/>
            </main>
        </div>
    )
}