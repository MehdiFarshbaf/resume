import styles from './MyTeams.module.scss'
import {teamList} from "../../../helper/data";
import TeamCard from "../../Cards/TeamCard/TeamCard";

const MyTeams = () => {
    return (
        <section className={styles.myTeams}>
            <div className="inside">
                <div className={styles.title}>
                    <h2>My Teams</h2>
                </div>
                <div className={styles.container}>
                    {teamList.map(member => (<TeamCard member={member}/>))}
                </div>
            </div>
        </section>
    )
}
export default MyTeams