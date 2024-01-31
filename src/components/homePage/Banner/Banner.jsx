import styles from './Banner.module.scss'

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className="inside">
                <div className={` ${styles.container}`}>
                    <p className={styles.hello}>Hello, my name is</p>
                    <p className={styles.name}>Mehdi Farshbaf</p>
                    <p className={styles.job}>And I'm a programmer</p>
                    <button className="button">Hire me</button>
                </div>
            </div>
        </section>
    )
}
export default Banner