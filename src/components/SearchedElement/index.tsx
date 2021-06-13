import { BooksData, useBooks } from "../../contexts/BooksContext"
import styles from "./styles.module.scss"
import { storeClickedBook } from "../../utils/Functions"

export function SearchedElement() {
  const { books } = useBooks()

  return (
    <section className={styles.container}>
      {books === undefined ?
        <>
          <div className={styles.notFoundMessage}>
            <p>I'm sorry! No results found...</p>
          </div>
        </> : <>
          <div className={styles.booksContainer}>
            {books.map((book, index) => (
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
          </div>
        </>
      }
    </section>
  )
}