import {useEffect, useState} from "react";
import {FaAngleDoubleUp} from "react-icons/fa";

import styles from './ScrollToTop.module.scss'

const ScrollToTop = () => {

    const [showScrollToTopButton, setShowScrollToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.screenY > 300) {
                setShowScrollToTopButton(true)
            } else {
                setShowScrollToTopButton(false)
            }
        })
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>{showScrollToTopButton && <FaAngleDoubleUp className={styles.position} onClick={() => scrollTop()}/>}</div>
    )

}
export default ScrollToTop