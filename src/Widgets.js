import React from 'react'
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Wide is back", "Top news -9999 readers")}
      {newsArticle("Corona !!", "Top news -9999 readers")}
      {newsArticle("Lorem blar", "Top news -9999 readers")}
      {newsArticle("Ukraine War", "Top news -9999 readers")}
    </div>
  )
}

export default Widgets