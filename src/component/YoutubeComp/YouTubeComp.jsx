import React from "react";
import '../../style/YouTubeComp.css'

const YoutubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src="http://i.ytimg.com/vi/KcaKocRXCB4/maxresdefault.jpg" alt="" />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  )
}

YoutubeComp.defaultProps = {time:'00.00',title:'Title Here', desc:'xx ditonton, x hari yang lalu'}

export default YoutubeComp;