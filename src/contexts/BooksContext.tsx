import { createContext, ReactNode, useState, useContext, SetStateAction, useEffect } from "react";

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
  debouncedInput: string;
  setDebouncedInput: React.Dispatch<SetStateAction<string>>
  isError: boolean;
  setIsError: React.Dispatch<SetStateAction<boolean>>;
}

interface BooksProviderProps {
  children: ReactNode
}

const BooksContext = createContext<BooksContextData>({} as BooksContextData)

export function BooksProvider({ children }: BooksProviderProps) {
  const [books, setBooks] = useState<BooksData[]>([])
  const [debouncedInput, setDebouncedInput] = useState("")
  const [isError, setIsError] = useState(false)
  
  return (
    <BooksContext.Provider value={{ books, setBooks, debouncedInput, setDebouncedInput, isError, setIsError, }}>
      {children}
    </BooksContext.Provider>
  )
}

export function useBooks() {
  const context = useContext(BooksContext)
  const { books, setBooks, debouncedInput, setDebouncedInput, isError, setIsError } = context

  return { books, setBooks, debouncedInput, setDebouncedInput, isError, setIsError }
}