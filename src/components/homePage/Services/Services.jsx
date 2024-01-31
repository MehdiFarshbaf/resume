import styles from './Services.module.scss'
import ServiceCard from "../../Cards/ServiceCard/ServiceCard";
import {listServices} from "../../../helper/data";

const Service = () => {
    return (
        <section className={styles.services}>
            <div className="inside">
                <div className={styles.title}>
                    <h2>My Services</h2>
                </div>
                <div className={styles.container}>
                    {listServices.map(service => (
                        <ServiceCard service={service}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Service