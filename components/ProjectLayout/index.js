import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from './ProjectLayout.module.scss'

// assets
import linkIcon from '@/public/icons/link-out-icon.svg'

export default function ProjectLayout({project, category}) {
    return (
        <div className={styles.project__layout}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
                <p className={styles.programs_used}>
                    PROGRAMS USED: {project.programs}
                    { project.progress ? (
                        <>
                            <br/>
                            STATUS: <span style={{color: "var(--color-orange)"}} >WORK IN PROGRESS</span>
                        </>
                    ) : null }
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
                        <p>{category == 'motion-graphics' 
                                ? 'WATCH NOW' :
                            project.button != null 
                                ? project.button
                            : 'TRY IT OUT' 
                        }</p>
                    </Link>
                }
            </motion.div>
            {project.gallery && project.gallery.map((data, index) => {
                const ref = useRef(null);
                const isInView = useInView(ref, { amount: 0.4, once: true });

                return (
                    <motion.div
                        key={index}
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className={styles.gallery}
                        style={{
                            width: project.title === 'YORI' ? 'auto' : undefined,
                        }}
                    >
                        <Image 
                            src={data}
                            alt={`gallery-img-${index}`}
                            width={1000}
                            height={700}
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </motion.div>
                );
            })}

        </div>
    )
}