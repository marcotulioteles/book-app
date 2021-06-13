import { BooksData } from "../contexts/BooksContext"

export const storeClickedBook = (bookObject: BooksData) => {
  localStorage.setItem("@BookApp:book", JSON.stringify(bookObject))
}