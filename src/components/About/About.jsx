import styles from './About.module.scss'

const About = () => {
    return (
        <section className={`${styles.about} inside`}>
            <div className={styles.top}>
                <h2>About Me</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <img src={require("../../assets/images/profile-1.jpeg")} alt=""/>
                </div>
                <div className={styles.description}>
                    <h4>I'm Mehdi and I'm a <span>Programmer</span></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab at cupiditate deleniti deserunt
                        doloremque doloribus ducimus est laudantium libero magnam maxime perferendis quis quos
                        repellendus reprehenderit, sequi vero voluptas?</p>
                    <button className='button'>Download CV</button>
                </div>
            </div>
        </section>
    )
}
export default About