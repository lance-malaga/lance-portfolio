import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CaseStudyLayout.module.scss'
// components
import UserPersona from '../UserPersona';
import Branding from '../Branding';
// data
import { work_case_study } from '@/data/work_case_study'
// assets
import linkIcon from '@/public/icons/link-out-icon.svg'

export default function CaseStudyLayout() {
    const [feature, setFeature] = useState(0)
    const data = work_case_study;

    return (
        <div className={styles.case_study__layout}>
            <p className={styles.description}>{data.desc}</p>
            <Link href={`https://www.linkedin.com/posts/jimmylam6_spurt-aiforfoodsecurity-foodinsecurities-ugcPost-7139009163627528193-EpxQ?utm_source=share&utm_medium=member_desktop`} target='_blank' className={styles.link__out}>
                <Image
                    src={linkIcon}
                    alt={'link-out-icon'}
                    width={25}
                    height={25}
                />
                <p>WATCH PREVIEW</p>
            </Link>
            <div className={styles.problem__container}>
                <h4>{data.problem.title}</h4>
                <p>{data.problem.desc}</p>
            </div>
            <div className={styles.user_persona__container}>
                <h4>{data.user_persona.title}</h4>
                <UserPersona props={data.user_persona}/>
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
                <Branding props={data.branding} />
            </div>
            <div className={styles.features__container}>
                <div className={styles.features__content}>
                    <div className={styles.features__items}>
                        <h4>FEATURES</h4>
                        {data.features.map((item, index) => (
                            <div 
                                key={index} 
                                className={styles.item__details} 
                                onClick={() => setFeature(index)}
                                style={{backgroundColor: feature === index ? 'var(--color-white-bg)' : 'transparent'}}
                            >
                                <h2>{index + 1}</h2>
                                <div>
                                    <p>{item.name}</p>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Image
                        src={data.features[feature].image}
                        alt={'branding'}
                        width={"auto"}
                        height={"auto"}
                    />
                </div>
            </div>
            <div className={styles.other__container}>
                <h4>{data.other.title}</h4>
                <Image
                    src={data.other.image}
                    alt={'other-screens-image'}
                    width={"auto"}
                    height={"auto"}
                />
            </div>
        </div>
    )
}