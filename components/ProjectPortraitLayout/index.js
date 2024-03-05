import Link from 'next/link'
import Image from 'next/image'
import styles from './ProjectPortraitLayout.module.scss'

// assets
import closeIcon from '@/public/icons/close-btn.svg'
import linkIcon from '@/public/icons/link-out-icon.svg'

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
                    { project.link && 
                        <Link href={project.link} target='_blank' className={styles.link__out}>
                            <Image
                                src={linkIcon}
                                alt={'link-out-icon'}
                                width={25}
                                height={25}
                            />
                            <p>TRY IT OUT</p>
                        </Link>
                    }
                </div>
            </div>
            <div 
                className={styles.gallery}
                style={{
                    gap: project.title === 'YORI' ? '20px' : null,
                }}
            >
                {project.gallery && project.gallery.map((data, index) => (
                    <Image 
                        src={data}
                        alt={'gallery-img'+`${index}`}
                        width={1000}
                        height={700}
                        key={index}
                        style={{
                            width: project.title === 'YORI' ? 'auto' : null,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}