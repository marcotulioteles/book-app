import { CurrentlyReading } from "../../components/CurrentlyReading"
import { DiscoverNewBook } from "../../components/DiscoverNewBook"
import { NavBar } from "../../components/NavBar"
import { ReviewsDays } from "../../components/ReviewsDays"
import { SearchedElement } from "../../components/SearchedElement"
import { SearchBook } from "../../components/SearchBookInput"
import { useBooks } from "../../contexts/BooksContext"

import styles from "./styles.module.scss"

export function Home() {
  const { debouncedInput } = useBooks()

  return (
    <main className={styles.mainHome}>
      <div className={styles.container}>

        <SearchBook />

        {debouncedInput !== "" ?
          <>
            <SearchedElement />
          </> : 
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