import styles from "./styles.module.scss"

export function CurrentlyReading() {
  return (
    <section className={styles.currentlyReading}>
      <div className={styles.titles}>
        <p>Currently Reading</p>
        <a href="/">All</a>
      </div>
      <div className={styles.cardBook}>
        <img src="/images/oval-full.png" alt="" className={styles.ovalFull} />
        <img src="/images/Oval.svg" alt="" className={styles.Oval} />
        <img src="/images/gray-oval.png" alt="" className={styles.grayOval} />
        <img src="/images/Rectangle.svg" alt="" className={styles.Rectangle} />
        <div className={styles.bookCoverImage}>
          <img src="/images/originals.png" alt=""/>
        </div>
        <div className={styles.bookInfo}>
          <p>Originals</p>
          <p>by Adam Grant</p>
          <div className={styles.chapterMark}>
            <img src="/images/purple-book.svg" alt="" />
            <p>Chapter <span>2</span> From 9</p>
          </div>
        </div>
      </div>
    </section>
  )
}