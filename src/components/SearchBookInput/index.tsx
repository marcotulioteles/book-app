import { ChangeEvent, useEffect, useState } from "react"
import { useBooks } from "../../contexts/BooksContext"
import useDebounce from "../../hooks/useDebounce"
import { api } from "../../services/api"
import styles from "./styles.module.scss"

export function SearchBook() {
  const [value, setValue] = useState<string>("")
  const { setDebouncedInput, setIsError, setBooks } = useBooks()
  
  const debouncedValue = useDebounce<string>(value, 1000)

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  
  useEffect(() => {
    async function loadBooks() {
      try {
        const response = await api.get(`/books/v1/volumes?q=${debouncedValue}&maxResults=9`)
        const data = response.data
        setBooks(data.items)
      } catch (error) {
        console.log(error)
        setIsError(true)
      } finally {
        setDebouncedInput(debouncedValue)
      }
    }
      loadBooks()
  }, [debouncedValue])

  return (
    <label className={styles.inputSearchBox}>
      <img src="/images/search-icon.svg" alt="search-icon" />
      <input
        type="search"
        name=""
        id=""
        placeholder="Search Book"
        onChange={handleSearchInput}
      />
    </label>
  )
}