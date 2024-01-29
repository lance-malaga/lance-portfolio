import Image from "next/image";
import Link from "next/link";
import styles from './ProjectLayout.module.scss'

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
                <p className={styles.link__out}>
                    TRY IT OUT:{' '}
                    <Link href={project.link} target='_blank'>
                        {project.title}
                    </Link>
                </p>
            }
            <div className={styles.gallery}>
                {project.gallery.map((data, index) => (
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
                            className={styles.gallery_img}
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}