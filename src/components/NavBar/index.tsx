import styles from "./styles.module.scss"
import { FiHome, FiBook, FiUser } from "react-icons/fi"

export function NavBar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <a href="/">
          <FiHome style={{ color: "#000000", marginTop: "10px" }} size={20} />
          <p>Home</p>
        </a>
        <a href="/">
          <FiBook style={{ color: "var(--inactive-color)", marginTop: "10px" }} size={20} />
          <p>Libraries</p>
        </a>
        <a href="/">
          <FiUser style={{ color: "var(--inactive-color)", marginTop: "10px" }} size={20} />
          <p>Profile</p>
        </a>
      </nav>
    </div>
  )
}