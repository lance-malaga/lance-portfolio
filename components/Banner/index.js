import Image from "next/image";
import Link from "next/link";
import styles from './Banner.module.scss'

// assets
import closeIcon from '@/public/icons/close-btn.svg'

export default function Banner({category , project}) {
    return (
        <>
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
            <Image
                src={project.banner}
                alt='banner-img'
                width={1000}
                height={400}
                className={styles.banner}
            />
        </>
    )
}