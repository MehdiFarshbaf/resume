import styles from './Skills.module.scss'
import {FaArrowRight} from "react-icons/fa";
import {skillsList} from "../../../helper/data";
import Chart from "../../Chart/Chart";

const Skills = () => {
    return (
        <section className={`${styles.skills} inside`}>
            <div className={styles.title}>
                <h2>My Skills</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.description}>
                    <p>My Creative Skills & expriences.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, et illo iure neque pariatur
                        perferendis rerum unde! Aperiam assumenda cum dignissimos doloribus, error eveniet excepturi
                        exercitationem itaque mollitia nam, vel.</p>
                    <button className='button'>Read more <FaArrowRight/></button>
                </div>
                <div className={styles.chart}>
                    {skillsList.map(skill => (
                        <Chart info={skill}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Skills