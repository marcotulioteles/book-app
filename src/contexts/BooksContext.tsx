import { SetStateAction } from "react";
import { createContext, ReactNode, useState, useContext } from "react";

type ImageLinks = {
  smallThumbnail: string;
  thumbnail: string
}

type VolumeInfo = {
  authors: Array<[]>;
  description: string;
  imageLinks: ImageLinks;
  subtitle: string;
  title: string;
}

export interface BooksData {
  id: string;
  volumeInfo: VolumeInfo;
}

interface BooksContextData {
  books: BooksData[];
  setBooks: React.Dispatch<SetStateAction<BooksData[]>>;
  query: string;
  setQuery: React.Dispatch<SetStateAction<string>>;
  debouncedInput: string;
  setDebouncedInput: React.Dispatch<SetStateAction<string>>
  bookIndex: number;
  setBookIndex: React.Dispatch<SetStateAction<number>>
  isError: boolean;
  setIsError: React.Dispatch<SetStateAction<boolean>>;
  clickedBook: BooksData;
  setClickedBook: React.Dispatch<SetStateAction<BooksData>>
}

interface BooksProviderProps {
  children: ReactNode
}

const BooksContext = createContext<BooksContextData>({} as BooksContextData)

export function BooksProvider({ children }: BooksProviderProps) {
  const [query, setQuery] = useState("")
  const [books, setBooks] = useState<BooksData[]>([])
  const [debouncedInput, setDebouncedInput] = useState("abc")
  const [bookIndex, setBookIndex] = useState(0)
  const [isError, setIsError] = useState(false)
  const [clickedBook, setClickedBook] = useState({} as BooksData)
    
  return (
    <BooksContext.Provider value={
      {
        books, 
        setBooks, 
        query, 
        setQuery, 
        debouncedInput, 
        setDebouncedInput, 
        bookIndex, 
        setBookIndex,
        isError,
        setIsError,
        clickedBook,
        setClickedBook
      }
    }>
      {children}
    </BooksContext.Provider>
  )
}

export function useBooks() {
  const context = useContext(BooksContext)
  
  const { 
    books, 
    setBooks, 
    bookIndex, 
    setBookIndex, 
    clickedBook, 
    setClickedBook, 
    debouncedInput, 
    setDebouncedInput,
    query,
    setQuery,
    isError,
    setIsError 
  } = context

  return {
    books, 
    setBooks, 
    bookIndex, 
    setBookIndex, 
    clickedBook, 
    setClickedBook, 
    debouncedInput, 
    setDebouncedInput,
    query,
    setQuery,
    isError,
    setIsError 
  }
}