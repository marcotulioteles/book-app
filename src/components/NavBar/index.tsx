import styles from "./styles.module.scss"
import { FiHome, FiBook, FiUser } from "react-icons/fi"
import { Link } from "react-router-dom"

export function NavBar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <Link to="/">
          <FiHome style={{ color: "#000000", marginTop: "10px" }} size={20} className={styles.Icon}/>
          <p>Home</p>
        </Link>
        <Link to="/">
          <FiBook style={{ color: "var(--inactive-color)", marginTop: "10px" }} size={20} className={styles.Icon}/>
          <p>Libraries</p>
        </Link>
        <Link to="/">
          <FiUser style={{ color: "var(--inactive-color)", marginTop: "10px" }} size={20} />
          <p>Profile</p>
        </Link>
      </nav>
    </div>
  )
}