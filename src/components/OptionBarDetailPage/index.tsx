import { FiBookOpen, FiHeadphones, FiShare } from "react-icons/fi"

import styles from "./styles.module.scss"

export function OptionBarDetailPage() {
  return (
    <div className={styles.container}>
      <div className={styles.navItems}>
        <div className={styles.read}>
          <FiBookOpen size={18} style={{ color: "#CFCBD2" }}/>
          <p>Read</p>
        </div>
        <div className={styles.listen}>
          <FiHeadphones size={18} style={{ color: "#CFCBD2" }}/>
          <p>Listen</p>
        </div>
        <div className={styles.share}>
          <FiShare size={18} style={{ color: "#CFCBD2" }}/>
          <p>Share</p>
        </div>
      </div>
    </div>
  )
}