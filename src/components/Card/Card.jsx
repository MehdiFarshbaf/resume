import styles from './Card.module.scss'

const Card = ({service}) => {
    return (
        <div key={service.id} className={styles.card}>
            <div className={styles.container}>
                {service.icon}
                <p className={styles.title}>{service.title}</p>
                <p className={styles.description}>{service.description}</p>
            </div>
        </div>
    )
}
export default Card