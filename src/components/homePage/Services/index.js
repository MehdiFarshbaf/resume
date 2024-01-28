import styles from './Services.module.scss'
import {listServices} from "./listservices";
import Card from "../../Cards/ServiceCard/Card";

const Service = () => {
    return (
        <section className={styles.services}>
            <div className="inside">
                <div className={styles.title}>
                    <h2>My Services</h2>
                </div>
                <div className={styles.content}>
                    {listServices.map(service => (
                        <Card service={service}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Service