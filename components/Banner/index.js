import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from './Banner.module.scss'

// assets
import closeIcon from '@/public/icons/close-btn.svg'

export default function Banner({category , project}) {
    return (
        <>
            <motion.div 
                className={styles.project__header}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
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
                        priority
                    />
                </Link>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >       
                <Image
                    src={project.banner}
                    alt='banner-img'
                    width={1000}
                    height={400}
                    className={styles.banner}
                />
            </motion.div>
        </>
    )
}