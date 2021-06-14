import { useEffect, useState } from "react"
import { BooksData } from "../../contexts/BooksContext"
import { api } from "../../services/api"
import { storeClickedBook } from "../../utils/Functions"
import styles from "./styles.module.scss"

export function CurrentlyReading() {
  const [isLoading, setIsLoading] = useState(true)
  const [homeBookObject, setHomeBookObject] = useState({} as BooksData)

  useEffect(() => {
    const homeBooksId = "eLRhDgAAQBAJ"

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

  if (isLoading) return(
    <>
      <section className={styles.currentlyReading}>
        <p>...loading</p>
      </section>
    </>
  )

  return (
    <a href="/detail" className={styles.currentlyReading} onClick={() => {storeClickedBook(homeBookObject)}}>
      <div className={styles.titles}>
        <p>Currently Reading</p>
        <a href="/">All</a>
      </div>
      <div className={styles.cardBook}>
        <img src="/images/oval-full.png" alt="" className={styles.ovalFull} />
        <img src="/images/oval.svg" alt="" className={styles.Oval} />
        <img src="/images/gray-oval.png" alt="" className={styles.grayOval} />
        <img src="/images/rectangle.svg" alt="" className={styles.Rectangle} />
        <div className={styles.bookCoverImage}>
          <img src={homeBookObject.volumeInfo.imageLinks?.thumbnail} alt=""/>
        </div>
        <div className={styles.bookInfo}>
          <p>{homeBookObject.volumeInfo.title}</p>
          <p>{homeBookObject.volumeInfo.authors}</p>
          <div className={styles.chapterMark}>
            <img src="/images/purple-book.svg" alt="" />
            <p>Chapter <span>2</span> From 9</p>
          </div>
        </div>
      </div>
    </a>
  )
}