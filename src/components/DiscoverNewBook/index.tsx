import styles from "./styles.module.scss"

export function DiscoverNewBook() {
  return (
    <section className={styles.discoverNewBook}>
      <img src="/images/Oval-Right.png" alt="" className={styles.ovalRight} />
      <div className={styles.titles}>
        <p>Discover new book</p>
        <a href="/">More</a>
      </div>

      <div className={styles.cardBook}>
        <img src="/images/oval-waves-discover.png" alt="" className={styles.ovalImageWaves} />
        <img src="/images/Oval.svg" alt="" className={styles.Oval} />
        <img src="/images/Triangle.svg" alt="" className={styles.Triangle} />
        <img src="/images/Rectangle.svg" alt="" className={styles.Rectangle} />
        <div className={styles.cardBookInfo}>
          <div className={styles.cardBookInfoText}>
            <p>Hooked</p>
            <p>Nir Eyal</p>
            <div className={styles.readNow}>
              <img src="/images/graphic-icon.svg" alt="" />
              <p><span>120+</span> Read Now</p>
            </div>
          </div>
          <div className={styles.cardBookInfoImage}>
            <img src="/images/hooked-book.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}