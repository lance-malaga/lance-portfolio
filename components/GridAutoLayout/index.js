import Link from "next/link"
import Image from "next/image"
import styles from "./GridAutoLayout.module.scss"

export default function GridAutoLayout({filteredData}) {
    return (
        <div className={styles.grid__container}>
             {filteredData.map((data, index) => (
                <div className={styles.grid__item} key={index}>
                    <Link href={data.link} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={data.grid_img}
                            alt={data.title + 'img'}
                        />
                        <div className={styles.overlay}>
                            <div>
                                <h4 style={{maxWidth: index == 0 ? 'none' : '370px' }}>
                                    {data.title}
                                </h4>
                                <p>
                                    {data.subtitle}
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}