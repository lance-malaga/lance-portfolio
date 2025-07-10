import { useState } from "react";
import Link from "next/link"
import Image from "next/image"
import styles from "./GridLayout.module.scss"

export default function GridLayout({slug, filteredData}) {
    return (
        <div className={styles.grid__layout}>
            {filteredData.map((data, index) => (
                <div 
                    className={ index == 0 ? `${styles.work__content} ${styles.long}` : `${styles.work__content}`}
                    key={index}
                >
                    <Link href={`/work/${slug}/${data.slug}`}>
                        <Image
                            src={data.grid_img}
                            alt={data.slug + '-img'}
                            width={index == 0 ? 785 : 370}
                            height={400}
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