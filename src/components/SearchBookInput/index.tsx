import styles from "./styles.module.scss"

export function SearchBook() {
  return (
    <label className={styles.inputSearchBox}>
      <img src="/images/search-icon.svg" alt="search-icon" />
      <input type="search" name="" id="" placeholder="Search Book" />
    </label>
  )
}