import styles from './ContactMe.module.scss'
import {contactInfoList} from "../../../helper/data";
import ContactInfo from "../../ContactInfo/ContactInfo";

const ContactMe = () => {
    return (
        <section className={`${styles.contactMe} inside`}>
            <div className={styles.title}>
                <h2>Contact Me</h2>
            </div>
            <div className={styles.container}>
                <div className='w-100'>
                    <h4 className={styles.title}>Get in Touch</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur dignissimos eveniet
                        facere in inventore iure iusto laudantium molestiae qui!</p>
                    <div className={styles.infoList}>
                        {contactInfoList.map(info => <ContactInfo info={info}/>)}
                    </div>
                </div>
                <div className='w-100'>
                    <h2 className={styles.title}>Message Me</h2>
                    <form action="#" className="">
                        <div className={styles.fields}>
                            <input className={styles.field} type="text" placeholder="name"/>
                            <input className={styles.field} type="email" placeholder="email"/>
                        </div>
                        <div className={styles.field}>
                            <input className={styles.field} type="text" placeholder="Subject"/>
                        </div>
                        <div className="">
                            <textarea name="" id="" cols="30" placeholder="Description Project" rows="8"/>
                        </div>
                        <button className='button' type='submit'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default ContactMe