import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { BooksData } from "../../contexts/BooksContext"
import { api } from "../../services/api"
import { storeClickedBook } from "../../utils/Functions"
import styles from "./styles.module.scss"

export function DiscoverNewBook() {
  const [homeBookObject, setHomeBookObject] = useState({} as BooksData)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const homeBooksId = "dsz5AwAAQBAJ"

    async function loadHomeBooks() {
      try {
        const response = await api.get(`/books/v1/volumes/${homeBooksId}`)
        const data = response.data
        setHomeBookObject(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    loadHomeBooks()
  }, [isLoading])

  if (isLoading) return <>
    <section className={styles.discoverNewBook}>
      <p>...loading</p>
    </section>
  </>

  return (
    <Link to="/detail" className={styles.discoverNewBook} onClick={() => { storeClickedBook(homeBookObject) }}>
      <img src="/images/Oval-Right.png" alt="" className={styles.ovalRight} />
      <div className={styles.titles}>
        <p>Discover new book</p>
        <Link to="/">More</Link>
      </div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <div className={styles.cardBook}>
          <img src="/images/oval-waves-discover.png" alt="" className={styles.ovalImageWaves} />
          <img src="/images/oval.svg" alt="" className={styles.Oval} />
          <img src="/images/triangle.svg" alt="" className={styles.Triangle} />
          <img src="/images/rectangle.svg" alt="" className={styles.Rectangle} />
          <div className={styles.cardBookInfo}>
            <div className={styles.cardBookInfoText}>
              <p>{homeBookObject.volumeInfo.title}</p>
              <p>{homeBookObject.volumeInfo.authors}</p>
              <div className={styles.readNow}>
                <img src="/images/graphic-icon.svg" alt="" />
                <p><span>120+</span> Read Now</p>
              </div>
            </div>
            <div className={styles.cardBookInfoImage}>
              <img src={homeBookObject.volumeInfo.imageLinks?.thumbnail} alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}