import styles from './TeamCard.module.scss'

const TeamCard = ({member}) => {
    return (
        <div key={member.id} className={styles.container}>
            <div className={styles.box}>
                <img src={member.image} alt="" className={styles.image}/>
                <p className={styles.name}>{member.name}</p>
                <p className={styles.description}>{member.description}</p>
            </div>
        </div>
    )
}
export default TeamCard