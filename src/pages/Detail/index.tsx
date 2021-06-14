import { useState } from "react"
import { FiArrowLeft } from "react-icons/fi"
import { OptionBarDetailPage } from "../../components/OptionBarDetailPage"
import { BooksData } from "../../contexts/BooksContext"

import styles from "./styles.module.scss"

export function Detail() {
  const [book, setBook] = useState<BooksData>(() => {
    const storageBook = localStorage.getItem("@BookApp:book")

    if (storageBook) {
      return JSON.parse(storageBook)
    }

    return {}
  })

  return (
    <main className={styles.mainDetail}>
      <div className={styles.container}>
        <div className={styles.headerDetail}>
          <a href="/">
            <FiArrowLeft size={20} style={{ position: "absolute",  top: "55px", left: "33px"}}/>
          </a>
          <img src="/images/red-oval.svg" alt="" className={styles.redOval}/>
          <img src="/images/black-oval.svg" alt="" className={styles.blackOval}/>
          <img src="/images/little-oval-full.png" alt="" className={styles.littleOvalFull}/>
          <img src="/images/oval.svg" alt="" className={styles.Oval} />
          <img src="/images/big-oval-right-detailpage.png" alt="" className={styles.bigOvalDetailPage}/>
          <div className={styles.bookCoverImage}>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt=""/>
          </div>
        </div>
        <div className={styles.bookDetails}>
          <p className={styles.bookSubtitle}><span className={styles.bookTitle}>{book.volumeInfo.title}</span>: {book.volumeInfo?.subtitle}</p>
          <p className={styles.bookAuthor}>{book.volumeInfo.authors}</p>
          <p className={styles.bookDescription}>{book.volumeInfo.description}</p>
        </div>
        <OptionBarDetailPage />
      </div>
    </main>
  )
}