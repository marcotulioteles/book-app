import { BooksData, useBooks } from "../../contexts/BooksContext"
import styles from "./styles.module.scss"
import { storeClickedBook } from "../../utils/Functions"
import { FiDownload } from "react-icons/fi"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export function SearchedElement() {
  const { books, debouncedInput } = useBooks()
  const [end, setEnd] = useState(3)
  const [booksSliced, setBooksSliced] = useState<BooksData[]>([])
  const [prevInput, setPrevInput] = useState("")

  useEffect(() => {
    try {
      setPrevInput(debouncedInput)
      setBooksSliced(books.slice(0, end))

      if (debouncedInput !== prevInput) {
        setEnd(3)
      }
    } catch (error) {
      console.error(error)
    }

  }, [end, books, debouncedInput])

  const handleLoadMore = () => {
    setEnd(booksSliced.length + 3)
  }

  return (
    <section className={styles.container}>
      {books === undefined ?
        <>
          <div className={styles.notFoundMessage}>
            <p>🙁 I'm sorry! No results found...</p>
          </div>
        </> : <>
          <div className={styles.booksContainer}>
            {booksSliced.map((book, index) => (
              <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.8}}>
                <Link to="/detail">
                  <div className={styles.booksInfo} key={book.id} onClick={() => { storeClickedBook(books[index]) }}>
                    <img src={book.volumeInfo.imageLinks?.thumbnail} alt="" />
                    <div>
                      <p>{book.volumeInfo.title}</p>
                      <p>{book.volumeInfo.authors}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            {(end < books.length) && <div className={styles.loadMoreButton} onClick={handleLoadMore}>
              <FiDownload size={16} style={{ color: "var(#FFF)", marginLeft: "10px" }} />
              <span>
                Load More
              </span></div>}
          </div>
        </>
      }
    </section>
  )
}