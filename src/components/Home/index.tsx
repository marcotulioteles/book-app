import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { CurrentlyReading } from "../CurrentlyReading"
import { DiscoverNewBook } from "../DiscoverNewBook"
import { NavBar } from "../NavBar"
import { ReviewsDays } from "../ReviewsDays"
import { Search } from "../Search"
import { SearchBook } from "../SearchBookInput"
import styles from "./styles.module.scss"

export function Home() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // setState(true)

  const query = "senhor dos anéis"

  useEffect(() => {
    async function loadBooks() {
      try {
        const response = await api.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        const data = response.data
        setBooks(data)
      } catch(error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
      loadBooks()
  }, [])

  console.log(books)

  return (
    <main className={styles.mainHome}>
      <div className={styles.container}>

        <SearchBook />

        {books ?
          <>
            <Search />
          </>
          :
          <>
            <div className={styles.greetingUserContainer}>
              <div className={styles.greetingUser}>
                <p>Hi, <span>Mehmed Al Fatih</span> 👋</p>
              </div>
            </div>

            <DiscoverNewBook />
            <CurrentlyReading />
            <ReviewsDays />
          </>
        }

        <NavBar />
      </div>
    </main>
  )
}