import Image from 'next/image'
import Link from 'next/link'
import styles from './ShapeAnimation.module.scss'
import { shapes } from '@/data/shapes'
import squigglyLine from '@/public/icons/squiggly-line.svg'

export default function ShapeAnimation() {
    return (
        <div className={styles.shape__animation}>
            <div className={styles.shapes__container}>
                <div className={styles.first__row}>
                    {shapes.slice(0, 3).map((data, index) => (
                        <div className={styles.shape} key={index}>
                            <div className={ data.sample ? styles.frontFace : ''}>
                                <Image
                                    src={data.shape}
                                    alt={"shape" + data.id}
                                    width={"auto"}
                                    height={"auto"}
                                />
                            </div>
                            { data.sample && (
                                <div className={styles.backFace}>
                                    <Link href={data.link} target='_blank'>
                                        <Image
                                            src={data.sample}
                                            alt={"sample" + data.id}
                                            width={"auto"}
                                            height={"auto"}
                                        />
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className={styles.second__row}>
                    {shapes.slice(3, 7).map((data, index) => (
                        <div className={styles.shape} key={index}>
                            <div className={ data.sample ? styles.frontFace : ''}>
                                <Image
                                    src={data.shape}
                                    alt={"shape" + data.id}
                                    width={"auto"}
                                    height={"auto"}
                                />
                            </div>
                            { data.sample && (
                                <div className={styles.backFace}>
                                    <Link href={data.link} target='_blank'>
                                        <Image
                                            src={data.sample}
                                            alt={"sample" + data.id}
                                            width={"auto"}
                                            height={"auto"}
                                        />
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className={styles.third__row}>
                    {shapes.slice(7, 10).map((data, index) => (
                        <div className={styles.shape} key={index}>
                            <div className={ data.sample ? styles.frontFace : ''}>
                                <Image
                                    src={data.shape}
                                    alt={"shape" + data.id}
                                    width={"auto"}
                                    height={"auto"}
                                />
                            </div>
                            { data.sample && (
                                <div className={styles.backFace}>
                                    <Link href={data.link} target='_blank'>
                                        <Image
                                            src={data.sample}
                                            alt={"sample" + data.id}
                                            width={"auto"}
                                            height={"auto"}
                                        />
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div> 
            </div>
            <div className={styles.hover__container}>
                <p>hover over me</p>
                <Image
                    src={squigglyLine}
                    alt={"squigglyLine"}
                    width={"auto"}
                    height={"auto"}
                />
            </div>
        </div>
    )
}