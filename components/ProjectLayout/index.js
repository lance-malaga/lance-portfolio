import Image from "next/image";
import Link from "next/link";
import styles from './ProjectLayout.module.scss'

// assets
import linkIcon from '@/public/icons/link-out-icon.svg'

export default function ProjectLayout({project}) {
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
                    <p>TRY IT OUT</p>
                </Link>
            }
            <div className={styles.gallery}>
                {project.gallery && project.gallery.map((data, index) => (
                    <button 
                        key={index} 
                        className={styles.overlay}
                        // className={exapndImage ? styles.overlay : ''}
                        // onClick={handleExpandImage}
                    >
                        <Image
                            src={data}
                            alt={'gallery-img ' + index}
                            width={185}
                            height={185}
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}