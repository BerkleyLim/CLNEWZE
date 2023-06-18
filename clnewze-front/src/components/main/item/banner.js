import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import styles from "../main.module.scss";

const MainBanner = () => {
  return (
    <nav className={`nav justify-content-center ${styles?.eventMainContainer}`}>
    <div className={`${styles?.eventIconPrev}`}>
      <ChevronLeft />
    </div>
    <div className={`${styles?.eventBannerCover}`}>
      <img
        src="image/sample-banner.jpg"
        style={{ width: "800px", height: "200px" }}
      />
    </div>
    <div className={`${styles?.eventIconNext}`}>
      <ChevronRight />
    </div>
  </nav>
  )
}

export default MainBanner