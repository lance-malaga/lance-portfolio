import Image from 'next/image'
import styles from './Branding.module.scss'

export default function Branding({props}) {
    return (
        <div className={styles.branding__container}>
            <div className={styles.logo__container}>
                <h6>Logo</h6>
                <Image
                    src={props.logo_img}
                    alt='logo_img'
                    width={"auto"}
                    height={"auto"}
                />
            </div>
            <div className={styles.fonts__container}>
                <h6>Fonts</h6>
                <Image
                    src={props.font_img}
                    alt='font_img'
                    width={"auto"}
                    height={"auto"}
                />
            </div>
            <div className={styles.colors__container}>
                <h6>Colors</h6>
                <div className={styles.colors__grid}>
                    {props.colors.map((item, index) => (
                        <div key={index}>
                            <div style={{backgroundColor: item}} className={styles.color_palette} />
                            <span style={{color: item}}>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}