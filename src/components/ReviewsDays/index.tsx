import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import styles from "./styles.module.scss"

export function ReviewsDays() {
  return (
    <section className={styles.reviewsOfTheDays}>
      <div className={styles.titles}>
        <p>Reviews of The Days</p>
        <Link to="/">All Video</Link>
      </div>
      <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
        <div className={styles.cardBook} />
      </motion.div>
    </section>
  )
}