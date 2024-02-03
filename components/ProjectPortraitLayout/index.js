import Link from 'next/link'
import Image from 'next/image'
import styles from './ProjectPortraitLayout.module.scss'

// assets
import closeIcon from '@/public/icons/close-btn.svg'

export default function ProjectPortraitLayout({category , project}) {
    return (
        <div>
            <div className={styles.project__header}>
                <div>
                    <h2>{project.title}</h2>
                    <p>{project.subtitle}</p>
                </div>
                <Link href={`/work/${category}`}>
                    <Image
                        src={closeIcon}
                        alt='close-icon'
                        width={"auto"}
                        height={"auto"}
                    />
                </Link>
            </div>
            <div className={styles.portait__layout}>
                <Image
                    src={project.banner}
                    alt='banner-img'
                    width={470}
                    height={630}
                    className={styles.banner}
                />
                <div>
                    <p className={styles.programs_used}>
                        PROGRAMS USED: {project.programs}
                    </p>
                    <p className={styles.description}>
                        {project.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}