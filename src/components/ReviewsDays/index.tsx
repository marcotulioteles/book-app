import styles from "./styles.module.scss"

export function ReviewsDays() {
  return (
    <section className={styles.reviewsOfTheDays}>
      <div className={styles.titles}>
        <p>Reviews of The Days</p>
        <a href="/">All Video</a>
      </div>
      <div className={styles.cardBook} />
    </section>
  )
}