import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'

const MainBanner = () => {
  return (
    <nav className="nav justify-content-center event-main-container">
    <div className="event-icon-prev">
      <ChevronLeft />
    </div>
    <div className="event-banner-cover">
      <img
        src="image/sample-banner.jpg"
        style={{ width: "800px", height: "200px" }}
      />
    </div>
    <div className="event-icon-next">
      <ChevronRight />
    </div>
  </nav>
  )
}

export default MainBanner