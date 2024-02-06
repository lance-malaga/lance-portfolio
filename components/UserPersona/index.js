import Image from 'next/image'
import styles from './UserPersona.module.scss'

export default function UserPersona({props}) {
    return (
        <div className={styles.user_persona__container}>
            <Image
                src={props.image}
                alt='user-persona'
                width={"auto"}
                height={"auto"}
            />
            { props.info.map((item, index) => (
                <div className={styles.index} key={index}>
                    <h6>{item.title}</h6>
                    <h3>{item.desc}</h3>
                </div>
            ))}
            <div className={styles.background__container}>
                <h6>Background</h6>
                <p>{props.background}</p>
            </div>
            <div className={`${styles.list__container} ${styles.motivations__container}`}>
                <h6>Motivations</h6>
                <ol>
                    {props.motivations.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>
            <div className={`${styles.list__container} ${styles.goals__container}`}>
                <h6>Goals</h6>
                <ol>
                    {props.goals.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>
            <div className={`${styles.list__container} ${styles.frustrations__container}`}>
                <h6>Frustrations</h6>
                <ol>
                    {props.frustrations.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}