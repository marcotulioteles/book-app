import { BooksData, useBooks } from "../../contexts/BooksContext"
import styles from "./styles.module.scss"
import { storeClickedBook } from "../../utils/Functions"
import { useEffect, useState } from "react"

export function SearchedElement() {
  const { books, debouncedInput } = useBooks()
  const [end, setEnd] = useState(3)
  const [booksSliced, setBooksSliced] = useState<BooksData[]>([])
  const [prevInput, setPrevInput] = useState("")

  useEffect(() => {
    setPrevInput(debouncedInput)
    setBooksSliced(books.slice(0, end))

    if (debouncedInput !== prevInput) {
      setEnd(3)
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
            <p>I'm sorry! No results found...</p>
          </div>
        </> : <>
          <div className={styles.booksContainer}>
            {booksSliced.map((book, index) => (
              <a href="/detail">
                <div className={styles.booksInfo} key={book.id} onClick={() => {storeClickedBook(books[index])}}>
                  <img src={book.volumeInfo.imageLinks?.thumbnail} alt="" />
                  <div>
                    <p>{book.volumeInfo.title}</p>
                    <p>{book.volumeInfo.authors}</p>
                  </div>
                </div>
              </a>
            ))}
          { (end < books.length) && <button onClick={handleLoadMore} className={styles.loadMoreButton}>Load More</button> }
          </div>
        </>
      }
    </section>
  )
}