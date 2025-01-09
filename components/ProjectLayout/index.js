import Image from "next/image";
import Link from "next/link";
import styles from './ProjectLayout.module.scss'

// assets
import linkIcon from '@/public/icons/link-out-icon.svg'

export default function ProjectLayout({project, category}) {
    return (
        <div className={styles.project__layout}>
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
                    <p>{category == 'motion-graphics' ? 'WATCH NOW' : 'TRY IT OUT' }</p>
                </Link>
            }
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