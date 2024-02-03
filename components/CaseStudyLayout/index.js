import Image from 'next/image';
import styles from './CaseStudyLayout.module.scss'
import { work_case_study } from '@/data/work_case_study'

export default function CaseStudyLayout() {
    const data = work_case_study;

    return (
        <div className={styles.case_study__layout}>
            <p className={styles.description}>{data.desc}</p>
            <div className={styles.problem__container}>
                <h4>{data.problem.title}</h4>
                <p>{data.problem.desc}</p>
            </div>
            <div className={styles.user_persona__container}>
                <h4>{data.user_persona.title}</h4>
                <Image
                    src={data.user_persona.image}
                    alt={'user-persona'}
                    width={"auto"}
                    height={510}
                />
            </div>
            <div className={styles.solution__container}>
                <div>
                    <h4>{data.solution.title}</h4>
                    <p>{data.solution.desc}</p>
                </div>
                <Image
                    src={data.solution.image}
                    alt={'mock-up-img'}
                    width={"auto"}
                    height={"auto"}
                />
            </div>
            <div className={styles.architecture__container}>
                <h4>{data.architecture.title}</h4>
                <p>{data.architecture.desc}</p>
                <Image
                    src={data.architecture.image}
                    alt={'wireframe-architecture'}
                    width={"auto"}
                    height={"auto"}
                />
            </div>
            <div className={styles.branding__container}>
                <h4>{data.branding.title}</h4>
                <Image
                    src={data.branding.image}
                    alt={'branding'}
                    width={"auto"}
                    height={"auto"}
                />
            </div>
            <div className={styles.features__container}>
                <div className={styles.features__content}>
                    <div className={styles.features__items}>
                        <h4>FEATURES</h4>
                        {data.features.map((item, index) => (
                            <div key={index} className={styles.item__details}>
                                <h2>{index + 1}</h2>
                                <div>
                                    <p>{item.name}</p>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Image
                        src={data.features[0].image}
                        alt={'branding'}
                        width={"auto"}
                        height={"auto"}
                    />
                </div>
            </div>
        </div>
    )
}