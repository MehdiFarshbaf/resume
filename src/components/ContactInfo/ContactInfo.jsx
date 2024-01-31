import styles from './ContactInfo.module.scss'

const ContactInfo = ({info}) => {
    return (
        <div key={info.id} className={styles.contactInfo}>
            <div className={styles.icon}>
                {info.icon}
            </div>
            <div className={styles.info}>
                <p className={styles.label}>{info.label}</p>
                <p className={styles.description}>{info.description}</p>
            </div>
        </div>
    )
}
export default ContactInfo